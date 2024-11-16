import { Blogs } from "@/types/db";
import Image from "next/image";
import Link from "next/link";

export default async function BlogCard({ blogsData }: { blogsData: Blogs[] }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 p-4 bg-white">
      {blogsData.map((blog) => {
        return (
          <div
            key={blog.id}
            className="max-w-sm w-64 rounded-lg overflow-hidden shadow-lg bg-white border border-gray-200 hover:shadow-2xl hover:scale-105 transition-all duration-300 transform relative group"
          >
            {/* Blog Image */}
            <div className="relative h-40 overflow-hidden">
              <Image
                src={blog.image ? blog.image : "/default-image.jpg"}
                alt={`Image for ${blog.title}`}
                quality={80}
                fill
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
              />

              {/* Hover Effect: Darken the image */}
              <div className="absolute top-0 left-0 right-0 bottom-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 group-hover:opacity-40 transition-opacity duration-300 pointer-events-none"></div>
            </div>

            {/* Blog Content */}
            <div className="p-4">
              {/* Blog Title */}
              <Link
                href={`/blogs/${blog.id}`}
                className="text-lg font-semibold text-black hover:text-yellow-500 hover:underline truncate"
              >
                {blog.title}
              </Link>

              {/* Author & Date */}
              <Link
                href={`/user/${encodeURIComponent(blog.author_name)}`}
                className="text-xs mt-1 block text-gray-500"
              >
                By {blog.author_name} •{" "}
                {new Date(blog.created_at).toLocaleDateString()}
              </Link>

              {/* Blog Category */}
              <div className="mt-2 flex justify-between items-center text-xs text-yellow-600">
                <span className="px-2 py-1 bg-yellow-100 rounded-full">
                  {blog.category}
                </span>
              </div>

              {/* Blog Description */}
              <p className="text-sm text-gray-700 mt-2">
                {blog.description?.length > 100
                  ? `${blog.description.substring(0, 100)}...`
                  : blog.description || "No description available"}
              </p>
            </div>

            <div className="absolute top-0 left-0 right-0 bottom-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 group-hover:opacity-40 transition-opacity duration-300 pointer-events-none"></div>
          </div>
        );
      })}
    </div>
  );
}
