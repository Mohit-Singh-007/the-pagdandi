import { poems } from "@/db/poems";
import Link from "next/link";

interface PageParams {
  slug: string;
}
export default function Page({ params }: { params: PageParams }) {
  const slug = decodeURIComponent(params.slug);

  const filteredPoems = poems.filter((poem) => poem.poet === slug);

  return (
    <div className="max-w-6xl mx-auto p-8 space-y-8">
      <h1 className="text-4xl font-extrabold text-gray-900 text-center mb-8">
        कवि {slug}
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredPoems.map((poem) => (
          <Link
            key={poem.title}
            href={`/poets/${encodeURIComponent(slug)}/${encodeURIComponent(
              poem.title
            )}`}
            className="block p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow"
          >
            <h2 className="text-2xl font-bold text-gray-800 mb-2">
              {poem.title}
            </h2>
            <p className="text-gray-600 whitespace-pre-line">{poem.content}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
