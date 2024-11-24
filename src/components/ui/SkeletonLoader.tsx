export default function SliderSkeleton() {
  return (
    <div className="w-full h-[350px] flex space-x-4 animate-pulse">
      {Array.from({ length: 5 }).map((_, index) => (
        <div key={index} className="w-full h-full bg-gray-300 rounded-lg" />
      ))}
    </div>
  );
}
