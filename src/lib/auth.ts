import NextAuth from "next-auth";
import Google from "next-auth/providers/google";
import { getUsers } from "@/db/data-service";
import { createUser } from "./action";

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Google({
      clientId: process.env.AUTH_GOOGLE_ID,
      clientSecret: process.env.AUTH_GOOGLE_SECRET,
    }),
  ],

  callbacks: {
    authorized({ auth, request }) {
      return !!auth?.user;
    },
    async signIn({ user, account, profile }) {
      try {
        const existingGuest = await getUsers(user.email);

        if (!existingGuest) {
          await createUser({
            email: user.email as string,
            name: user.name as string,
          });
        }

        return true;
      } catch {
        return false;
      }
    },
    async session({ session, user }) {
      const guest = await getUsers(session.user.email);
      session.user.id = guest?.id;
      return session;
    },
  },
  pages: {
    signIn: "/login",
    signOut: "/logout",
  },
});
