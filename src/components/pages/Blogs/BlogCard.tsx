import { Blogs } from "@/types/db";
import Image from "next/image";
import Link from "next/link";

export default function BlogCard({ blogsData }: { blogsData: Blogs[] }) {
  return (
    <>
      {blogsData.map((blog) => (
        <Link
          href={`/blogs/${blog.id}`}
          key={blog.id}
          className="block w-full z-10 border border-gray-200 p-2 shadow-md cursor-pointer hover:shadow-lg transition duration-200 hover:border-gray-300 relative group rounded-md"
        >
          {/* Blog Image */}
          <div className="relative h-48 md:h-40 overflow-hidden rounded-lg">
            <Image
              src={blog.image ? blog.image : "/default-image.jpg"}
              alt={`Image for ${blog.title}`}
              quality={80}
              fill
              sizes="(max-width: 640px) 100vw, 
               (max-width: 768px) 50vw, 
               (max-width: 1024px) 33vw, 
               25vw"
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
            />
            {/* Hover Effect: Darken the image */}
            <div className="absolute top-0 left-0 right-0 bottom-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 group-hover:opacity-40 transition-opacity duration-300 pointer-events-none rounded-lg"></div>
          </div>

          {/* Blog Content */}
          <Link href={`/blogs/${blog.id}`} className="py-2">
            {/* Blog Title */}
            <h2 className="text-sm font-semibold text-gray-800 group-hover:text-yellow-500 transition-colors duration-300">
              {blog.title || "Untitled Blog"}
            </h2>
          </Link>

          {/* Blog Slug */}
          <div className="text-xs mt-1 text-gray-500">
            <span className="bg-yellow-100 text-yellow-600 px-2 py-1 rounded-full">
              {blog.category || "Pagdandi"}
            </span>
          </div>

          {/* Author Info */}
          <div className="text-xs mt-1 block text-gray-500">
            By {blog.author_name} •{" "}
            {new Date(blog.created_at).toLocaleDateString()}
          </div>

          {/* Blog Description */}
          <p className="text-sm text-gray-700 mt-2">
            {blog.description
              ? blog.description.length > 80
                ? `${blog.description.substring(0, 80)}...`
                : blog.description
              : "No description available"}
          </p>
        </Link>
      ))}
    </>
  );
}
