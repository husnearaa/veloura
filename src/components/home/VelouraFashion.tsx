"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperType } from "swiper";

import "swiper/css";

const videos = [
  "/reels/veloura_reel_1.mp4",
  "/reels/veloura_reel_2.mp4",
  "/reels/veloura_reel_3.mp4",
  "/reels/veloura_reel_4.mp4",
  "/reels/veloura_reel_5.mp4",
  "/reels/vlada_reel_6.mp4",
  "/reels/vlada_reel_7.mp4",
  "/reels/vlada_reel_8.mp4",
  "/reels/vlada_reel_9.mp4",
  "/reels/vlada_reel_1.mp4",
];

const VelouraFashion = () => {
  const swiperRef = useRef<SwiperType | null>(null);

  return (
    <div>
      <div>
        <h1 className="text-center text-[42px] font-semibold my-5">
          Where fashion meets class
        </h1>

        <p className="text-center mt-3 font-inter text-base leading-4 text-[#737373] capitalize mb-8">
          Discover the elegance of our designer collection
        </p>

        <div className="relative w-full h-screen overflow-hidden">
          <div className="absolute left-0 top-0 w-36 h-full bg-gradient-to-r from-gray-100 via-gray-100/50 to-transparent z-20 pointer-events-none hidden md:block"></div>

          <div className="absolute right-0 top-0 w-36 h-full bg-gradient-to-l from-gray-100 via-gray-100/50 to-transparent z-20 pointer-events-none hidden md:block"></div>

          <div className="flex items-center justify-center h-full px-4">
            <div className="w-full flex items-center">
              <Swiper
                onSwiper={(swiper) => {
                  swiperRef.current = swiper;
                }}
                slidesPerView="auto"
                spaceBetween={30}
                grabCursor={true}
                speed={700}
                className="w-full"
              >
                {videos.map((video, index) => (
                  <SwiperSlide
                    key={index}
                    className="!flex !items-center !justify-center !h-[765px] bg-transparent"
                    style={{ width: "422px" }}
                  >
                    <div
                      className={`relative rounded-xl overflow-hidden transition-all duration-300 !w-[422px] !h-[615px]
                     ${index % 2 === 0 ? "md:-mt-[120px]" : "md:mt-[120px]"}`}
                    >
                      <div className="relative group cursor-pointer w-full h-full">
                        <video
                          src={video}
                          className="w-full h-full object-cover rounded-lg"
                          preload="metadata"
                          muted
                          playsInline
                        ></video>

                        <div className="w-full h-full absolute left-0 right-0 top-0 bottom-0 bg-black/50 group-hover:bg-black/30 transition-all duration-500 flex items-center justify-center rounded-lg">
                          <div className="w-[68px] h-[68px] rounded-full border-2 border-white flex justify-center items-center opacity-100 visible group-hover:scale-110 cursor-pointer transition-all duration-500">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="36"
                              height="36"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="#ffffff"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="lucide lucide-play ml-1"
                              aria-hidden="true"
                            >
                              <polygon points="6 3 20 12 6 21 6 3"></polygon>
                            </svg>
                          </div>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>

              <button
                onClick={() => swiperRef.current?.slidePrev()}
                className="absolute left-8 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/90 hover:bg-white rounded-full shadow-lg flex items-center justify-center transition-all duration-200 hover:scale-110 z-30 text-gray-700 text-xl font-bold"
                aria-label="Previous slide"
              >
                <ChevronLeft />
              </button>

              <button
                onClick={() => swiperRef.current?.slideNext()}
                className="absolute right-8 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/90 hover:bg-white rounded-full shadow-lg flex items-center justify-center transition-all duration-200 hover:scale-110 z-30 text-gray-700 text-xl font-bold"
                aria-label="Next slide"
              >
                <ChevronRight />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VelouraFashion;
