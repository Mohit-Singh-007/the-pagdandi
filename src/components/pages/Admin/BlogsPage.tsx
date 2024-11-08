"use client";
import BlogTable from "@/components/pages/Admin/BlogTable";
import { BlogPageSingleProp } from "@/types/db";
import { toast } from "react-toastify";

const BlogPage = ({ posts }: BlogPageSingleProp) => {
  const onEdit = (postId: number) => {
    console.log("Edit post with ID:", postId);
  };

  const onDelete = async (postId: number) => {
    try {
      console.log("Delete post with ID:", postId);
      toast.success("Post deleted successfully");
    } catch (error: any) {
      toast.error("Failed to delete post: " + error.message);
    }
  };

  return (
    <div className="min-h-screen w-full flex justify-center bg-gray-100">
      <div className="w-full max-w-7xl px-4 py-6">
        <h1 className="text-2xl font-semibold mb-4">Blog Posts</h1>
        <BlogTable posts={posts} onEdit={onEdit} onDelete={onDelete} />
      </div>
    </div>
  );
};

export default BlogPage;
