"use server";

import { signIn, signOut } from "@/lib/auth";
import { supabase } from "./supabase";

export async function signInAction(): Promise<void> {
  await signIn("google", { redirectTo: "/blogs" });
}

export async function signOutAction(): Promise<void> {
  await signOut({ redirectTo: "/" });
}

export async function createUser({
  email,
  name,
}: {
  email: string;
  name: string;
}) {
  const { data, error } = await supabase
    .from("users")
    .insert([{ email, name }]);

  if (error) {
    throw new Error("User can't be created" + error.message);
  }

  return data;
}
