"use client";
import { deleteBlog } from "@/lib/action";
import { Trash } from "lucide-react";

export default function DeleteBlog({ blogId }: { blogId: number }) {
  return (
    <button
      onClick={() => deleteBlog(blogId)}
      className="text-gray-500 hover:text-gray-700 focus:outline-none"
    >
      <Trash className="h-4 w-4" />
    </button>
  );
}
