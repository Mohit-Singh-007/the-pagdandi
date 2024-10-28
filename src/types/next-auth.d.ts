import { type DefaultSession, type DefaultUser } from "next-auth";
import { JWT, type DefaultJWT } from "next-auth/jwt";

declare module "next-auth" {
  export interface Session {
    user: {
      id: string; // Assuming you are storing user ID
      name?: string | null; // Nullable to match potential profile data
      email?: string | null; // Nullable to match potential profile data
      image?: string | null; // Nullable to match potential profile data
      role?: string; // Role of the user
    } & DefaultSession; // Extend the user from DefaultSession
  }

  export interface User extends DefaultUser {
    role: string;
  }
}

declare module "next-auth/jwt" {
  export interface JWT extends DefaultJWT {
    role: string; // Role stored in the JWT
  }
}
