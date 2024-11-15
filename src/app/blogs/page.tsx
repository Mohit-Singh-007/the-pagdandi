import BlogCard from "@/components/pages/Blogs/BlogCard";
import { getAllBlogs } from "@/db/data-service";
import { Blogs } from "@/types/db";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blogs",
};

export const revalidate = 0;

export default async function Page() {
  let blogsData: Blogs[] = [];
  try {
    blogsData = await getAllBlogs();
  } catch (error) {
    console.error("Error fetching blogs:", error);
  }

  if (blogsData.length === 0) {
    return <p>No blogs available.</p>;
  }

  return (
    <div>
      <BlogCard blogsData={blogsData} />
    </div>
  );
}
