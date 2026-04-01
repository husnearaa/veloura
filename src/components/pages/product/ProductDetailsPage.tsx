"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const ProductDetailsPage = () => {
  const [quantity, setQuantity] = useState(1);
  return (
    <div>
      {/* header */}
      <div className="py-[60px] bg-white">
        <p className="text-center font-inter">three piece</p>
        <h1 className="text-8xl text-center font-inter font-normal text-[#1D1D1D] leading-24  tracking-[-2.88px]">
          Noor in Blue
        </h1>
      </div>

      {/* banner */}

      <div className="flex justify-center items-center">
        <Image
          alt="Classy"
          loading="lazy"
          width={1000}
          height={1000}
          decoding="async"
          data-nimg="1"
          className="h-screen w-screen object-cover"
          style={{ color: "transparent" }}
          src="https://server.vlada.store/uploads/image-1771193305904-137623872.jpg"
        />{" "}
      </div>

      {/* swiper */}
      <div className="py-[110px] flex justify-center bg-[#FDF8F2] ">
        <p className="max-w-[900px] text-center text-[28px] font-inter font-normal ">
          𝐍𝐨𝐨𝐫 𝐢𝐧 𝐁𝐥𝐮𝐞
        </p>
      </div>

      {/* part 4 */}

      <div className="pb-[110px] lg:pl-[165px] px-3 bg-[#FDF8F2]">
        <div className="relative w-full overflow-hidden">
          <div className="swiper swiper-initialized swiper-horizontal w-full">
            <div className="swiper-wrapper">
              <div
                className="swiper-slide swiper-slide-active !h-auto"
                style={{ width: "90px", marginRight: "15px" }}
              >
                <div className="relative w-full aspect-[3/4] overflow-hidden cursor-pointer ">
                  <Image
                    alt="Product image 1"
                    decoding="async"
                    data-nimg="fill"
                    width={1000}
                    height={1000}
                    className="object-cover transition-transform duration-300"
                    style={{
                      position: "absolute",
                      height: "100%",
                      width: "100%",
                      left: 0,
                      top: 0,
                      right: 0,
                      bottom: 0,
                      color: "transparent",
                    }}
                    src="https://server.vlada.store/uplo ads/image-1771193305904-137623872.jpg"
                  />
                </div>
              </div>
              <div
                className="swiper-slide swiper-slide-next !h-auto"
                style={{ width: "90px", marginRight: "15px" }}
              >
                <div className="relative w-full aspect-[3/4] overflow-hidden cursor-pointer ">
                  <Image
                    alt="Product image 2"
                    decoding="async"
                    data-nimg="fill"
                    width={1000}
                    height={1000}
                    className="object-cover transition-transform duration-300"
                    style={{
                      position: "absolute",
                      height: "100%",
                      width: "100%",
                      left: 0,
                      top: 0,
                      right: 0,
                      bottom: 0,
                      color: "transparent",
                    }}
                    src="https://server.vlada.store/uplo ads/image-1771193306115-35956998.jpg"
                  />
                </div>
              </div>
              <div
                className="swiper-slide !h-auto"
                style={{ width: "90px", marginRight: "15px" }}
              >
                <div className="relative w-full aspect-[3/4] overflow-hidden cursor-pointer ">
                  <Image
                    alt="Product image 3"
                    decoding="async"
                    data-nimg="fill"
                    width={1000}
                    height={1000}
                    className="object-cover transition-transform duration-300"
                    style={{
                      position: "absolute",
                      height: "100%",
                      width: "100%",
                      left: 0,
                      top: 0,
                      right: 0,
                      bottom: 0,
                      color: "transparent",
                    }}
                    src="https://server.vlada.store/uplo ads/image-1771193306318-13746043.jpg"
                  />
                </div>{" "}
              </div>
            </div>{" "}
          </div>
          <div className="absolute inset-y- left-0 right-0 flex items-center justify-between pointer-events-none z-20"></div>
        </div>
      </div>

      {/* part 5 */}

      <div className="min-h-screen bg-white">
        <div className="flex flex-col lg:flex-row gap-4 lg:gap-8 px-4 1g:px-24 pb-8 1g:pb-[234px]">
          <div className="w-full lg:w-1/2 x1:w-3/5 bg-[#EEEBE5] flex items-center justify-center p-4 sm:p-8 lg:p-1 x1:p-16">
            <div className="relative w-full max-w-[440px] max-h-[660px] overflow-hidden cursor-zoom-in">
              <Image
                alt="product details image"
                loading="lazy"
                width={1000}
                height={1000}
                decoding="async"
                data-nimg="1"
                className="w-full h-full object-contain transition-transform duration-300 ease-out scale-180"
                style={{ color: "transparent", transformOrigin: "center" }}
                src="https://server.vlada.store/uploads/image-1771193305904-137623872.jpg"
              />
            </div>
          </div>

          <div className="w-full lg:w-1/2 x1:w-2/5 flex flex-col py-4 lg:py-12 x1:py-24">
            <div className="flex-grow">
              <Link
                href="/shop?categories=three-piece"
                className="text-[#1D1D1D] underline font-normal text-sm capitalize"
              ></Link>
              <h1 className="text-[#1D1D1D] font-normal my-5 text-2xl sm:text-3xl lg:text-4xl break-words">
                Noor in Blue
              </h1>
              Three piece
              <div className="flex gap-2"></div>
              <div className="my-7"></div>
              <div className="my-6">
                <p className="font-medium capitalize mb-3">Select size</p>
                <div className="flex flex-wrap items-center gap-2 sm:gap-3">
                  <button className="text-sm border min-w-[44px] h-[44px] border-gray-300 hover:border-gray-400 px-3 py-2 cursor-pointer transition-colors duration-200 capitalize">
                    xs
                  </button>
                  <button className="text-sm border min-w-[44px] h-[44px] border-gray-300 hover:border-gray-400 px-3 py-2 cursor-pointer transition-colors duration-200 capitalize">
                    S
                  </button>
                  <button className="text-sm border min-w-[44px] h-[44px] border-gray-300 hover:border-gray-400 px-3 py-2 cursor-pointer transition-colors duration-200 capitalize">
                    M
                  </button>
                  <button className="text-sm border min-w-[44px] h-[44px] border-gray-300 hover:border-gray-400 px-3 py-2 cursor-pointer transition-colors duration-200 capitalize">
                    L
                  </button>
                  <button className="text-sm border min-w-[44px] h-[44px] border-gray-300 hover:border-gray-400 px-3 py-2 cursor-pointer transition-colors duration-200 capitalize">
                    XL
                  </button>
                  <button className="text-sm border min-w-[44px] h-[44px] border-gray-300 hover:border-gray-400 px-3 py-2 cursor-pointer transition-colors duration-200 capitalize">
                    2XL
                  </button>
                </div>
                <p className="text-red-600 min-h-[1.5rem]"></p>
              </div>
            </div>

            <div className="mt-auto">
              <div className="border border-gray-300 mt-6 flex justify-between items-center p-4">
                <p className="font-medium">Quantity</p>
                <div className="flex items-center border border-gray-300 rounded">
                  <button
                    disabled
                    className="p-2 cursor-not-allowed opacity-50 transition-colors duration-200"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-minus"
                      aria-hidden="true"
                    >
                      <path d="M5 12h14"></path>
                    </svg>
                  </button>
                <input
  type="text"
  min="1"
  className="w-12 h-10 text-center border-none outline-none bg-transparent"
  value={quantity}
  onChange={(e) => setQuantity(Number(e.target.value))}
/>
                  <button className="p-2 cursor-pointer hover:bg-gray-100 transition-colors duration-200">
                   <svg
  xmlns="http://www.w3.org/2000/svg"
  width="16"
  height="16"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  strokeWidth="2"
  strokeLinecap="round"
  strokeLinejoin="round"
  className="lucide lucide-plus"
  aria-hidden="true"
>
                      {" "}
                      <path d="M5 12h14"></path>
                      <path d="M12 5v14"></path>
                    </svg>
                  </button>
                </div>
              </div>
              <div className="mt-4 flex items-center gap-6">
                <button
                  disabled
                  className="w-full rounded-full py-4 px-4 bg-black/60 text-white font-medium transition-colors duration-200 cursor-pointer"
                >
                  Add to cart
                </button>
                <button
                  disabled
                  className="w-full rounded-full py-4 px-4 text-black/60 border border-black font-medium transition-colors duration-200 cursor-pointer"
                >
                  Buy Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* part 6 */}
      <div className=" px-2 md:px-[60px] lg:px-[100px] pt-[110px] pb-[270px] bg-white border-t border-black/20">
        <div className="flex justify-between">
          <h1 className="text-[#1D1D1D] font-normal text-2xl lg:text-4xl">
            You might also like
          </h1>
          <Link
            href={"/shop"}
            className="py-2 px-8 bg-black text-white  rounded-full"
          >
            View All
          </Link>
        </div>
        <div className="mt-11 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 px-4 sm:px-6 lg:px-8">
          <Link
            className="flex flex-col items-center text-center"
            href="/shop/1"
          >
            <div className="bg-[#EEEBE5] p-4 w-full aspect-square relative">
              <Image
                alt="Olive Eclat"
                loading="lazy"
                decoding="async"
                data-nimg="fill"
                className="rounded-md"
                width={500}
                height={500}
                style={{
                  position: "absolute",
                  height: "100%",
                  width: "100%",
                  left: 0,
                  top: 0,
                  right: 0,
                  bottom: 0,
                  objectFit: "cover",
                  color: "transparent",
                }}
                src="https://server.vlada.store/uploads/image-1757703278074-815415987.jpg"
              />
            </div>
            <div className="mt-4 flex flex-col items-center gap-2">
              <p className="text-[#1D1D1D] text-sm sm:text-base truncate w-full">
                Olive Eclat
              </p>
              <div className="flex gap-2 text-sm sm:text-base">
                <s className="text-gray-500">7200 TK</s>
                <p className="font-medium text-[#1D1D1D]">7200 TK</p>
              </div>
            </div>
          </Link>
          <Link
            className="flex flex-col items-center text-center"
            href="/shop/gulzar"
          >
            <div className="bg-[#EEEBE5] p-4 w-full aspect-square relative">
              <Image
                alt="Olive Eclat"
                loading="lazy"
                decoding="async"
                data-nimg="fill"
                className="rounded-md"
                width={500}
                height={500}
                style={{
                  position: "absolute",
                  height: "100%",
                  width: "100%",
                  left: 0,
                  top: 0,
                  right: 0,
                  bottom: 0,
                  objectFit: "cover",
                  color: "transparent",
                }}
                src="https://server.vlada.store/uploads/image-1757704006204-475567309.jpg"
              />
            </div>
            <div className="mt-4 flex flex-col items-center gap-2">
              <p className="text-[#1D1D1D] text-sm sm:text-base truncate w-full">
                Gulzar
              </p>
              <div className="flex gap-2 text-sm sm:text-base">
                <s className="text-gray-500">4880 TK</s>
                <p className="font-medium text-[#1D1D1D]">4880 TK</p>
              </div>
            </div>
          </Link>
          <Link
            className="flex flex-col items-center text-center"
            href="/shop/56"
          >
            <div className="bg-[#EEEBE5] p-4 w-full aspect-square relative">
              <Image
                alt="Olive Eclat"
                loading="lazy"
                decoding="async"
                data-nimg="fill"
                className="rounded-md"
                width={500}
                height={500}
                style={{
                  position: "absolute",
                  height: "100%",
                  width: "100%",
                  left: 0,
                  top: 0,
                  right: 0,
                  bottom: 0,
                  objectFit: "cover",
                  color: "transparent",
                }}
                src="https://server.vlada.store/uploads/image-1760105910865-220210621.JPG"
              />
            </div>
            <div className="mt-4 flex flex-col items-center gap-2">
              <p className="text-[#1D1D1D] text-sm sm:text-base truncate w-full">
                Modern Muse
              </p>
              <div className="flex gap-2 text-sm sm:text-base">
                <s className="text-gray-500">3880 TK</s>
                <p className="font-medium text-[#1D1D1D]">3880 TK</p>
              </div>
            </div>
          </Link>
          <Link
            className="flex flex-col items-center text-center"
            href="/shop/bhgh"
          >
            <div className="bg-[#EEEBE5] p-4 w-full aspect-square relative">
              <Image
                alt="Olive Eclat"
                loading="lazy"
                decoding="async"
                data-nimg="fill"
                className="rounded-md"
                width={500}
                height={500}
                style={{
                  position: "absolute",
                  height: "100%",
                  width: "100%",
                  left: 0,
                  top: 0,
                  right: 0,
                  bottom: 0,
                  objectFit: "cover",
                  color: "transparent",
                }}
                src="https://server.vlada.store/uploads/image-1771193184711-667423282.jpg"
              />
            </div>
            <div className="mt-4 flex flex-col items-center gap-2">
              <p className="text-[#1D1D1D] text-sm sm:text-base truncate w-full">
                BLUSH GARDENIA
              </p>
              <div className="flex gap-2 text-sm sm:text-base">
                <s className="text-gray-500">3480 TK</s>
                <p className="font-medium text-[#1D1D1D]">3480 TK</p>
              </div>
            </div>
          </Link>
          <Link
            className="flex flex-col items-center text-center"
            href="/shop/vhv"
          >
            <div className="bg-[#EEEBE5] p-4 w-full aspect-square relative">
              <Image
                alt="Olive Eclat"
                loading="lazy"
                decoding="async"
                data-nimg="fill"
                className="rounded-md"
                width={500}
                height={500}
                style={{
                  position: "absolute",
                  height: "100%",
                  width: "100%",
                  left: 0,
                  top: 0,
                  right: 0,
                  bottom: 0,
                  objectFit: "cover",
                  color: "transparent",
                }}
                src="https://server.vlada.store/uploads/image-1771193305904-137623872.jpg"
              />
            </div>
            <div className="mt-4 flex flex-col items-center gap-2">
              <p className="text-[#1D1D1D] text-sm sm:text-base truncate w-full">
                Noor in Blue
              </p>
              <div className="flex gap-2 text-sm sm:text-base">
                <s className="text-gray-500">3620 TK</s>
                <p className="font-medium text-[#1D1D1D]">3620 TK</p>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailsPage;
