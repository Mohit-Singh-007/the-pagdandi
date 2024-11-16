import RecommendedBlogs from "@/components/pages/Home/RecommendedBlogs";
import Slider from "@/components/pages/Home/Slider";
//import LatestBlogs from "@/components/pages/Home/LatestBlogs";
import Image from "next/image";

export default async function Page() {
  return (
    <div className="min-h-screen flex flex-col items-center">
      <section className="py-6 w-full text-center">
        <h1 className="text-2xl font-bold md:text-4xl whitespace-nowrap">
          &mdash;Welcome to <span className="text-[#FDCF09] ">Pagdandi</span>
          &mdash;
        </h1>
        <p className="mt-3 text-sm text-gray-700 w-3/4 mx-auto md:text-lg">
          Discover stories, experiences, and insights one step at a time.
        </p>
      </section>

      <Slider />

      {/* Main content section with 2 columns */}
      <section className="w-full max-w-6xl px-4 py-6 flex flex-col md:flex-row gap-8">
        <div className="md:w-1/2 w-1/2">
          <h2 className="text-xl font-semibold mb-4">Latest Blogs</h2>
          {/* <LatestBlogs /> */}
        </div>

        <div className="md:w-1/2 w-1/2 p-4">
          <h2 className="text-xl font-semibold mb-4 whitespace-nowrap  ">
            &mdash; <span className="text-[#FDCF09] ">Recommended</span> &mdash;
          </h2>
          <RecommendedBlogs />
        </div>
      </section>
    </div>
  );
}
