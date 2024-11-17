import BlogCardAuthorName from "@/components/pages/Blogs/BlogCardAuthorName";
import { getAllAuthors, getBlogsByName } from "@/db/data-service";

export const revalidate = 300;

export async function generateStaticParams() {
  const authors = await getAllAuthors();

  return authors.map((author) => ({
    slug: author.author_name,
  }));
}

interface PageParams {
  slug: string;
}

export default async function Page({ params }: { params: PageParams }) {
  const authorName = decodeURIComponent(params.slug);

  const blogs = await getBlogsByName(authorName);

  if (!blogs || blogs.length === 0) {
    return <div>No blogs found for {authorName}</div>;
  }

  return (
    <div className="p-6">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-gray-800">
          Blogs by {authorName}
        </h1>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogs?.map((blog) => (
          <BlogCardAuthorName key={blog.id} blog={blog} />
        ))}
      </div>
    </div>
  );
}
