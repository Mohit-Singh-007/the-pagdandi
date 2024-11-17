import { recommendBlogs } from "@/db/recommededBlogs";
import Image from "next/image";

interface PageParams {
  slug: string;
}

export default function Page({ params }: { params: PageParams }) {
  const slug = decodeURIComponent(params.slug);

  const blog = recommendBlogs.find(
    (blog) => blog.slug.toLowerCase() === slug.toLowerCase()
  );

  if (!blog) {
    return (
      <div className="text-center text-xl font-semibold text-red-500">
        Blog not found!
      </div>
    );
  }

  const descriptionParagraphs = blog.description
    .split("\n")
    .map((paragraph, index) => (
      <p key={index} className="text-sm text-gray-700 leading-loose">
        {paragraph.trim()}
      </p>
    ));

  return (
    <div className="max-w-3xl mx-auto p-8 space-y-8">
      <div className="relative w-full h-80">
        <Image
          src={blog.image}
          alt={blog.title}
          fill
          className="w-full h-full object-cover rounded-xl shadow-lg"
        />
      </div>

      <div>
        <h1 className="text-4xl font-extrabold text-gray-900 mb-6">
          {blog.title}
        </h1>
        <div className="space-y-4">{descriptionParagraphs}</div>
        <div className="mt-6 text-sm text-gray-500">
          <p>Author: {blog.author_name}</p>
        </div>
      </div>
    </div>
  );
}
