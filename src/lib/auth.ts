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

  session: {
    maxAge: 24 * 60 * 60,
    updateAge: 24 * 60 * 60,
  },

  callbacks: {
    async signIn({ user, account }) {
      try {
        const existingUser: UserType | null = await getUsers(user.email);

        if (existingUser) {
          user.role = existingUser.role as string;
        } else {
          await createUser({
            email: user.email,
            provider: "Google",
            role: "user",
          });
          user.role = "user";
        }

        return true;
      } catch (error) {
        return false;
      }
    },

    async jwt({ user, token }) {
      if (user) {
        token.role = user.role;
      }
      return token;
    },

    async session({ session, token }) {
      const dbUser = await getUsers(token.email);
      if (dbUser) {
        session.user.role = dbUser.role || "user";
      } else {
        session.user.role = token.role || "user";
      }
      return session;
    },
  },
  pages: {
    signIn: "/login",
  },
});
