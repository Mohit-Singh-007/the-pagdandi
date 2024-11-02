import NextAuth from "next-auth";
import Google from "next-auth/providers/google";
import { createUser, getUsers } from "@/db/data-service";
import { UserType } from "@/types/db";

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Google({
      clientId: process.env.AUTH_GOOGLE_ID,
      clientSecret: process.env.AUTH_GOOGLE_SECRET,
    }),
  ],

  callbacks: {
    async signIn({ user, account }) {
      try {
        const existingUser: UserType | null = await getUsers(user.email);

        if (!existingUser) {
          await createUser({
            email: user.email,
            password: null,
            provider: "Google",
            role: "user",
          });
        }

        return true;
      } catch (error) {
        return false;
      }
    },

    async jwt({ user, token }) {
      if (user) {
        token.role = user.role ?? "user";
        token.email = user.email ?? "";
        console.log("Role set on token after sign-in:", token.role);
      } else if (!token.role && token.email) {
        const dbUser: UserType | null = await getUsers(token.email);
        if (dbUser) {
          token.role = dbUser.role ?? "user";
        }
      }
      return token;
    },

    async session({ session, token }) {
      session.user.role = token.role ?? "user";
      console.log("Session role:", session.user.role);
      return session;
    },
  },
});
