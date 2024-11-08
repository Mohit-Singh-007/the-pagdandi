import BlogCard from "@/components/pages/Blogs/BlogCard";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blogs",
};

export default function Page() {
  return (
    <div>
      <BlogCard />
      <BlogCard />
    </div>
  );
}
