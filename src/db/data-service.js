import { supabase } from "../lib/supabase";

export async function getUsers(email) {
  const { data, error } = await supabase
    .from("users")
    .select("id , email")
    .eq("email", email)
    .single();

  if (error) {
    return null;
  }

  return data;
}





export async function getAllBlogsPagination(currentPage, itemsPerPage) {
  const startIndex = (currentPage - 1) * itemsPerPage;

  const {
    data: blogs,
    error,
    count,
  } = await supabase
    .from("posts")
    .select("*", { count: "exact" })
    .order("created_at", { ascending: false })
    .range(startIndex, startIndex + itemsPerPage - 1);

  if (error) {
    throw new Error("Can't fetch blogs");
  }

  return { blogs, count };
}
