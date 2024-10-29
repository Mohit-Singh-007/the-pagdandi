import NextAuth from "next-auth";
import Google from "next-auth/providers/google";
import { saveUserToDB } from "@/db/data-service";
import { supabase } from "./supabase";

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Google({
      clientId: process.env.AUTH_GOOGLE_ID,
      clientSecret: process.env.AUTH_GOOGLE_SECRET,
      profile(profile) {
        const isAdmin =
          profile.email === process.env.ADMIN_EMAIL_FIRST ||
          profile.email === process.env.ADMIN_EMAIL_SECOND;
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
        // Check if user already exists in Supabase
        const { data: existingUser, error: fetchError } = await supabase
          .from("users")
          .select("*")
          .eq("email", email)
          .maybeSingle();

        if (fetchError) {
          console.error("Error fetching user:", fetchError);
          return false; // Deny access if there is an issue fetching
        }

        if (!existingUser) {
          // If user doesn't exist, insert them into the 'users' table
          const { error: insertError } = await supabase.from("users").insert({
            email,
            name,
            role,
          });

          if (insertError) {
            console.error("Error inserting new user:", insertError);
            return false; // Deny access if insert fails
          }
        }

        return true; // Allow sign-in if all is good
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
    session({ session, token }) {
      session.user.role = token.role;
      session.user.image = token.picture;
      return session;
    },
  },
});
