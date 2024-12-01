import { getAllBlogs } from "@/db/data-service";
import BlogCard from "@/components/pages/Blogs/BlogCard";

export const revalidate = 60;

export default async function LatestBlogs() {
  const { blogs: latestBlogs } = await getAllBlogs();

  const blogsToDisplay = latestBlogs.slice(0, 2);

  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
        {blogsToDisplay.map((blog) => (
          <BlogCard key={blog.id} blogsData={[blog]} />
        ))}
      </div>
    </div>
  );
}
