"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useRef, useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";

import "swiper/css";
import "swiper/css/navigation";

const products = [
  {
    id: 1,
    name: "luxe cotton",
    category: "two piece",
    price: 3200,
    rating: 0,
    reviews: 0,
    image:
      "https://server.vlada.store/uploads/image-1760107339717-564940287.JPG",
    discount: false,
    stock: true,
  },
  {
    id: 2,
    name: "Serapha",
    category: "two piece",
    price: 3714,
    rating: 0,
    reviews: 0,
    image:
      "https://server.vlada.store/uploads/image-1757701847760-572823426.jpg",
    discount: true,
    stock: true,
  },
  {
    id: 3,
    name: "Blushing Grace",
    category: "two piece",
    price: 2904,
    rating: 0,
    reviews: 0,
    image:
      "https://server.vlada.store/uploads/image-1760106888259-972509261.JPG",
    discount: false,
    stock: false, // out of stock
  },
  {
    id: 4,
    name: "Florira",
    category: "two piece",
    price: 3415,
    rating: 0,
    reviews: 0,
    image:
      "https://server.vlada.store/uploads/image-1760106428606-848061279.jpg",
    discount: true,
    stock: true,
  },
  {
    id: 5,
    name: "Mystic Night",
    category: "Midi Dress",
    price: 2816,
    rating: 0,
    reviews: 0,
    image:
      "https://server.vlada.store/uploads/image-1760127147455-176793900.JPG",
    discount: true,
    stock: true,
  },
  {
    id: 6,
    name: "Classic Wear",
    category: "two piece",
    price: 3200,
    rating: 0,
    reviews: 0,
    image:
      "https://server.vlada.store/uploads/image-1757701847760-572823426.jpg",
    discount: false,
    stock: true,
  },
];

const TopSellingProduct = () => {
  const swiperRef = useRef<SwiperType | null>(null);

  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

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
            <Swiper
              modules={[Navigation]}
              spaceBetween={20}
              slidesPerView={1.2}
              onSwiper={(swiper) => {
                swiperRef.current = swiper;
                setIsBeginning(swiper.isBeginning);
                setIsEnd(swiper.isEnd);
              }}
              onSlideChange={(swiper) => {
                setIsBeginning(swiper.isBeginning);
                setIsEnd(swiper.isEnd);
              }}
              breakpoints={{
                640: { slidesPerView: 2 },
                768: { slidesPerView: 3 },
                1024: { slidesPerView: 4 },
                1280: { slidesPerView: 5 },
              }}
              className="!w-full !py-4"
            >
              {products.map((product) => (
                <SwiperSlide
                  key={product.id}
                  className="!flex !justify-center !h-auto"
                >
                  <div className="w-full max-w-sm mx-auto">
                    <div className="group relative bg-white rounded-2xl shadow-sm hover:shadow-md transition-all duration-300">
                      {/* Image */}
                      <div className="relative overflow-hidden bg-gray-50">
                        <Link href={`/shop/${product.id}`}>
                          <Image
                            src={product.image}
                            alt="product"
                            width={350}
                            height={300}
                            className={`w-full h-[340px] object-cover transition-transform duration-500 ease-in-out transform group-hover:scale-110 ${
                              !product.stock && "opacity-60"
                            }`}
                          />
                        </Link>

                        {/* Out of stock */}
                        {!product.stock && (
                          <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                            <span className="bg-white text-gray-800 px-3 py-1.5 rounded-lg font-semibold text-sm">
                              Out of Stock
                            </span>
                          </div>
                        )}

                        {/* Discount */}
                        {product.discount && product.stock && (
                          <div className="absolute top-2 left-2 bg-red-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
                            -12%
                          </div>
                        )}

                        {/* Add to Cart */}
                        {product.stock && (
                          <div className="absolute inset-x-2 bottom-2 transition-all duration-300 md:translate-y-full md:opacity-0 md:group-hover:translate-y-0 md:group-hover:opacity-100 translate-y-0 opacity-100">
                            <button className="cursor-pointer w-full bg-gray-900 text-white py-2 px-3 rounded-lg font-medium flex items-center justify-center gap-2 shadow-md hover:shadow-lg">
                              Add to Cart
                            </button>
                          </div>
                        )}
                      </div>

                      {/* Content */}
                      <div className="p-4 space-y-2">
                        <div className="space-y-0.5">
                          <p className="text-xs text-gray-500 font-medium capitalize">
                            {product.category}
                          </p>

                          <p className="font-semibold text-gray-900 text-sm line-clamp-2">
                            {product.name}
                          </p>
                        </div>

                        {/* ✅ Rating BACK */}
                        <div className="flex items-center gap-1">
                          <div className="flex items-center gap-0.5">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="w-3.5 h-3.5 fill-yellow-400 text-yellow-400"
                              viewBox="0 0 24 24"
                            >
                              <path d="M12 2l2.9 6.26L22 9.27l-5 4.87L18.18 22 12 18.56 5.82 22 7 14.14 2 9.27l7.1-1.01z" />
                            </svg>

                            <span className="text-xs font-medium text-gray-700">
                              {product.rating}
                            </span>
                          </div>

                          <span className="text-xs text-gray-500">
                           ({product.reviews})
                          </span>
                        </div>

                        {/* Price */}
                        <div className="flex items-center gap-2">
                          <span className="text-base font-bold text-gray-900">
                            ৳{product.price}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>

            {/* Navigation */}
            <div className="absolute inset-y-0 left-0 right-0 flex items-center justify-between pointer-events-none z-20">
              <button
                onClick={() => swiperRef.current?.slidePrev()}
                disabled={isBeginning}
                className={`pointer-events-auto ml-2 sm:ml-4 md:ml-6 w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-full shadow-lg border flex items-center justify-center transition ${
                  isBeginning
                    ? "bg-gray-100 text-gray-400 cursor-not-allowed opacity-60"
                    : "bg-white text-gray-700 hover:scale-110"
                }`}
              >
                ‹
              </button>

              <button
                onClick={() => swiperRef.current?.slideNext()}
                disabled={isEnd}
                className={`pointer-events-auto mr-2 sm:mr-4 md:mr-6 w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-full shadow-lg border flex items-center justify-center transition ${
                  isEnd
                    ? "bg-gray-100 text-gray-400 cursor-not-allowed opacity-60"
                    : "bg-white text-gray-700 hover:scale-110"
                }`}
              >
                ›
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopSellingProduct;
