import NextAuth from "next-auth";
import Google from "next-auth/providers/google";

const authConfig = {
  providers: [
    Google({
      clientId: process.env.AUTH_GOOGLE_ID,
      clientSecret: process.env.AUTH_GOOGLE_SECRET,
    }),
  ],
  authorized({ auth, request }) {
    return !!auth?.user;
  },
};

export const { auth, signIn, signOut, handlers } = NextAuth(authConfig);
