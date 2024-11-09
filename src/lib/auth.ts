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
    async signIn({ user }) {
      try {
        const existingUser = await getUsers(user.email);

        if (existingUser) {
          user.role = existingUser.role;
        } else {
          user.role = "user";
          await createUser({
            email: user.email,
            provider: "Google",
            role: user.role,
          });
        }
        return true;
      } catch (error) {
        return false;
      }
    },

    async jwt({ user, token }) {
      if (user) {
        token.role = user.role;
        token.email = user.email;
      }
      return token;
    },

    async session({ session, token }) {
      if (token.role) {
        session.user.role = token.role;
      }
      return session;
    },
  },
  pages: {
    signIn: "/login",
  },
});
