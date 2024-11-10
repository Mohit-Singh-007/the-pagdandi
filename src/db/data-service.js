import { revalidatePath } from "next/cache";
import { supabase } from "../lib/supabase";

export async function getUsers(email) {
  if (!email) return null;
  const { data, error } = await supabase
    .from("users")
    .select(" id , email , role")
    .eq("email", email)
    .single();

  if (error) {
    return null;
  }

  return data;
}

export async function createUser({ email, provider, role }) {
  const { data, error } = await supabase.from("users").insert[
    { email, provider, role: "user" }
  ];

  if (error) {
    return { error: error.message };
  }

  return { message: "User created successfully", user: data };
}

export async function getAllBlogs() {
  const { data, error } = await supabase
    .from("posts")
    .select("id , title , slug , description , author_id , created_at");

  if (error) {
    return { error: "Not found" };
  }

  revalidatePath("/blogs");
  return data;
}

export async function getUserById(userId) {
  const { data, error } = await supabase
    .from("posts")
    .select("*")
    .eq("author_id", userId);

  if (error) throw new Error("User can't be fetched");

  return data;
}

export async function addPost() {}
