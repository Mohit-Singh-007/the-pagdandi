import NextAuth, { User } from "next-auth";
import Google from "next-auth/providers/google";
import { createUser, getUsers } from "@/db/data-service";
import { UserType } from "@/types/db";
import Credentials from "next-auth/providers/credentials";
import { compare } from "bcryptjs";

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Credentials({
      name: "credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },

      async authorize(credentials) {
        const email = credentials.email as string;
        const password = credentials.password as string;

        const user: UserType | null = await getUsers(email);
        if (!user || !user.password) {
          return null;
        }

        const isValidPassword = await compare(
          password as string,
          user.password as string
        );
        if (!isValidPassword) {
          return null;
        }

        const userData = {
          email: user.email,
          role: user.role ?? "user",
        };

        return userData;
      },
    }),
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
      return session;
    },
  },
  pages: {
    signIn: "/login",
  },
});
