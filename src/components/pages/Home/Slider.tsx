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
      style={{ minHeight: "400px", marginTop: "10px" }}
    >
      {slides.map((slide, index) => (
        <SwiperSlide key={index}>
          <div className="relative w-full md:h-[400px] h-[350px]">
            <Image
              src={slide.src}
              alt={slide.alt}
              fill
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
