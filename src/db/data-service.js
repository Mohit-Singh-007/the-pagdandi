import { supabase } from "../lib/supabase";

export async function getUsers(email) {
  if (!email) return null;
  const { data, error } = await supabase
    .from("users")
    .select(" id , email , name")
    .eq("email", email)
    .single();

  if (error) {
    console.error(error);
    throw new Error("Error in getUsers");
  }

  return data;
}

export async function createUser({ email, name }) {
  const { data, error } = await supabase
    .from("users")
    .insert([{ email, name }]);

  if (error) {
    return { error: error.message };
  }

  return { message: "User created successfully", user: data };
}

export async function getBlogsByName(authorName) {
  const decodedAuthorName = decodeURIComponent(authorName); // Decoding the author name
  const { data: blogs, error } = await supabase
    .from("posts")
    .select("*")
    .eq("author_name", decodedAuthorName);

  if (error) {
    console.error("Error fetching blogs by author:", error);
    throw new Error("Error in getBlogsByName");
  }

  return blogs;
}

export async function addPost() {}

export async function getAllBlogs() {
  const { data: blogs, error } = await supabase
    .from("posts")
    .select("*")
    .order("created_at", { ascending: false });
  if (error) {
    throw new Error("Cant get all blogs");
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
