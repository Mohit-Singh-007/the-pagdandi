export default function SkeletonLoader() {
  return (
    <div className="relative w-full h-[350px]">
      <div className="skeleton w-full h-full"></div>

      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-white via-transparent to-transparent"></div>
    </div>
  );
}
