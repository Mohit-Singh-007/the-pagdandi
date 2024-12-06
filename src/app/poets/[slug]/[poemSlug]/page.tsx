import { poems } from "../page";

interface PageParams {
  slug: string;
  poemSlug: string;
}
export default function PoemPage({ params }: { params: PageParams }) {
  const poetSlug = decodeURIComponent(params.slug);
  const poemSlug = decodeURIComponent(params.poemSlug);

  const poem = poems.find((p) => p.title === poemSlug && p.poet === poetSlug);

  return (
    <div className="max-w-3xl mx-auto p-8 space-y-8">
      <h1 className="text-4xl font-extrabold text-gray-900 text-center mb-8">
        {poetSlug} - {poem?.title}
      </h1>
      <div className="text-gray-700 whitespace-pre-line text-center">
        {poem?.description || "Poem not found."}
      </div>
    </div>
  );
}
