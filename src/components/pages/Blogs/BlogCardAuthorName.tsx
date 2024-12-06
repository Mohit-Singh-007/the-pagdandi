import { Blogs } from "@/types/db";
import Image from "next/image";
import Link from "next/link";

interface BlogCardProps {
  blog: Blogs;
}

const BlogCardAuthorName = ({ blog }: BlogCardProps) => {
  return (
    <div className="max-w-sm rounded-xl overflow-hidden shadow-xl bg-white hover:shadow-2xl transition-shadow duration-300 transform hover:scale-105 relative group p-2">
      <div className="relative h-48 overflow-hidden">
        <Image
          className="w-full h-full object-cover rounded-t-xl group-hover:scale-110 transition-transform duration-300"
          src={blog.image as string}
          alt={blog.title || "Blog Image"}
          height={192}
          width={384}
        />
      </div>

      <div className="p-6">
        <h2 className="text-2xl font-semibold text-gray-800 hover:text-yellow-500 transition-colors duration-300">
          {blog.title || "Untitled"}
        </h2>

        <p className="text-sm text-gray-500 mt-2">
          {blog.category || "General"}
        </p>

        <p className="text-xs text-gray-600 mt-1">By {blog.author_name}</p>

        <Link
          href={`/blogs/${blog.id}`} // Link to the full blog
          className="text-blue-500 mt-4 inline-block text-sm font-medium hover:text-blue-700 transition-colors duration-300"
        >
          Read more
        </Link>
      </div>

      <div className="absolute top-0 left-0 right-0 bottom-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 group-hover:opacity-40 transition-opacity duration-300 pointer-events-none"></div>
    </div>
  );
};

export default BlogCardAuthorName;
