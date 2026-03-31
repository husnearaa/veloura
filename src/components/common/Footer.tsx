"use client";

import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import {
  Instagram,
  Home,
  Smile,
  Shield,
  Star,
  Truck,
  Clock,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { IoLogoFacebook } from "react-icons/io5";
import Link from "next/link";
import "swiper/css";
import "swiper/css/navigation";

const Footer = () => {
  const swiperRef = useRef<SwiperType | null>(null);

  const faqItems = [
    {
      icon: "house",
      question: "How much time is needed for delivery?",
      answer: "7 - 10 days.",
    },
    {
      icon: "smile",
      question: "Do I need to pay any advance amount?",
      answer: "No.",
    },
    {
      icon: "shield",
      question: "Can I place any urgent order?",
      answer: "Yes.",
    },
    {
      icon: "star",
      question: "Can I place any custom size / changes?",
      answer: "Yes.",
    },
    {
      icon: "truck",
      question: "Is there an extra cost for customization?",
      answer: "Depends on your requirement.",
    },
    {
      icon: "clock",
      question: "Can I talk directly with your designers?",
      answer: "Yes.",
    },
  ];

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "house":
        return <Home className="w-8 h-8 text-white" strokeWidth={1.5} />;
      case "smile":
        return <Smile className="w-8 h-8 text-white" strokeWidth={1.5} />;
      case "shield":
        return <Shield className="w-8 h-8 text-white" strokeWidth={1.5} />;
      case "star":
        return <Star className="w-8 h-8 text-white" strokeWidth={1.5} />;
      case "truck":
        return <Truck className="w-8 h-8 text-white" strokeWidth={1.5} />;
      case "clock":
        return <Clock className="w-8 h-8 text-white" strokeWidth={1.5} />;
      default:
        return <Home className="w-8 h-8 text-white" strokeWidth={1.5} />;
    }
  };

  return (
    <footer className="bg-[#222222] text-white">
      {/* Part 1: FAQ Carousel */}
      <div className="py-[110px] px-6 md:px-[60px] relative">
        <div className="flex items-center justify-between mb-12">
          <h1 className="text-xl md:text-4xl font-light font-inter">
            Frequently asked question
          </h1>
          {/* Navigation Buttons next to title */}
          <div className="flex gap-3">
            <button
              className="w-12 h-12 bg-[#1D1D1D] border border-gray-700/50 rounded-full flex items-center justify-center hover:bg-gray-700/50 transition-colors duration-300"
              onClick={() => swiperRef.current?.slidePrev()}
            >
              <ChevronLeft className="w-5 h-5 text-white" strokeWidth={1.5} />
            </button>
            <button
              className="w-12 h-12 bg-[#1D1D1D] border border-gray-700/50 rounded-full flex items-center justify-center hover:bg-gray-700/50 transition-colors duration-300"
              onClick={() => swiperRef.current?.slideNext()}
            >
              <ChevronRight className="w-5 h-5 text-white" strokeWidth={1.5} />
            </button>
          </div>
        </div>

        {/* Swiper */}
        <Swiper
          modules={[Navigation]}
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          spaceBetween={24}
          slidesPerView={1.2}
          breakpoints={{
            640: { slidesPerView: 2 },
            768: { slidesPerView: 3 },
            1024: { slidesPerView: 3 },
            1280: { slidesPerView: 3 },
          }}
          className="py-8"
        >
          {faqItems.map((item, idx) => (
            <SwiperSlide key={idx}>
              <div className="bg-[#1D1D1D] hover:bg-[#33323298] border border-gray-700/50 rounded-lg p-8 h-64 flex flex-col justify-between relative group transition-all duration-300">
                <div className="mb-6">{getIcon(item.icon)}</div>
                <div className="flex-1">
                  <h3 className="text-xl font-medium mb-3 text-white">
                    {item.question}
                  </h3>
                  <p className="text-gray-400 text-sm">{item.answer}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Part 2: Bottom Footer */}
      <div className="w-full bg-[#1D1D1D]">
        <div className="flex flex-col md:flex-row items-start justify-between gap-[90px] p-6 md:p-[60px]">
          {/* Left: Logo */}
          <div>
            <h1 className="text-5xl font-medium uppercase text-white hover:text-white transition-colors">
              VELOURA
            </h1>
          </div>

          {/* Middle: Quick Links */}
          <div className="space-y-2 flex flex-col md:flex-row items-center gap-[120px]">
            <div>
              <h4 className="text-[#A3A3A3] text-[17.156px] leading-[26px] font-inter font-medium capitalize mb-4">
                Explore
              </h4>
              <ul className="flex flex-col gap-2.5">
                <li>
                  <Link
                    className="font-inter text-base leading-[23.55px] font-normal text-white hover:text-[#A3A3A3] capitalize"
                    href="/shop?categories-one-piece"
                  >
                    one piece
                  </Link>
                </li>
                <li>
                  <Link
                    className="font-inter text-base leading-[23.55px] font-normal text-white hover:text-[#A3A3A3] capitalize"
                    href="/shop?categories-two-piece"
                  >
                    two piece
                  </Link>
                </li>
                <li>
                  <Link
                    className="font-inter text-base leading-[23.55px] font-normal text-white hover:text-[#A3A3A3] capitalize"
                    href="/shop?categories-three-piece"
                  >
                    three piece
                  </Link>
                </li>
                <li>
                  <Link
                    className="font-inter text-base leading-[23.55px] font-normal text-white hover:text-[#A3A3A3] capitalize"
                    href="/shop?categories=kaftan"
                  >
                    kaftan
                  </Link>
                </li>
                <li>
                  <Link
                    className="font-inter text-base leading-[23.55px] font-normal text-white hover:text-[#A3A3A3] capitalize"
                    href="/shop?categories-midi-dress"
                  >
                    midi dress
                  </Link>
                </li>
                <li>
                  <Link
                    className="font-inter text-base leading-[23.55px] font-normal text-white hover:text-[#A3A3A3] capitalize"
                    href="/shop?categories-pant"
                  >
                    pant
                  </Link>
                </li>
                <li>
                  <Link
                    className="font-inter text-base leading-[23.55px] font-normal text-white hover:text-[#A3A3A3] capitalize"
                    href="/shop?categories=shirt"
                  >
                    shirt
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Right: Email Subscribe + Social Icons */}
          <div className="w-full max-w-md space-y-4">
            <div className="flex items-center w-full">
              <input
                type="text"
                placeholder="Enter your email"
                className="w-full text-white placeholder:text-white outline-none border-b border-white py-2.5 font-inter text-[17.438px] bg-transparent"
              />
              <button className="outline-none text-[#A3A3A3] border-b border-white py-2.5 font-inter cursor-pointer text-[17.438px] capitalize whitespace-nowrap bg-transparent">
                Subscribe
              </button>
            </div>
            <span className="font-inter text-[#A3A3A3] text-xs leading-[17.66px]">
              By signing up, I agree with the data protection policy of Cowboy.
            </span>

            <div className="flex items-center gap-4 mt-6">
              <Link
                href="https://www.instagram.com/vladafashion"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Instagram size={24} color="#A3A3A3" strokeWidth={1.5} />
              </Link>
              <Link
                href="https://www.facebook.com/profile.php?id=61559933033587"
                target="_blank"
                rel="noopener noreferrer"
              >
                <IoLogoFacebook size={26} color="#A3A3A3" strokeWidth={1.5} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
