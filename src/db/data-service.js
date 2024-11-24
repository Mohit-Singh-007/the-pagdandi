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

export async function getAllAuthors() {
  const { data: authors, error } = await supabase
    .from("posts")
    .select("author_name");

  if (error) {
    throw new Error("Cant get all blogs");
  }

  return authors;
}

export async function getBlogsById(id) {
  const { data: blogs, error } = await supabase
    .from("posts")
    .select("*")
    .eq("id", id)
    .single();

  if (error) {
    console.error("Error fetching blogs by author:", error);
    throw new Error("Error in getBlogsByName");
  }

  return blogs;
}

export async function getAllBlogsId() {
  const { data: blogs, error } = await supabase.from("posts").select("id");

  if (error) {
    console.error("Error fetching blogs by author:", error);
    throw new Error("Error in getBlogsByName");
  }

  return blogs;
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
