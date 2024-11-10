import { Blogs } from "@/types/db";

interface BlogCardProps {
  blog: Blogs;
}

const BlogCard = ({ blog }: BlogCardProps) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white hover:bg-gray-100 transition-colors duration-300">
      <img
        className="w-full h-48 object-cover"
        src={"/default-blog-image.jpg"} // Assuming an image URL exists
        alt={blog.title}
      />
      <div className="p-4">
        <h2 className="text-2xl font-semibold text-gray-800">{blog.title}</h2>
        <p className="text-gray-600 mt-2">{blog.slug}</p>{" "}
        {/* Assuming there's an excerpt */}
        <a
          href={`/blogs/${blog.id}`}
          className="text-blue-500 mt-4 inline-block text-sm font-medium"
        >
          Read more
        </a>
      </div>
    </div>
  );
};

export default BlogCard;
