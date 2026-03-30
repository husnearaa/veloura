"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

import Swiper from "swiper";
import { Navigation, Autoplay, EffectFade } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-fade";

import Banner1 from "@/assets/images/b1.png";
import Banner2 from "@/assets/images/b2.jpg";

const HeroSection = () => {
  const swiperRef = useRef<HTMLDivElement>(null);

  const [current, setCurrent] = useState(1);
  const total = 2; // ✅ FIXED TOTAL (no more 00 issue)

  useEffect(() => {
    if (!swiperRef.current) return;

    const swiper = new Swiper(swiperRef.current, {
      modules: [Navigation, Autoplay, EffectFade],

      loop: true,
      speed: 1200,

      effect: "fade",
      fadeEffect: {
        crossFade: true,
      },

      autoplay: {
        delay: 4000,
        disableOnInteraction: false,
      },

      navigation: {
        nextEl: ".hero-next",
        prevEl: ".hero-prev",
      },

      on: {
        init: (swiper) => {
          setCurrent(swiper.realIndex + 1);
        },
        slideChange: (swiper) => {
          setCurrent(swiper.realIndex + 1);
        },
      },
    });

    return () => swiper.destroy(true, true);
  }, []);

  return (
    <section className="relative w-full h-[60vh] md:h-[95vh] overflow-hidden">
      {/* SWIPER */}
      <div ref={swiperRef} className="swiper h-full w-full">
        <div className="swiper-wrapper">
          {/* SLIDE 1 */}
          <div className="swiper-slide relative h-full w-full">
            <Image
              src={Banner2}
              alt="VELOURA"
              fill
              priority
              className="object-cover"
            />

            <div className="absolute z-10 h-full w-full flex flex-col justify-center px-6 md:px-16">
              <h1 className="text-black text-3xl md:text-7xl mb-6">
                Be your own icon
              </h1>

              <Link
                href="/shop"
                className="bg-black hover:bg-gray-800 border border-white/60 text-white backdrop-blur-md px-8 py-3 rounded-full w-fit"
              >
                Explore
              </Link>
            </div>

            <h1 className="absolute bottom-65 left-1/2 -translate-x-1/2 text-white/90 text-[80px] md:text-[200px] tracking-widest pointer-events-none">
              VELOURA
            </h1>
          </div>

          {/* SLIDE 2 */}
          <div className="swiper-slide relative h-full w-full">
            <Image
              src={Banner1}
              alt="VELOURA"
              fill
              priority
              className="object-cover"
            />

            <div className="absolute z-10 h-full w-full flex flex-col justify-center px-6 md:px-16">
              <h1 className="text-white text-3xl md:text-7xl mb-6">
                Be your own icon
              </h1>

              <Link
                href="/shop"
                className="bg-black hover:bg-gray-800 border border-white/100 text-white backdrop-blur-md px-8 py-3 rounded-full w-fit"
              >
                Explore
              </Link>
            </div>

            <h1 className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/90 text-[80px] md:text-[200px] tracking-widest pointer-events-none">
              VELOURA
            </h1>
          </div>
        </div>
      </div>

      {/* CONTROLS */}
      <div className="absolute bottom-6 md:bottom-28 left-6 md:left-45 right-6 md:right-45 z-20 flex justify-between items-center">
        {/* COUNTER */}
        <div className="text-white lg:text-2xl text-xl hidden sm:block">
          {String(current).padStart(2, "0")} / {String(total).padStart(2, "0")}
        </div>

        {/* ARROWS */}
        <div className="flex gap-8 items-center">
          {/* LEFT ARROW */}
          <button className="hero-prev cursor-pointer p-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="21"
              viewBox="0 0 40 21"
              fill="none"
              className="w-8 h-5 md:w-14 md:h-6"
            >
              <path
                d="M0 10.16L4 14.16V11.16H40V9.16H4V6.16L0 10.16Z"
                fill="white"
              />
            </svg>
          </button>

          {/* RIGHT ARROW */}
          <button className="hero-next cursor-pointer p-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="21"
              viewBox="0 0 40 21"
              fill="none"
              className="w-8 h-5 md:w-14 md:h-6"
            >
              <path
                d="M40 10.16L36 6.16V9.16H0V11.16H36V14.16L40 10.16Z"
                fill="white"
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
