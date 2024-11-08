import BlogsPage from "@/components/pages/Admin/BlogsPage";
import { getAllBlogs } from "@/db/data-service";
import { auth } from "@/lib/auth";
import { Blogs } from "@/types/db";
import { redirect } from "next/navigation";

type BlogResponse = Blogs[] | { error: string };

export default async function page() {
  const session = await auth();

  if (!session || session?.user.role !== "admin") {
    redirect("/login");
  }

  const blogs: BlogResponse = await getAllBlogs();

  if ("error" in blogs) {
    console.error(blogs.error);
    return;
  }

  return (
    <div>
      <BlogsPage posts={blogs} />
    </div>
  );
}
