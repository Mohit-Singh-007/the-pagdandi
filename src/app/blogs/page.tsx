import BlogCard from "@/components/pages/Blogs/BlogCard";
import { getAllBlogs } from "@/db/data-service";
import { Blogs } from "@/types/db";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blogs",
};

export const revalidate = 300;

export default async function Page() {
  let blogsData: Blogs[] = [];
  try {
    blogsData = await getAllBlogs();
  } catch (error) {
    console.error("Error fetching blogs:", error);
  }

  if (blogsData.length === 0) {
    return (
      <p className="text-center text-gray-500 mt-10">No blogs available.....</p>
    );
  }

  return (
    <div className="max-w-4xl mx-auto p-4 md:p-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <BlogCard blogsData={blogsData} />
      </div>
    </div>
  );
}
