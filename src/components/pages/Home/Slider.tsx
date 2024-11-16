"use client";
import { Pagination, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

import "swiper/css/autoplay";

export default function Slider() {
  return (
    <div className="relative max-w-full mx-auto mt-8 px-4 overflow-hidden">
      <Swiper
        slidesPerView={1} // Always show 1 slide
        spaceBetween={10} // Smaller space between slides
        loop={true}
        pagination={{
          clickable: true,
          renderBullet: (index, className) => {
            return `<span class="${className} bg-black"></span>`; // Black dots
          },
        }}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        navigation={{
          enabled: true,
        }}
        modules={[Pagination, Autoplay]}
        className="mySwiper"
        style={{
          height: "300px", // Adjusted height
        }}
      >
        <SwiperSlide>
          <div className="flex justify-center items-center h-full bg-gray-200 p-2 rounded-lg shadow-sm">
            <h2 className="text-sm font-bold text-center">Slide 1</h2>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex justify-center items-center h-full bg-gray-200 p-2 rounded-lg shadow-sm">
            <h2 className="text-sm font-bold text-center">Slide 2</h2>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex justify-center items-center h-full bg-gray-200 p-2 rounded-lg shadow-sm">
            <h2 className="text-sm font-bold text-center">Slide 3</h2>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex justify-center items-center h-full bg-gray-200 p-2 rounded-lg shadow-sm">
            <h2 className="text-sm font-bold text-center">Slide 4</h2>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex justify-center items-center h-full bg-gray-200 p-2 rounded-lg shadow-sm">
            <h2 className="text-sm font-bold text-center">Slide 5</h2>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex justify-center items-center h-full bg-gray-200 p-2 rounded-lg shadow-sm">
            <h2 className="text-sm font-bold text-center">Slide 6</h2>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex justify-center items-center h-full bg-gray-200 p-2 rounded-lg shadow-sm">
            <h2 className="text-sm font-bold text-center">Slide 7</h2>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex justify-center items-center h-full bg-gray-200 p-2 rounded-lg shadow-sm">
            <h2 className="text-sm font-bold text-center">Slide 8</h2>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex justify-center items-center h-full bg-gray-200 p-2 rounded-lg shadow-sm">
            <h2 className="text-sm font-bold text-center">Slide 9</h2>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
