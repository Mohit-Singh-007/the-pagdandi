import NextAuth from "next-auth";
import Google from "next-auth/providers/google";

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
