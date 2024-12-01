import { recommendBlogs } from "@/db/recommededBlogs";
import RecommendedCard from "./RecommendedCard";

export default function RecommendedBlogs() {
  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {recommendBlogs.map((blog) => (
          <RecommendedCard blog={blog} key={blog.id} />
        ))}
      </div>
    </div>
  );
}
