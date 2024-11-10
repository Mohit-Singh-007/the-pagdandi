import BlogsPage from "@/components/pages/Admin/BlogsPage";
import { getAllBlogs } from "@/db/data-service";
import { Blogs } from "@/types/db";
import { Metadata } from "next";
import { Suspense } from "react";

export const revalidate = 0;

export const metadata: Metadata = {
  title: "All-Blogs",
};

type BlogResponse = Blogs[] | { error: string };

export default async function page() {
  const blogs: BlogResponse = await getAllBlogs();

  if ("error" in blogs) {
    return;
  }

  return (
    <div>
      <Suspense fallback={<p>Loading...</p>}>
        <BlogsPage posts={blogs} />
      </Suspense>
    </div>
  );
}
