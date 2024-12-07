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

export async function getAllBlogs() {
  const {
    data: blogs,
    error,
    count,
  } = await supabase
    .from("posts")
    .select("*", { count: "exact" })
    .order("created_at", { ascending: false });
  if (error) {
    throw new Error("Cant get all blogs");
  }

  return { blogs, count };
}

export async function getBlogsByName(authorName: string) {
  const decodedAuthorName = decodeURIComponent(authorName); // Decoding the author name
  const { data: blogs, error } = await supabase
    .from("posts")
    .select("*")
    .eq("author_name", decodedAuthorName);

  if (error) {
    throw new Error("Error in getBlogsByName");
  }

  return blogs;
}

export async function getBlogsById(id: number) {
  const { data: blogs, error } = await supabase
    .from("posts")
    .select("*")
    .eq("id", id)
    .single();

  if (error) {
    throw new Error("Error in getBlogsByName");
  }

  return blogs;
}

export async function getAllAuthors() {
  const { data: authors, error } = await supabase
    .from("posts")
    .select("author_name");

  if (error) {
    throw new Error("Cant get all blogs");
  }

  return authors;
}

export async function getAllBlogsId() {
  const { data: blogs, error } = await supabase.from("posts").select("id");

  if (error) {
    throw new Error("Error in getBlogsByName");
  }

  return blogs;
}
