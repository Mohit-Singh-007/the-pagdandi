import { recommendBlogs } from "@/db/recommededBlogs";
import RecommendedCard from "./RecommendedCard";

export default function RecommendedBlogs() {
  return (
    <div className=" grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 gap-6">
      {recommendBlogs.map((blog) => (
        <div key={blog.id} className="w-[70vw] md:w-full">
          <RecommendedCard blog={blog} />
        </div>
      ))}
    </div>
  );
}
