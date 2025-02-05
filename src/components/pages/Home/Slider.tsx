"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { Pagination, Autoplay } from "swiper/modules";
import Image from "next/image";
import { slides } from "@/db/slides";

export default function Slider() {
  return (
    <Swiper
      slidesPerView={1}
      spaceBetween={10}
      loop
      pagination={{
        clickable: true,
        renderBullet: (index, className) =>
          `<span class="${className} bg-black"></span>`,
      }}
      autoplay={{
        delay: 5000,
        disableOnInteraction: false,
      }}
      modules={[Pagination, Autoplay]}
      className="w-screen h-screen"
    >
      {slides.map((slide, index) => (
        <SwiperSlide key={index}>
          <div className="relative w-screen h-screen">
            <Image
              src={slide.src}
              alt={slide.alt}
              layout="intrinsic"
              width={1920}
              height={1080}
              className={`object-cover w-full h-full ${slide.brightness}`}
              priority={index === 0}
            />
          </div>
          <div className="absolute top-0 left-0 w-full h-1/5 bg-gradient-to-b from-white via-transparent to-transparent"></div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
