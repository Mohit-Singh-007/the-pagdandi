import NextAuth from "next-auth";
import Google from "next-auth/providers/google";
import { supabase } from "./supabase";

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Google({
      clientId: process.env.AUTH_GOOGLE_ID,
      clientSecret: process.env.AUTH_GOOGLE_SECRET,
      profile(profile) {
        const isAdmin = profile.email === process.env.ADMIN_EMAIL_FIRST;
        // profile.email === process.env.ADMIN_EMAIL_SECOND;
        return {
          ...profile,
          image: profile.picture,
          role: isAdmin ? "admin" : "user",
        };
      },
    }),
  ],

  callbacks: {
    async signIn({ user, account }) {
      const { email, name, role } = user;

      try {
        const { data: existingUser, error: fetchError } = await supabase
          .from("users")
          .select("*")
          .eq("email", email)
          .maybeSingle();

        if (fetchError) {
          console.error("Error fetching user:", fetchError);
          return false; // Handle fetch error
        }

        if (!existingUser) {
          const { error: insertError } = await supabase.from("users").insert({
            email,
            name,
            role,
          });

          if (insertError) {
            console.error("Error inserting new user:", insertError);
            return false; // Deny access if insert fails
          }
        } else {
          // If the user exists but the role is different, update the user
          if (existingUser.role !== role) {
            const { error: updateError } = await supabase
              .from("users")
              .update({ role })
              .eq("email", email);

            if (updateError) {
              console.error("Error updating user role:", updateError);
              return false; // Deny access if update fails
            }
          }
        }

        return true; // Allow sign-in if all checks pass
      } catch (err) {
        console.error("Unexpected error:", err);
        return false; // Deny access on any other error
      }
    },
    jwt({ user, token }) {
      if (user) {
        token.role = user.role;
        token.picture = user.image;
      }
      return token;
    },

    async session({ session, token }) {
      // Optionally fetch the updated user information from the database
      const { data: userFromDb, error: fetchError } = await supabase
        .from("users")
        .select("*")
        .eq("email", token.email)
        .single();

      if (fetchError) {
        console.error("Error fetching user from DB:", fetchError);
        return session; // return existing session
      }

      session.user.role = userFromDb.role; // update role if necessary
      session.user.image = token.picture; // Keep the profile image

      return session;
    },
  },
});
