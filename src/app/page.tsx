import dynamic from "next/dynamic";
const Slider = dynamic(() => import("@/components/pages/Home/Slider"), {
  ssr: false,
  loading: () => <SliderSkeleton />,
});

import LatestBlogs from "@/components/pages/Blogs/LatestBlogs";
import RecommendedBlogs from "@/components/pages/Home/RecommendedBlogs";
import SliderSkeleton from "@/components/ui/SkeletonLoader";

export default async function Page() {
  return (
    <div className="min-h-screen flex flex-col items-center">
      <section className="py-6 w-full text-center">
        <h1 className="text-2xl font-bold md:text-4xl">
          Welcome to <span className="text-[#FDCF09]">Pagdandi</span>
        </h1>
        <p className="mt-3 text-sm md:text-lg w-3/4 mx-auto">
          Discover stories, experiences, and insights one step at a time.
        </p>
      </section>

      <div className="w-full mt-4 md:mt-8">
        <Slider />
      </div>

      <section className="w-full max-w-6xl px-4 py-6 grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="w-full">
          <h2 className="text-xl font-semibold">Latest</h2>
          <LatestBlogs />
        </div>

        <div className="w-full">
          <h2 className="text-xl font-semibold">Recommended</h2>
          <RecommendedBlogs />
        </div>
      </section>
    </div>
  );
}
