"use client";

import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import { Instagram, Facebook } from "lucide-react";
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
              <svg
                className="w-5 h-5 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>
            <button
              className="w-12 h-12 bg-[#1D1D1D] border border-gray-700/50 rounded-full flex items-center justify-center hover:bg-gray-700/50 transition-colors duration-300"
              onClick={() => swiperRef.current?.slideNext()}
            >
              <svg
                className="w-5 h-5 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M9 5l7 7-7 7"
                />
              </svg>
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
                <div className="mb-6">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={1.5}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className={`w-8 h-8 text-white`}
                  >
                    {item.icon === "house" && (
                      <>
                        <path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"></path>
                        <path d="M3 10a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-9z"></path>
                      </>
                    )}
                    {item.icon === "smile" && (
                      <>
                        <circle cx="12" cy="12" r="10"></circle>
                        <path d="M8 14s1.5 2 4 2 4-2 4-2"></path>
                        <line x1="9" y1="9" x2="9.01" y2="9"></line>
                        <line x1="15" y1="9" x2="15.01" y2="9"></line>
                      </>
                    )}
                    {item.icon === "shield" && (
                      <path d="M20 13c0 5-7.5 7.5-8 7.5s-8-2.5-8-7.5V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C16.5 4.8 19 6 20 6a1 1 0 0 1 1 1v6z"></path>
                    )}
                    {item.icon === "star" && (
                      <path d="M12 2l3 6 6 .5-4.5 4.5L17 21l-5-3-5 3 1.5-7-4.5-4.5 6-.5L12 2z"></path>
                    )}
                    {item.icon === "truck" && (
                      <>
                        <path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2"></path>
                        <path d="M15 18H9"></path>
                        <circle cx="17" cy="18" r="2"></circle>
                        <circle cx="7" cy="18" r="2"></circle>
                      </>
                    )}
                    {item.icon === "clock" && (
                      <>
                        <circle cx="12" cy="12" r="10"></circle>
                        <path d="M12 6v6l4 2"></path>
                      </>
                    )}
                  </svg>
                </div>
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
              VLADA
            </h1>
          </div>

          {/* Middle: Quick Links */}
          <div className="flex flex-col space-y-2">
            <Link
              href="#"
              className="text-gray-400 hover:text-white transition-colors"
            >
              About Us
            </Link>
            <Link
              href="#"
              className="text-gray-400 hover:text-white transition-colors"
            >
              Services
            </Link>
            <Link
              href="#"
              className="text-gray-400 hover:text-white transition-colors"
            >
              FAQ
            </Link>
            <Link
              href="#"
              className="text-gray-400 hover:text-white transition-colors"
            >
              Contact
            </Link>
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
                <Facebook size={24} color="#A3A3A3" strokeWidth={1.5} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
