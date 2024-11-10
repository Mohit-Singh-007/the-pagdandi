import { getUserById } from "@/db/data-service";
import { auth } from "@/lib/auth";
import BlogCard from "./Blogcard";

interface PageParams {
  id: string;
}

export default async function Page({ params }: { params: PageParams }) {
  const userId = Number(params.id);
  const blogs = await getUserById(userId);

  return (
    <div className="p-6">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-gray-800">Blogs by {}</h1>
        <p className="text-xl text-gray-600">{}</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogs.map((blog) => (
          <BlogCard key={blog.id} blog={blog} />
        ))}
      </div>
    </div>
  );
}
