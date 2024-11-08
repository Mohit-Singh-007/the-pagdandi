import BlogPostForm from "@/components/pages/Admin/BlogPostForm";
import { auth } from "@/lib/auth";
import { redirect } from "next/navigation";

export default async function Page() {
  const session = await auth();

  if (!session || session?.user.role !== "admin") {
    redirect("/login");
  }

  return (
    <div className="p-6">
      <h1 className="text-2xl font-semibold mb-4">Create a New Blog Post</h1>
      <BlogPostForm />
    </div>
  );
}
