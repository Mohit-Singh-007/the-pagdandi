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

export async function getAllBlogs() {
  // Fetch all blog posts
  const { data: blogs, error: blogsError } = await supabase
    .from("posts")
    .select("id, title, slug, description, author_id, created_at")
    .order("created_at", { ascending: false });

  if (blogsError) {
    return { error: "Not found" };
  }

  // Collect all unique author_ids from the blogs
  const authorIds = Array.from(new Set(blogs.map((blog) => blog.author_id)));

  // Fetch all authors at once (only 3 in your case)
  const { data: authors, error: authorsError } = await supabase
    .from("users")
    .select("id, name")
    .in("id", authorIds);

  if (authorsError) {
    return { error: "Error fetching authors" };
  }

  // Create a map of authors for quick lookup
  const authorsMap = new Map(authors.map((author) => [author.id, author.name]));

  // Attach the author names to each blog
  const blogsWithAuthors = blogs.map((blog) => {
    const authorName = authorsMap.get(blog.author_id) || "Unknown Author";
    return { ...blog, author: authorName };
  });

  revalidatePath("/blogs");
  return blogsWithAuthors;
}

export async function getUserById(userId: number) {
  const { data, error } = await supabase
    .from("posts")
    .select("*")
    .eq("author_id", userId);

  if (error) throw new Error("User can't be fetched");

  return data;
}
