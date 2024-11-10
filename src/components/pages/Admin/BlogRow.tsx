"use client";

import { Edit } from "lucide-react";
import { Blogs } from "@/types/db";
import Link from "next/link";
import DeleteBlog from "./features/DeleteBlog";

interface BlogRowProps {
  post: Blogs;
}

const BlogRow = ({ post }: BlogRowProps) => {
  return (
    <tr className="hover:bg-gray-50 border-b text-sm">
      <td className="py-2 px-3 border-r">{post.title}</td>
      <td className="py-2 px-3 border-r">{post.author_id}</td>
      <td className="py-2 px-3 border-r">
        {new Date(post.created_at).toDateString()}
      </td>
      <td className="py-2 px-3 text-center w-[100px]">
        <div className="flex items-center justify-end space-x-2">
          <Link
            href={`/admin/all-blogs/edit/${post.id}`}
            className="text-gray-500 hover:text-gray-700 focus:outline-none"
          >
            <Edit className="h-4 w-4" />
          </Link>
          <DeleteBlog blogId={post.id} />
        </div>
      </td>
    </tr>
  );
};

export default BlogRow;
