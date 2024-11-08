"use client";

import { useState } from "react";
import { MoreVertical, Edit, Trash, X } from "lucide-react";
import { Blogs } from "@/types/db";

interface BlogRowProps {
  post: Blogs;
  onEdit: () => void;
  onDelete: (postId: number) => void;
}

const BlogRow = ({ post, onEdit, onDelete }: BlogRowProps) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <tr className="hover:bg-gray-50 border-b text-sm">
      <td className="py-2 px-3 border-r">{post.title}</td>
      <td className="py-2 px-3 border-r">{post.author_id}</td>
      <td className="py-2 px-3 border-r">
        {new Date(post.created_at).toDateString()}
      </td>
      <td className="py-2 px-3 relative w-[100px] text-center">
        <button
          onClick={() => setDropdownOpen(!dropdownOpen)}
          className="focus:outline-none"
        >
          <MoreVertical className="h-4 w-4" />
        </button>
        {/* Dropdown menu */}
        {dropdownOpen && (
          <div className="absolute right-0 top-8 w-28 bg-white border border-gray-200 rounded shadow-lg z-10">
            <div className="flex justify-between items-center px-2 py-1 border-b">
              <span className="text-xs font-semibold">Actions</span>
              <button
                onClick={() => setDropdownOpen(false)}
                className="text-gray-500 hover:text-gray-700 focus:outline-none"
              >
                <X className="h-3 w-3" />
              </button>
            </div>

            <button
              onClick={() => {
                onEdit();
                setDropdownOpen(false);
              }}
              className="flex items-center px-3 py-1 text-xs text-gray-700 hover:bg-gray-100 w-full border-b"
            >
              <Edit className="mr-1 h-3 w-3" /> Edit
            </button>

            <button
              onClick={() => {
                onDelete(post.author_id);
                setDropdownOpen(false);
              }}
              className="flex items-center px-3 py-1 text-xs text-gray-700 hover:bg-gray-100 w-full"
            >
              <Trash className="mr-1 h-3 w-3" /> Delete
            </button>
          </div>
        )}
      </td>
    </tr>
  );
};

export default BlogRow;
