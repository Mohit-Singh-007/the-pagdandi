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

    async session({ session, token }) {
      const user = await getUsers(session.user.email);
      session.user.id = user?.id;
      session.user.role = user?.role;
      session.user.email = user?.email;

      return session;
    },
  },
  pages: {
    signIn: "/login",
  },
});
