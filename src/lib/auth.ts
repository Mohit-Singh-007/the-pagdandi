import NextAuth from "next-auth";
import Google from "next-auth/providers/google";
import { createUser, getUsers } from "@/db/data-service";

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
        const existingUser = await getUsers(user.email);

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

    jwt({ user, token }) {
      if (user) {
        token.role = user.role;
      }
      return token;
    },

    async session({ session, token }) {
      session.user.role = token.role;
      return session;
    },
  },
});
