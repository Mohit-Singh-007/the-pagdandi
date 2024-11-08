import BlogsPage from "@/components/pages/Admin/BlogsPage";
import { deletePost, getAllBlogs } from "@/db/data-service";
import { Blogs } from "@/types/db";
import { toast } from "react-toastify";

type BlogResponse = Blogs[] | { error: string };

export default async function page() {
  const blogs: BlogResponse = await getAllBlogs();

  async function onEdit() {}

  async function onDelete(postId: number) {
    try {
      await deletePost(postId);
      toast.success("Post deleted successfully");
    } catch (error: any) {
      toast.error(error.message);
    }
  }

  if ("error" in blogs) {
    console.error(blogs.error);
    return;
  }

  return (
    <div>
      <BlogsPage posts={blogs} />
    </div>
  );
}
