export default function loading() {
  return (
    <div className="max-w-3xl mx-auto p-8 space-y-8 animate-pulse">
      {/* Image Skeleton */}
      <div className="relative w-full h-80 bg-gray-100 rounded-xl"></div>

      {/* Text Skeleton */}
      <div>
        <div className="h-10 bg-gray-100 rounded w-3/4 mb-6"></div>
        <div className="space-y-4">
          <div className="h-4 bg-gray-100 rounded w-full"></div>
          <div className="h-4 bg-gray-100 rounded w-5/6"></div>
          <div className="h-4 bg-gray-100 rounded w-4/6"></div>
        </div>

        <div className="mt-6 h-4 bg-gray-100 rounded w-1/4"></div>
      </div>
    </div>
  );
}
