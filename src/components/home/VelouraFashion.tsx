import { ChevronLeft, ChevronRight } from "lucide-react";
import React from "react";

const VelouraFashion = () => {
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
          <div className="absolute right- top-8 w-36 h-full bg-gradient-to-1 from-gray-100 via-gray-100/50 to-transparent z-20 pointer-events-none hidden md:block"></div>
          <div className="flex items-center justify-center h-full px-4">
            <div className="swiper swiper-initialized swiper-horizontal w-full flex items-center">
              <div className="swiper-wrapper" style={{ cursor: "grab" }}>
                <div className="swiper-slide swiper-slide-active !flex !items-center !justify-center !h-[765px] bg-transparent!"
                  style={{ width: "78px", marginRight: 30 }}
                >
                  <div className="relative rounded-xl overflow-hidden transition-all duration-300 !w-[422px] !h-[615px] md:-mb-[120px]">
                    {" "}
                    <div className="relative group cursor-pointer">
                      <video
                        src="/reels/vlada reel 1.mp4"
                        className="w-full h-auto rounded-lg"
                        preload="metadata"
                      ></video>
                      <div className="w-full h-full absolute left-0 right-0 top-0 bottom-0 bg-black/50 group-hover:bg-black/30 transition-all duration-500 flex items-center justify-center rounded-lg">
                        <div className="w-17 h-17 rounded-full border-2 border-white flex justify-center items-center opacity-100 visible group-hover:scale-110 cursor-pointer transition-all duration-500">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="36"
                            height="36"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="#ffffff"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            className="lucide lucide-play"
                            aria-hidden="true"
                          >
                            <path d="M5 5a2 2 0 0 1 3.008-1.728111.997 6.998a2 2 0 0 1 .003 3.4581-12 7A2 2 0 0 1 5 192"></path>
                          </svg>
                        </div>{" "}
                      </div>{" "}
                    </div>{" "}
                  </div>{" "}
                </div>
                <div className="swiper-slide swiper-slide-next !flex !items-center !justify-center !h-[765px] bg-transparent!"
                  style={{ width: "78px", marginRight: 30 }}
                >
                  <div className="relative rounded-xl overflow-hidden transition-all duration-300 !w-[422px] !h-[615px] md:-mb-[120px]">
                    {" "}
                    <div className="relative group cursor-pointer">
                      <video
                       src="/reels/vlada_reel_2.mp4"
                        className="w-full h-auto rounded-lg"
                        preload="metadata"
                      ></video>
                      <div className="w-full h-full absolute left-0 right-0 top-0 bottom-0 bg-black/50 group-hover:bg-black/30 transition-all duration-500 flex items-center justify-center rounded-lg">
                        <div className="w-17 h-17 rounded-full border-2 border-white flex justify-center items-center opacity-100 visible group-hover:scale-110 cursor-pointer transition-all duration-500">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="36"
                            height="36"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="#ffffff"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            className="lucide lucide-play"
                            aria-hidden="true"
                          >
                            <path d="M5 5a2 2 0 0 1 3.008-1.728111.997 6.998a2 2 0 0 1 .003 3.4581-12 7A2 2 0 0 1 5 192"></path>
                          </svg>
                        </div>{" "}
                      </div>{" "}
                    </div>{" "}
                  </div>{" "}
                </div>

                <div className="swiper-slide !flex !items-center !justify-center !h-[765px] bg-transparent!"
                  style={{ width: "78px", marginRight: 30 }}
                >
                  <div className="relative rounded-xl overflow-hidden transition-all duration-300 !w-[422px] !h-[615px] md:-mb-[120px]">
                    {" "}
                    <div className="relative group cursor-pointer">
                      <video
                        src="/reels/vlada_reel_3.mp4"
                        className="w-full h-auto rounded-lg"
                        preload="metadata"
                      ></video>
                      <div className="w-full h-full absolute left-0 right-0 top-0 bottom-0 bg-black/50 group-hover:bg-black/30 transition-all duration-500 flex items-center justify-center rounded-lg">
                        <div className="w-17 h-17 rounded-full border-2 border-white flex justify-center items-center opacity-100 visible group-hover:scale-110 cursor-pointer transition-all duration-500">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="36"
                            height="36"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="#ffffff"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            className="lucide lucide-play"
                            aria-hidden="true"
                          >
                            <path d="M5 5a2 2 0 0 1 3.008-1.728111.997 6.998a2 2 0 0 1 .003 3.4581-12 7A2 2 0 0 1 5 192"></path>
                          </svg>
                        </div>{" "}
                      </div>{" "}
                    </div>{" "}
                  </div>{" "}
                </div>
                <div className="swiper-slide !flex !items-center !justify-center !h-[765px] bg-transparent!"
                  style={{ width: "78px", marginRight: 30 }}
                >
                  <div className="relative rounded-xl overflow-hidden transition-all duration-300 !w-[422px] !h-[615px] md:-mb-[120px]">
                    {" "}
                    <div className="relative group cursor-pointer">
                      <video
                        src="/reels/vlada_reel_4.mp4"
                        className="w-full h-auto rounded-lg"
                        preload="metadata"
                      ></video>
                      <div className="w-full h-full absolute left-0 right-0 top-0 bottom-0 bg-black/50 group-hover:bg-black/30 transition-all duration-500 flex items-center justify-center rounded-lg">
                        <div className="w-17 h-17 rounded-full border-2 border-white flex justify-center items-center opacity-100 visible group-hover:scale-110 cursor-pointer transition-all duration-500">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="36"
                            height="36"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="#ffffff"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            className="lucide lucide-play"
                            aria-hidden="true"
                          >
                            <path d="M5 5a2 2 0 0 1 3.008-1.728111.997 6.998a2 2 0 0 1 .003 3.4581-12 7A2 2 0 0 1 5 192"></path>
                          </svg>
                        </div>{" "}
                      </div>{" "}
                    </div>{" "}
                  </div>{" "}
                </div>
                <div className="swiper-slide !flex !items-center !justify-center !h-[765px] bg-transparent!"
                  style={{ width: "78px", marginRight: 30 }}
                >
                  <div className="relative rounded-xl overflow-hidden transition-all duration-300 !w-[422px] !h-[615px] md:-mb-[120px]">
                    {" "}
                    <div className="relative group cursor-pointer">
                      <video
                        src="/reels/vlada_reel_5.mp4"
                        className="w-full h-auto rounded-lg"
                        preload="metadata"
                      ></video>
                      <div className="w-full h-full absolute left-0 right-0 top-0 bottom-0 bg-black/50 group-hover:bg-black/30 transition-all duration-500 flex items-center justify-center rounded-lg">
                        <div className="w-17 h-17 rounded-full border-2 border-white flex justify-center items-center opacity-100 visible group-hover:scale-110 cursor-pointer transition-all duration-500">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="36"
                            height="36"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="#ffffff"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            className="lucide lucide-play"
                            aria-hidden="true"
                          >
                            <path d="M5 5a2 2 0 0 1 3.008-1.728111.997 6.998a2 2 0 0 1 .003 3.4581-12 7A2 2 0 0 1 5 192"></path>
                          </svg>
                        </div>{" "}
                      </div>{" "}
                    </div>{" "}
                  </div>{" "}
                </div>
                <div className="swiper-slide !flex !items-center !justify-center !h-[765px] bg-transparent!"
                  style={{ width: "78px", marginRight: 30 }}
                >
                  <div className="relative rounded-xl overflow-hidden transition-all duration-300 !w-[422px] !h-[615px] md:-mb-[120px]">
                    {" "}
                    <div className="relative group cursor-pointer">
                      <video
                        src="/reels/vlada_reel_6.mp4"
                        className="w-full h-auto rounded-lg"
                        preload="metadata"
                      ></video>
                      <div className="w-full h-full absolute left-0 right-0 top-0 bottom-0 bg-black/50 group-hover:bg-black/30 transition-all duration-500 flex items-center justify-center rounded-lg">
                        <div className="w-17 h-17 rounded-full border-2 border-white flex justify-center items-center opacity-100 visible group-hover:scale-110 cursor-pointer transition-all duration-500">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="36"
                            height="36"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="#ffffff"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            className="lucide lucide-play"
                            aria-hidden="true"
                          >
                            <path d="M5 5a2 2 0 0 1 3.008-1.728111.997 6.998a2 2 0 0 1 .003 3.4581-12 7A2 2 0 0 1 5 192"></path>
                          </svg>
                        </div>{" "}
                      </div>{" "}
                    </div>{" "}
                  </div>{" "}
                </div>
                <div className="swiper-slide !flex !items-center !justify-center !h-[765px] bg-transparent!"
                  style={{ width: "78px", marginRight: 30 }}
                >
                  <div className="relative rounded-xl overflow-hidden transition-all duration-300 !w-[422px] !h-[615px] md:-mb-[120px]">
                    {" "}
                    <div className="relative group cursor-pointer">
                      <video
                        src="/reels/vlada_reel_7.mp4"
                        className="w-full h-auto rounded-lg"
                        preload="metadata"
                      ></video>
                      <div className="w-full h-full absolute left-0 right-0 top-0 bottom-0 bg-black/50 group-hover:bg-black/30 transition-all duration-500 flex items-center justify-center rounded-lg">
                        <div className="w-17 h-17 rounded-full border-2 border-white flex justify-center items-center opacity-100 visible group-hover:scale-110 cursor-pointer transition-all duration-500">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="36"
                            height="36"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="#ffffff"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            className="lucide lucide-play"
                            aria-hidden="true"
                          >
                            <path d="M5 5a2 2 0 0 1 3.008-1.728111.997 6.998a2 2 0 0 1 .003 3.4581-12 7A2 2 0 0 1 5 192"></path>
                          </svg>
                        </div>{" "}
                      </div>{" "}
                    </div>{" "}
                  </div>{" "}
                </div>
                <div className="swiper-slide !flex !items-center !justify-center !h-[765px] bg-transparent!"
                  style={{ width: "78px", marginRight: 30 }}
                >
                  <div className="relative rounded-xl overflow-hidden transition-all duration-300 !w-[422px] !h-[615px] md:-mb-[120px]">
                    {" "}
                    <div className="relative group cursor-pointer">
                      <video
                        src="/reels/vlada_reel_8.mp4"
                        className="w-full h-auto rounded-lg"
                        preload="metadata"
                      ></video>
                      <div className="w-full h-full absolute left-0 right-0 top-0 bottom-0 bg-black/50 group-hover:bg-black/30 transition-all duration-500 flex items-center justify-center rounded-lg">
                        <div className="w-17 h-17 rounded-full border-2 border-white flex justify-center items-center opacity-100 visible group-hover:scale-110 cursor-pointer transition-all duration-500">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="36"
                            height="36"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="#ffffff"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            className="lucide lucide-play"
                            aria-hidden="true"
                          >
                            <path d="M5 5a2 2 0 0 1 3.008-1.728111.997 6.998a2 2 0 0 1 .003 3.4581-12 7A2 2 0 0 1 5 192"></path>
                          </svg>
                        </div>{" "}
                      </div>{" "}
                    </div>{" "}
                  </div>{" "}
                </div>
                <div className="swiper-slide !flex !items-center !justify-center !h-[765px] bg-transparent!"
                  style={{ width: "78px", marginRight: 30 }}
                >
                  <div className="relative rounded-xl overflow-hidden transition-all duration-300 !w-[422px] !h-[615px] md:-mb-[120px]">
                    {" "}
                    <div className="relative group cursor-pointer">
                      <video
                        src="/reels/vlada_reel_9.mp4"
                        className="w-full h-auto rounded-lg"
                        preload="metadata"
                      ></video>
                      <div className="w-full h-full absolute left-0 right-0 top-0 bottom-0 bg-black/50 group-hover:bg-black/30 transition-all duration-500 flex items-center justify-center rounded-lg">
                        <div className="w-17 h-17 rounded-full border-2 border-white flex justify-center items-center opacity-100 visible group-hover:scale-110 cursor-pointer transition-all duration-500">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="36"
                            height="36"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="#ffffff"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            className="lucide lucide-play"
                            aria-hidden="true"
                          >
                            <path d="M5 5a2 2 0 0 1 3.008-1.728111.997 6.998a2 2 0 0 1 .003 3.4581-12 7A2 2 0 0 1 5 192"></path>
                          </svg>
                        </div>{" "}
                      </div>{" "}
                    </div>{" "}
                  </div>{" "}
                </div>
                <div className="swiper-slide !flex !items-center !justify-center !h-[765px] bg-transparent!"
                  style={{ width: "78px", marginRight: 30 }}
                >
                  <div className="relative rounded-xl overflow-hidden transition-all duration-300 !w-[422px] !h-[615px] md:-mb-[120px]">
                    {" "}
                    <div className="relative group cursor-pointer">
                      <video
                        src="/reels/vlada_reel_1.mp4"
                        className="w-full h-auto rounded-lg"
                        preload="metadata"
                      ></video>
                      <div className="w-full h-full absolute left-0 right-0 top-0 bottom-0 bg-black/50 group-hover:bg-black/30 transition-all duration-500 flex items-center justify-center rounded-lg">
                        <div className="w-17 h-17 rounded-full border-2 border-white flex justify-center items-center opacity-100 visible group-hover:scale-110 cursor-pointer transition-all duration-500">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="36"
                            height="36"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="#ffffff"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            className="lucide lucide-play"
                            aria-hidden="true"
                          >
                            <path d="M5 5a2 2 0 0 1 3.008-1.728111.997 6.998a2 2 0 0 1 .003 3.4581-12 7A2 2 0 0 1 5 192"></path>
                          </svg>
                        </div>{" "}
                      </div>{" "}
                    </div>{" "}
                  </div>{" "}
                </div>


              </div>
              <button
                className="swiper-button-prev-custom absolute left-8 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/90 hover:bg-white rounded-full shadow-lg flex items-center justify-center transition-all duration-200 hover: scale-110 z-30 tex t-gray-700 text-x1 font-bold swiper-button-disabled"
                disabled
              >
                <ChevronLeft />{" "}
              </button>
              <button className="swiper-button-next-custom absolute right-8 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/90 hover:bg-white rounded-full shadow-lg flex items-center justify-center transition-all duration-200 hover: scale-110 z-30 te xt-gray-700 text-xl font-bold">
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
