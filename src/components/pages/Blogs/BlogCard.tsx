import { getAllBlogs } from "@/db/data-service";
import { Blogs } from "@/types/db";
import Image from "next/image";
import Link from "next/link";

export const revalidate = 0;

export default async function BlogCard() {
  const blogsData: Blogs[] | { error: string } = await getAllBlogs();

  if ("error" in blogsData) {
    return null;
  }

  const sortedBlogs = [...blogsData].reverse();

  return (
    <div className="flex flex-wrap justify-center gap-8 p-4 bg-white">
      {sortedBlogs.map((blog) => {
        const formattedDate = new Date(blog.created_at).toLocaleDateString();
        return (
          <div
            key={blog.id}
            className="max-w-sm w-64 rounded-lg overflow-hidden shadow-lg bg-white border border-gray-200 hover:shadow-xl transition-shadow duration-300 transform hover:scale-105"
          >
            <Image
              src={
                "https://images.unsplash.com/photo-1583364486567-ce2e045676e9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d2Vic2l0ZSUyMGJhY2tncm91bmR8ZW58MHx8MHx8fDA%3D"
              }
              alt={`Image for ${blog.title}`}
              width={256}
              height={144}
              quality={80}
              className="w-full h-32 object-cover"
            />
            <div className="p-4">
              <Link
                href={`/blogs/${blog.id}`}
                className="text-lg font-semibold text-black hover:text-yellow-500 hover:underline truncate"
              >
                {blog.title}
              </Link>
              <Link
                href={`/user/${blog.author_id}`}
                className="text-xs mt-1 block text-gray-500"
              >
                By {blog.author_id} • {formattedDate}
              </Link>
              <div className="mt-2 flex justify-between items-center text-xs text-yellow-600">
                <span className="px-2 py-1 bg-yellow-100 rounded-full">
                  {blog.slug}
                </span>
              </div>
              <p className="text-sm text-gray-700 mt-2">
                {blog.description.length > 100
                  ? `${blog.description.substring(0, 100)}...`
                  : blog.description}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
