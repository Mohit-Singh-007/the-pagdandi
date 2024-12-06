import Image from "next/image";
import Link from "next/link";

interface RecommendedBlogType {
  id: number;
  title: string;
  slug: string;
  description: string;
  author_name: string;
  image: string;
}

interface RecommendedCardProps {
  blog: RecommendedBlogType;
}

export default function RecommendedCard({ blog }: RecommendedCardProps) {
  return (
    <Link
      href={`/recommended/${encodeURIComponent(blog.slug)}`}
      className="block w-[20vw] z-10 border border-gray-200 p-2 shadow-md cursor-pointer hover:shadow-lg transition duration-200 hover:border-gray-300 relative group rounded-md"
    >
      {/* Blog Image */}
      <div className="relative h-48 md:h-40 overflow-hidden rounded-lg">
        <Image
          src={blog.image || "/default-image.jpg"}
          alt={`Image for ${blog.title}`}
          quality={80}
          fill
          sizes="(max-width: 640px) 100vw, 
                 (max-width: 768px) 50vw, 
                 (max-width: 1024px) 33vw, 
                 25vw"
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
        />
        {/* Hover Effect: Darken the image */}
      </div>

      {/* Blog Content */}
      <div className="p-2">
        {/* Blog Title */}
        <h2 className="text-sm font-semibold text-gray-800 group-hover:text-yellow-500 transition-colors duration-300">
          {blog.title || "Untitled Blog"}
        </h2>
        {/* Author Info */}
        <p className="text-xs mt-2 text-gray-500">By {blog.author_name}</p>
        {/* Blog Description */}
        <p className="text-sm text-gray-700 mt-2">
          {blog.description.length > 80
            ? `${blog.description.substring(0, 80)}...`
            : blog.description}
        </p>
      </div>
    </Link>
  );
}
