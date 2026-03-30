import Image from "next/image";
import Link from "next/link";
import React from "react";


const TopSellingProduct = () => {
  return (
    <div className="w-full my-10">
      <div className="px-5 md:px-21 py-10">
        <h1 className="text-center text-[42px] font-semibold my-5">
          Top Selling Products
        </h1>
        <p className="text-center mt-3 font-inter text-base leading-4 text-[#737373] capitalize mb-16">
          view the best products you can buy today
        </p>

        <div className="relative w-full overflow-hidden">
          <div className="relative px-4 sm:px-6 md:px-12 lg:px-16">
            <div className="swiper swiper-initialized swiper-horizontal !w-full !py-4">
              <div className="swiper-wrapper">
                <div
                  className="swiper-slide swiper-slide-active !flex !justify-center !h-auto transition-transform duration-300 bg-[#EEEBE5]"
                  style={{ width: "74px", marginRight: "20px" }}
                  data-swiper-slide-index="0"
                >
                  <div className="w-full max-w-sm mx-auto">
                    <div className="group relative bg-white rounded-2xl shadow-sm hover:shadow-md transition-all duration-300">
                      <div className="relative  overflow-hidden bg-gray-50">
                        <Link href="/shop/luxe-cotton">
                          <Image
                            alt="product"
                            loading="lazy"
                            width={350}
                            height={300}
                            decoding="async"
                            data-nimg="1"
                            className="w-full h-[300px] object-cover hover:scale-105 overflow-hidden transition-all duration-300 cursor-pointer"
                            style={{ color: "transparent" }}
                            src="https://server.vlada.store/uploads/image-1760107339717-564940287.JPG"
                          ></Image>
                        </Link>
                        <div className="absolute inset-x-2 bottom-2 transition-all duration-300 md:translate-y-full md:opacity-0 translate-y-0 opacity-100">
                          <button className=" cursor-pointer w-full bg-gray-900 text-white py-2 px-3 rounded-1g font-medium flex items-center justify-center gap-2 transition-colors duration-200 shadow-md hover:shadow-lg">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              stroke-width="2"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              className="lucide lucide-plus w-4 h -4"
                              aria-hidden="true"
                            >
                              <path d="M5 12h14"></path>
                              <path d="M12 5v14"></path>
                            </svg>
                            Add to Cart
                          </button>
                        </div>
                      </div>

                      <div className="p-4 space-y-2">
                        <div className="space-y-0.5">
                          <p className="text-xs text-gray-500 font-medium capitalize ">
                            two piece
                          </p>
                          <a
                            className="font-semibold text-gray-900 line-clamp-2 hover:text-black transition-colors text-sm"
                            href="/shop/luxe-cotton"
                          >
                            luxe cotton
                          </a>{" "}
                        </div>
                        <div className="flex items-center gap-1">
                          <div className="flex items-center gap-0.5">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              stroke-width="2"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              className="lucide lucide-star w-3.5 h-3.5 fill-yellow-400 text-yellow-400"
                              aria-hidden="true"
                            >
                              <path d="M11.525 2.295a.53.53 0 0 1 .95 012.31 4.679a2.123 2.123 0 0 0 1.595 1.1615.166.756a.53.53 0 0 1.294.9841-3.736 3.638a2.123 2.123 0 0 0-.611 1.8781.882 5.14a.53.53 0 0 1-.771.561-4.618-2.428a2.122 2.12 2 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.561.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.90615.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>{" "}
                            </svg>
                            <span className="text-xs font-medium text-gray-700">
                              0
                            </span>
                          </div>
                          <span className="text-xs text-gray-500">0</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="text-base font-bold text-gray-900">
                            3200
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="swiper-slide swiper-slide-active !flex !justify-center !h-auto transition-transform duration-300 bg-[#EEEBE5]"
                  style={{ width: "74px", marginRight: "20px" }}
                  data-swiper-slide-index="1"
                >
                  <div className="w-full max-w-sm mx-auto">
                    <div className="group relative bg-white rounded-2xl shadow-sm hover:shadow-md transition-all duration-300">
                      <div className="relative  overflow-hidden bg-gray-50">
                        <Link href="/shop/serapha">
                          <Image
                            alt="product"
                            loading="lazy"
                            width={350}
                            height={300}
                            decoding="async"
                            data-nimg="1"
                            className="w-full h-[300px] object-cover hover:scale-105 overflow-hidden transition-all duration-300 cursor-pointer"
                            style={{ color: "transparent" }}
                            src="https://server.vlada.store/uploads/image-1757701847760-572823426.jpg"
                          ></Image>
                        </Link>
                        <div className="absolute top-2 left-2 bg-red-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
                          -12%
                        </div>
                        <div className="absolute inset-x-2 bottom-2 transition-all duration-300 md:translate-y-full md:opacity-0 translate-y-0 opacity-100">
                          <button className=" cursor-pointer w-full bg-gray-900 text-white py-2 px-3 rounded-1g font-medium flex items-center justify-center gap-2 transition-colors duration-200 shadow-md hover:shadow-lg">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              stroke-width="2"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              className="lucide lucide-plus w-4 h -4"
                              aria-hidden="true"
                            >
                              <path d="M5 12h14"></path>
                              <path d="M12 5v14"></path>
                            </svg>
                            Add to Cart
                          </button>
                        </div>
                      </div>

                      <div className="p-4 space-y-2">
                        <div className="space-y-0.5">
                          <p className="text-xs text-gray-500 font-medium capitalize ">
                            two piece
                          </p>
                          <a
                            className="font-semibold text-gray-900 line-clamp-2 hover:text-black transition-colors text-sm"
                            href="/shop/luxe-cotton"
                          >
                            luxe cotton
                          </a>{" "}
                        </div>
                        <div className="flex items-center gap-1">
                          <div className="flex items-center gap-0.5">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              stroke-width="2"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              className="lucide lucide-star w-3.5 h-3.5 fill-yellow-400 text-yellow-400"
                              aria-hidden="true"
                            >
                              <path d="M11.525 2.295a.53.53 0 0 1 .95 012.31 4.679a2.123 2.123 0 0 0 1.595 1.1615.166.756a.53.53 0 0 1.294.9841-3.736 3.638a2.123 2.123 0 0 0-.611 1.8781.882 5.14a.53.53 0 0 1-.771.561-4.618-2.428a2.122 2.12 2 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.561.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.90615.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>{" "}
                            </svg>
                            <span className="text-xs font-medium text-gray-700">
                              0
                            </span>
                          </div>
                          <span className="text-xs text-gray-500">0</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="text-base font-bold text-gray-900">
                            3200
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div
                  className="swiper-slide !flex !justify-center !h-auto transition-transform duration-300 bg-[#EEEBE5]"
                  style={{ width: "74px", marginRight: "20px" }}
                  data-swiper-slide-index="2"
                >
                  <div className="w-full max-w-sm mx-auto">
                    <div className="group relative bg-white rounded-2xl shadow-sm hover:shadow-md transition-all duration-300">
                      <div className="relative  overflow-hidden bg-gray-50">
                        <Link href="/shop/78">
                          <Image
                            alt="product"
                            loading="lazy"
                            width={350}
                            height={300}
                            decoding="async"
                            data-nimg="1"
                            className="w-full h-[300px] object-cover hover:scale-105 overflow-hidden transition-all duration-300 cursor-pointer"
                            style={{ color: "transparent" }}
                       src="https://server.vlada.store/uploads/image-1760106888259-972509261.JPG"
                          ></Image>
                        </Link>
                        <div className="absolute top-2 left-2 bg-red-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
                          -12%
                        </div>
                        <div className="absolute inset-x-2 bottom-2 transition-all duration-300 md:translate-y-full md:opacity-0 translate-y-0 opacity-100">
                          <button className=" cursor-pointer w-full bg-gray-900 text-white py-2 px-3 rounded-1g font-medium flex items-center justify-center gap-2 transition-colors duration-200 shadow-md hover:shadow-lg">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              stroke-width="2"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              className="lucide lucide-plus w-4 h -4"
                              aria-hidden="true"
                            >
                              <path d="M5 12h14"></path>
                              <path d="M12 5v14"></path>
                            </svg>
                            Add to Cart
                          </button>
                        </div>
                      </div>

                      <div className="p-4 space-y-2">
                        <div className="space-y-0.5">
                          <p className="text-xs text-gray-500 font-medium capitalize ">
                            two piece
                          </p>
                          <a
                            className="font-semibold text-gray-900 line-clamp-2 hover:text-black transition-colors text-sm"
                            href="/shop/luxe-cotton"
                          >
                            luxe cotton
                          </a>{" "}
                        </div>
                        <div className="flex items-center gap-1">
                          <div className="flex items-center gap-0.5">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              stroke-width="2"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              className="lucide lucide-star w-3.5 h-3.5 fill-yellow-400 text-yellow-400"
                              aria-hidden="true"
                            >
                              <path d="M11.525 2.295a.53.53 0 0 1 .95 012.31 4.679a2.123 2.123 0 0 0 1.595 1.1615.166.756a.53.53 0 0 1.294.9841-3.736 3.638a2.123 2.123 0 0 0-.611 1.8781.882 5.14a.53.53 0 0 1-.771.561-4.618-2.428a2.122 2.12 2 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.561.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.90615.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>{" "}
                            </svg>
                            <span className="text-xs font-medium text-gray-700">
                              0
                            </span>
                          </div>
                          <span className="text-xs text-gray-500">0</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="text-base font-bold text-gray-900">
                            3200
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="swiper-slide !flex !justify-center !h-auto transition-transform duration-300 bg-[#EEEBE5]"
                  style={{ width: "74px", marginRight: "20px" }}
                  data-swiper-slide-index="3"
                >
                  <div className="w-full max-w-sm mx-auto">
                    <div className="group relative bg-white rounded-2xl shadow-sm hover:shadow-md transition-all duration-300">
                      <div className="relative  overflow-hidden bg-gray-50">
                        <Link href="/shop/78">
                          <Image
                            alt="product"
                            loading="lazy"
                            width={350}
                            height={300}
                            decoding="async"
                            data-nimg="1"
                            className="w-full h-[300px] object-cover hover:scale-105 overflow-hidden transition-all duration-300 cursor-pointer"
                            style={{ color: "transparent" }}
                           src="https://server.vlada.store/uploads/image-1757701847760-572823426.jpg"
                          ></Image>
                        </Link>
                        <div className="absolute top-2 left-2 bg-red-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
                          -12%
                        </div>
                        <div className="absolute inset-x-2 bottom-2 transition-all duration-300 md:translate-y-full md:opacity-0 translate-y-0 opacity-100">
                          <button className=" cursor-pointer w-full bg-gray-900 text-white py-2 px-3 rounded-1g font-medium flex items-center justify-center gap-2 transition-colors duration-200 shadow-md hover:shadow-lg">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              stroke-width="2"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              className="lucide lucide-plus w-4 h -4"
                              aria-hidden="true"
                            >
                              <path d="M5 12h14"></path>
                              <path d="M12 5v14"></path>
                            </svg>
                            Add to Cart
                          </button>
                        </div>
                      </div>

                      <div className="p-4 space-y-2">
                        <div className="space-y-0.5">
                          <p className="text-xs text-gray-500 font-medium capitalize ">
                            two piece
                          </p>
                          <a
                            className="font-semibold text-gray-900 line-clamp-2 hover:text-black transition-colors text-sm"
                            href="/shop/luxe-cotton"
                          >
                            luxe cotton
                          </a>{" "}
                        </div>
                        <div className="flex items-center gap-1">
                          <div className="flex items-center gap-0.5">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              stroke-width="2"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              className="lucide lucide-star w-3.5 h-3.5 fill-yellow-400 text-yellow-400"
                              aria-hidden="true"
                            >
                              <path d="M11.525 2.295a.53.53 0 0 1 .95 012.31 4.679a2.123 2.123 0 0 0 1.595 1.1615.166.756a.53.53 0 0 1.294.9841-3.736 3.638a2.123 2.123 0 0 0-.611 1.8781.882 5.14a.53.53 0 0 1-.771.561-4.618-2.428a2.122 2.12 2 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.561.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.90615.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>{" "}
                            </svg>
                            <span className="text-xs font-medium text-gray-700">
                              0
                            </span>
                          </div>
                          <span className="text-xs text-gray-500">0</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="text-base font-bold text-gray-900">
                            3200
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="swiper-slide !flex !justify-center !h-auto transition-transform duration-300 bg-[#EEEBE5]"
                  style={{ width: "74px", marginRight: "20px" }}
                  data-swiper-slide-index="4"
                >
                  <div className="w-full max-w-sm mx-auto">
                    <div className="group relative bg-white rounded-2xl shadow-sm hover:shadow-md transition-all duration-300">
                      <div className="relative  overflow-hidden bg-gray-50">
                        <Link href="/shop/78">
                          <Image
                            alt="product"
                            loading="lazy"
                            width={350}
                            height={300}
                            decoding="async"
                            data-nimg="1"
                            className="w-full h-[300px] object-cover hover:scale-105 overflow-hidden transition-all duration-300 cursor-pointer"
                            style={{ color: "transparent" }}
                          src="https://server.vlada.store/uploads/image-1760106428606-848061279.jpg"
                          ></Image>
                        </Link>
                        <div className="absolute top-2 left-2 bg-red-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
                          -12%
                        </div>
                        <div className="absolute inset-x-2 bottom-2 transition-all duration-300 md:translate-y-full md:opacity-0 translate-y-0 opacity-100">
                          <button className=" cursor-pointer w-full bg-gray-900 text-white py-2 px-3 rounded-1g font-medium flex items-center justify-center gap-2 transition-colors duration-200 shadow-md hover:shadow-lg">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              stroke-width="2"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              className="lucide lucide-plus w-4 h -4"
                              aria-hidden="true"
                            >
                              <path d="M5 12h14"></path>
                              <path d="M12 5v14"></path>
                            </svg>
                            Add to Cart
                          </button>
                        </div>
                      </div>

                      <div className="p-4 space-y-2">
                        <div className="space-y-0.5">
                          <p className="text-xs text-gray-500 font-medium capitalize ">
                            two piece
                          </p>
                          <a
                            className="font-semibold text-gray-900 line-clamp-2 hover:text-black transition-colors text-sm"
                            href="/shop/luxe-cotton"
                          >
                            luxe cotton
                          </a>{" "}
                        </div>
                        <div className="flex items-center gap-1">
                          <div className="flex items-center gap-0.5">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              stroke-width="2"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              className="lucide lucide-star w-3.5 h-3.5 fill-yellow-400 text-yellow-400"
                              aria-hidden="true"
                            >
                              <path d="M11.525 2.295a.53.53 0 0 1 .95 012.31 4.679a2.123 2.123 0 0 0 1.595 1.1615.166.756a.53.53 0 0 1.294.9841-3.736 3.638a2.123 2.123 0 0 0-.611 1.8781.882 5.14a.53.53 0 0 1-.771.561-4.618-2.428a2.122 2.12 2 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.561.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.90615.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>{" "}
                            </svg>
                            <span className="text-xs font-medium text-gray-700">
                              0
                            </span>
                          </div>
                          <span className="text-xs text-gray-500">0</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="text-base font-bold text-gray-900">
                            3200
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="swiper-slide !flex !justify-center !h-auto transition-transform duration-300 bg-[#EEEBE5]"
                  style={{ width: "74px", marginRight: "20px" }}
                  data-swiper-slide-index="5"
                >
                  <div className="w-full max-w-sm mx-auto">
                    <div className="group relative bg-white rounded-2xl shadow-sm hover:shadow-md transition-all duration-300">
                      <div className="relative  overflow-hidden bg-gray-50">
                        <Link href="/shop/78">
                          <Image
                            alt="product"
                            loading="lazy"
                            width={350}
                            height={300}
                            decoding="async"
                            data-nimg="1"
                            className="w-full h-[300px] object-cover hover:scale-105 overflow-hidden transition-all duration-300 cursor-pointer"
                            style={{ color: "transparent" }}
            src="https://server.vlada.store/uploads/image-1760127147455-176793900.JPG"
                          ></Image>
                        </Link>
                        <div className="absolute top-2 left-2 bg-red-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
                          -12%
                        </div>
                        <div className="absolute inset-x-2 bottom-2 transition-all duration-300 md:translate-y-full md:opacity-0 translate-y-0 opacity-100">
                          <button className=" cursor-pointer w-full bg-gray-900 text-white py-2 px-3 rounded-1g font-medium flex items-center justify-center gap-2 transition-colors duration-200 shadow-md hover:shadow-lg">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              stroke-width="2"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              className="lucide lucide-plus w-4 h -4"
                              aria-hidden="true"
                            >
                              <path d="M5 12h14"></path>
                              <path d="M12 5v14"></path>
                            </svg>
                            Add to Cart
                          </button>
                        </div>
                      </div>

                      <div className="p-4 space-y-2">
                        <div className="space-y-0.5">
                          <p className="text-xs text-gray-500 font-medium capitalize ">
                            two piece
                          </p>
                          <a
                            className="font-semibold text-gray-900 line-clamp-2 hover:text-black transition-colors text-sm"
                            href="/shop/luxe-cotton"
                          >
                            luxe cotton
                          </a>{" "}
                        </div>
                        <div className="flex items-center gap-1">
                          <div className="flex items-center gap-0.5">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              stroke-width="2"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              className="lucide lucide-star w-3.5 h-3.5 fill-yellow-400 text-yellow-400"
                              aria-hidden="true"
                            >
                              <path d="M11.525 2.295a.53.53 0 0 1 .95 012.31 4.679a2.123 2.123 0 0 0 1.595 1.1615.166.756a.53.53 0 0 1.294.9841-3.736 3.638a2.123 2.123 0 0 0-.611 1.8781.882 5.14a.53.53 0 0 1-.771.561-4.618-2.428a2.122 2.12 2 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.561.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.90615.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>{" "}
                            </svg>
                            <span className="text-xs font-medium text-gray-700">
                              0
                            </span>
                          </div>
                          <span className="text-xs text-gray-500">0</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="text-base font-bold text-gray-900">
                            3200
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="absolute inset-y-0 left-0 right-0 flex items-center justify-between pointer-events-none z-20">
              <button
                className="pointer-events-auto m1-2 sm:ml-4 md:m1-6w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-full shadow-lg border border-gray-200/50 flex items-center justify-center transition-all duration-300 ease-in-out backdrop-blur-sm bg-gray-100/80 text-gray-400 cursor-not-allowed opacity-60 scale-95"
                disabled
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="lucide lucide-chevron-left w-5 h-5 sm:w-6 sm:h-6"
                  aria-hidden="true"
                >
                  <path d="m15 18-6-6 6-6"></path>
                </svg>{" "}
              </button>

              <button className="pointer-events-auto mr-2 sm:mr-4 md:mr-6 w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-full shadow-lg border border-gray-200/50 flex items-center justify-center transition-all duration-300 ease-in-out backdrop-blur-sm bg-white/95 hover:bg-white text-gray-700 hover:text-black cursor-pointer hover: scale-110 hover:shadow-x1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="lucide lucide-chevron-right w-5 h-5 sm:w-6 sm:h-6"
                  aria-hidden="true"
                >
                  <path d="m9 18 6-6-6-6"></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopSellingProduct;
