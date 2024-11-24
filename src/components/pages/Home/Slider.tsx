"use client";
import { Pagination, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import Image from "next/image";

const slides = [
  { src: "/first.jpg", alt: "lush mountains", brightness: "brightness-75" },
  { src: "/second.jpg", alt: "lush mountains", brightness: "brightness-50" },
  { src: "/third.jpg", alt: "lush mountains", brightness: "brightness-50" },
  { src: "/fourth.jpg", alt: "lush mountains", brightness: "brightness-75" },
  { src: "/fifth.jpg", alt: "lush mountains", brightness: "brightness-50" },
  { src: "/sixth.jpg", alt: "lush mountains", brightness: "brightness-75" },
];

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
      style={{ minHeight: "350px", marginTop: "10px" }}
    >
      {slides.map((slide, index) => (
        <SwiperSlide key={index}>
          <div className="relative w-full h-[350px]">
            <Image
              src={slide.src}
              alt={slide.alt}
              fill
              className={`object-cover w-full h-full ${slide.brightness}`}
              priority
            />
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-white via-transparent to-transparent"></div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
