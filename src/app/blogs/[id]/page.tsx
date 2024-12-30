import { getAllBlogsId, getBlogsById } from "@/lib/action";
import DOMPurify from "isomorphic-dompurify";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

interface BlogPageProps {
  params: {
    id: string;
  };
}

export const revalidate = 300;

export async function generateStaticParams() {
  const blogs = await getAllBlogsId();
  return blogs.map((blog: any) => ({
    id: blog.id.toString(),
  }));
}

export async function generateMetadata({
  params,
}: BlogPageProps): Promise<Metadata> {
  const blogId = parseInt(params.id, 10); // Convert string ID back to number
  const blog = await getBlogsById(blogId);

  if (!blog) {
    return { title: "Blog Not Found" };
  }

  return {
    title: blog.title,
    description: blog.description || "Read more about this blog",
  };
}

export default async function BlogPage({ params }: BlogPageProps) {
  const blogId = parseInt(params.id, 10);
  const blog = await getBlogsById(blogId);

  if (!blog) {
    return;
  }

  const sanitizedDescription = DOMPurify.sanitize(blog.description);

  return (
    <div className="max-w-3xl mx-auto p-8 space-y-8">
      <div className="relative w-full h-80">
        <Image
          src={blog.image}
          alt={blog.title}
          fill
          className="w-full h-full object-contain md:object-cover rounded-xl shadow-2xl"
        />
      </div>

      <div>
        <h1 className="text-4xl font-extrabold text-gray-900 mb-6">
          {blog.title}
        </h1>

        <div
          className="space-y-4 text-sm text-gray-700 leading-loose"
          dangerouslySetInnerHTML={{ __html: sanitizedDescription }}
        />

        <Link
          href={`/user/${encodeURIComponent(blog.author_name)}`}
          className="mt-6 text-sm text-gray-700"
        >
          <p className="font-semibold">
            Author: <span className="font-semibold">{blog.author_name}</span>
          </p>
        </Link>
      </div>
    </div>
  );
}
