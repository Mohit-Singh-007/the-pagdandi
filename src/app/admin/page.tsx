import { auth } from "@/lib/auth";
import Link from "next/link";
import { redirect } from "next/navigation";

export default async function page() {
  const session = await auth();
  if (session?.user.role !== "admin") {
    redirect("/unauthorized");
  }
  return (
    <div>
      <Link href={"/admin/create-blog"}>Create a blog</Link>
      <Link href={"/admin/all-blogs"}>All Blogs</Link>
    </div>
  );
}
