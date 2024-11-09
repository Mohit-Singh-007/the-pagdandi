"use server";

import { signIn, signOut } from "@/lib/auth";

export async function signInAction(): Promise<void> {
  await signIn("google", { redirectTo: "/" });
}

export async function signOutAction(): Promise<void> {
  await signOut({ redirectTo: "/" });
}
