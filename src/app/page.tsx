import dynamic from "next/dynamic";
const Slider = dynamic(() => import("@/components/pages/Home/Slider"), {
  ssr: false,
  loading: () => <SliderSkeleton />,
});

const LatestBlogs = dynamic(
  () => import("@/components/pages/Blogs/LatestBlogs"),
  {
    loading: () => <SliderSkeleton />,
  }
);

import RecommendedBlogs from "@/components/pages/Home/RecommendedBlogs";
import SliderSkeleton from "@/components/ui/Spinner/SkeletonLoader";
import Image from "next/image";

export default async function Page() {
  return (
    <div className="min-h-screen flex flex-col items-center">
      <section className="py-6 w-full flex flex-col items-center text-center">
        <div className="flex justify-center items-center flex-col">
          <Image
            src="/pag.png"
            alt="pagdandi"
            height={300}
            width={300}
            className="h-auto w-auto"
            priority
            quality={70}
          />
          <p className="mt-2 text-sm md:text-base w-3/4 mx-auto">
            तुमने देखे होंगे पहाड़ों के खूबसूरत नज़ारे, हमने पहाड़ में, पहाड़
            को, पहाड़ बनते देखा है |
          </p>
        </div>
      </section>

      <div className="w-full mt-4 md:mt-8">
        <Slider />
      </div>

      <section className="w-full max-w-6xl px-4 py-6 grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="w-full">
          <h2 className="text-xl font-semibold">Latest</h2>
          <div className="min-h-[200px]">
            <LatestBlogs />
          </div>
        </div>

        <div className="w-full">
          <h2 className="text-xl font-semibold">Recommended</h2>
          <div className="min-h-[200px]">
            <RecommendedBlogs />
          </div>
        </div>
      </section>
    </div>
  );
}
