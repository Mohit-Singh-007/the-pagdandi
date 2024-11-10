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

  console.log(data);

  if (error) {
    return { error: "Not found" };
  }

  return data;
}

export async function deletePost(id) {
  const { error } = await supabase.from("posts").delete().eq(" id ", id);
  if (error) {
    console.error(error.message);
    return { status: "error", message: "Error deleting posts" };
  }

  return { status: "success", message: "Post deleted successfully" };
}

export async function addPost() {}
