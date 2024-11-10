"use client";
import BlogTable from "@/components/pages/Admin/BlogTable";
import { BlogPageSingleProp } from "@/types/db";

const BlogPage = ({ posts }: BlogPageSingleProp) => {
  return (
    <div className="min-h-screen w-full flex justify-center bg-gray-100">
      <div className="w-full max-w-7xl px-4 py-6">
        <h1 className="text-2xl font-semibold mb-4">Blog Posts</h1>
        <BlogTable posts={posts} />
      </div>
    </div>
  );
};

export default BlogPage;
