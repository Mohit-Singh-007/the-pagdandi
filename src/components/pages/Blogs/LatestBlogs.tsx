import { getAllBlogs } from "@/db/data-service";
import { Blogs } from "@/types/db";
import BlogCard from "@/components/pages/Blogs/BlogCard";

async function fetchLatestBlogs() {
  try {
    const latestBlogs = await getAllBlogs();
    return latestBlogs.slice(0, 2);
  } catch (error) {
    return [];
  }
}

export default async function LatestBlogs() {
  const latestBlogs: Blogs[] = await fetchLatestBlogs();

  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2  gap-8 ">
        {latestBlogs.map((blog) => (
          <BlogCard key={blog.id} blogsData={[blog]} />
        ))}
      </div>
    </div>
  );
}
