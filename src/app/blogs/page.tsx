import Pagination from "@/components/pages/Blogs/Pagination";
import BlogCard from "@/components/pages/Blogs/BlogCard";
import { getAllBlogsPagination } from "@/db/data-service";
import { Metadata } from "next";

export const revalidate = 300;

export const metadata: Metadata = {
  title: "Blogs",
};

export default async function Page({
  searchParams,
}: {
  searchParams: { page?: string };
}) {
  const currentPage = Number(searchParams.page) || 1;
  const itemsPerPage = 6;

  const { blogs: blogsData, count } = await getAllBlogsPagination(
    currentPage,
    itemsPerPage
  );

  if (count === null || blogsData.length === 0) {
    return (
      <p className="text-center text-gray-500 mt-10">No blogs available</p>
    );
  }

  const pageCount = Math.ceil(count / itemsPerPage);

  const prevPageUrl = currentPage > 1 ? `?page=${currentPage - 1}` : null;
  const nextPageUrl =
    currentPage < pageCount ? `?page=${currentPage + 1}` : null;

  return (
    <div className="max-w-4xl mx-auto p-4 md:p-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <BlogCard blogsData={blogsData} />
      </div>

      <div className="mt-6">
        <Pagination
          count={count}
          currentPage={currentPage}
          itemsPerPage={itemsPerPage}
          prevPageUrl={prevPageUrl}
          nextPageUrl={nextPageUrl}
        />
      </div>
    </div>
  );
}
