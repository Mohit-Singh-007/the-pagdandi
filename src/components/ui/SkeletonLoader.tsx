const SkeletonLoader = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 p-4">
      {Array(3)
        .fill(0)
        .map((_, index) => (
          <div
            key={index}
            className="max-w-sm rounded-xl overflow-hidden shadow-xl bg-white animate-pulse"
          >
            <div className="relative h-48 bg-gray-300 rounded-t-xl"></div>
            <div className="p-6">
              <div className="h-6 bg-gray-300 rounded mb-2"></div>
              <div className="h-4 bg-gray-300 rounded mb-2"></div>
            </div>
          </div>
        ))}
    </div>
  );
};

export default SkeletonLoader;
