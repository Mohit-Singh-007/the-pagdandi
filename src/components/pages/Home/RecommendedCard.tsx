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
      className="block w-full z-10 border border-gray-200 p-2 shadow-md cursor-pointer hover:shadow-lg transition duration-200 hover:border-gray-300 relative group rounded-md"
    >
      {/* Blog Image */}
      <div className="relative h-48 md:h-40 overflow-hidden rounded-lg">
        <img
          src={blog.image || "/default-image.jpg"}
          alt={blog.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
        />
        {/* Hover Effect: Darken the image */}
      </div>

      {/* Blog Content */}
      <div className="py-2">
        {/* Blog Title */}
        <h2 className="text-sm font-semibold text-gray-800 group-hover:text-yellow-500 transition-colors duration-300">
          {blog.title || "Untitled Blog"}
        </h2>

        {/* Blog Description */}
        <p className="mt-2 text-xs text-gray-600">
          {blog.description.length > 80
            ? `${blog.description.slice(0, 80)}...`
            : blog.description}
        </p>

        {/* Author Info */}
        <p className="mt-3 text-xs text-gray-500">By {blog.author_name}</p>
        <div className="absolute top-0 left-0 right-0 bottom-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 group-hover:opacity-40 transition-opacity duration-300 pointer-events-none rounded-md"></div>
      </div>
    </Link>
  );
}
