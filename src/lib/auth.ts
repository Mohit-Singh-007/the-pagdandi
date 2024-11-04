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

        // If the user already exists, assign their role
        if (existingUser) {
          user.role = existingUser.role as string; // This should correctly assign the role
        } else {
          await createUser({
            email: user.email,
            password: null,
            provider: "Google",
            role: "user",
          });
          user.role = "user";
        }

        return true; // Return true to indicate successful sign-in
      } catch (error) {
        console.error("Sign-in error:", error); // Log the error for debugging
        return false; // Return false on error
      }
    },
    async jwt({ user, token }) {
      if (user) {
        token.role = user.role; // Make sure token.role matches user.role here
      } else if (!token.role && token.email) {
        const dbUser = await getUsers(token.email);
        if (dbUser) {
          token.role = dbUser.role; // Ensure role is set from DB
        }
      }
      return token;
    },
    async session({ session, token }) {
      session.user.role = token.role; // Explicitly set session user role from token
      return session;
    },
  },
  pages: {
    signIn: "/login",
  },
});
