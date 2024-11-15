"use server";

import { auth, signIn, signOut } from "@/lib/auth";
import { supabase } from "./supabase";
import { revalidatePath } from "next/cache";

export async function signInAction(): Promise<void> {
  await signIn("google", { redirectTo: "/" });
}

export async function signOutAction(): Promise<void> {
  await signOut({ redirectTo: "/" });
}

export async function deleteBlog(blogId: number) {
  const session = await auth();

  if (!session || session.user.role !== "admin")
    throw new Error("You must be logged in as an admin");

  const { error } = await supabase.from("posts").delete().eq("id", blogId);
  if (error) throw new Error("Booking could not be deleted");

  revalidatePath("/admin/all-blogs");
}


export async function getUserById(userId: number) {
  const { data, error } = await supabase
    .from("posts")
    .select("*")
    .eq("author_id", userId);

  if (error) throw new Error("User can't be fetched");

  return data;
}
