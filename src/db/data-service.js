import { supabase } from "../lib/supabase";

export async function getUsers(email) {
  if (!email) return null;
  const { data, error } = await supabase
    .from("users")
    .select(" id , email , role , name")
    .eq("email", email)
    .single();

  if (error) {
    return null;
  }

  return data;
}

export async function createUser({ email, provider, role, name }) {
  const { data, error } = await supabase
    .from("users")
    .insert([{ email, provider, role: "user", name }]);

  if (error) {
    return { error: error.message };
  }

  return { message: "User created successfully", user: data };
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
