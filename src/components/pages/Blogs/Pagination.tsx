import { ArrowLeft, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function Pagination({
  count,
  currentPage,
  itemsPerPage,
  prevPageUrl,
  nextPageUrl,
}: {
  count: number;
  currentPage: number;
  itemsPerPage: number;
  prevPageUrl: string | null;
  nextPageUrl: string | null;
}) {
  const pageCount = Math.ceil(count / itemsPerPage);
  const startRange = (currentPage - 1) * itemsPerPage + 1;
  const endRange = Math.min(currentPage * itemsPerPage, count);

  return (
    <div className="flex items-center justify-between mt-6 w-full">
      <div className="text-gray-700">
        <span className="font-semibold">{startRange}</span> -{" "}
        <span className="font-semibold">{endRange}</span> of {count} blogs
      </div>

      <div className="flex gap-4">
        <Link
          href={prevPageUrl || "#"}
          className={`flex items-center gap-2 px-3 py-1.5 rounded transition ${
            currentPage <= 1
              ? "bg-gray-300 text-gray-400 cursor-not-allowed"
              : "bg-gray-200 text-gray-600 hover:bg-gray-300"
          }`}
          aria-disabled={currentPage <= 1}
        >
          <ArrowLeft className="h-4 w-4" />
          <span>Prev</span>
        </Link>
        <Link
          href={nextPageUrl || "#"}
          className={`flex items-center gap-2 px-3 py-1.5 rounded transition ${
            currentPage >= pageCount
              ? "bg-gray-300 text-gray-400 cursor-not-allowed"
              : "bg-gray-200 text-gray-600 hover:bg-gray-300"
          }`}
          aria-disabled={currentPage >= pageCount}
        >
          <span>Next</span>
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </div>
  );
}
