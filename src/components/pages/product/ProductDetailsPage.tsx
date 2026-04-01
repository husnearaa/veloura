"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import { ChevronLeft, ChevronRight, Minus, Plus, X } from "lucide-react";
import SizeChartImage from "@/assets/images/size-chart.png";

import "swiper/css";
import "swiper/css/navigation";

import TwoImg1 from "@/assets/shop/two1.jpg";
import TwoImg2 from "@/assets/shop/two2.jpg";
import TwoImg3 from "@/assets/shop/two3.jpg";
import TwoImg4 from "@/assets/shop/two4.jpg";
import InstagramLogo from "@/assets/social_icons/instagram.png";
import WhatsappLogo from "@/assets/social_icons/whatsapp.png";

const ProductDetailsPage = () => {
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(1);
  const [swiperRef, setSwiperRef] = useState<SwiperType | null>(null);
  const [selectedSize, setSelectedSize] = useState("");
  const [showSizeChart, setShowSizeChart] = useState(false);

  const productImages = [
    "https://server.vlada.store/uploads/image-1760106151531-172530450.jpg",
    "https://server.vlada.store/uploads/image-1760106151212-517834549.jpg",
    "https://server.vlada.store/uploads/image-1760106151205-975599735.jpg",
    "https://server.vlada.store/uploads/image-1760106151243-979294032.jpg",
    "https://server.vlada.store/uploads/image-1760106151501-474043281.jpg",
  ];

  const relatedProducts = [
    {
      href: "/shop/serapha",
      name: "Serapha",
      oldPrice: "4220 TK",
      price: "4220 TK",
      image: TwoImg1,
    },
    {
      href: "/shop/regal",
      name: "Regal",
      oldPrice: "4220 TK",
      price: "4220 TK",
      image: TwoImg2,
    },
    {
      href: "/shop/luxe-cotton",
      name: "Luxe cotton",
      oldPrice: "3200 TK",
      price: "3200 TK",
      image: TwoImg3,
    },
    {
      href: "/shop/maroon-bloom",
      name: "Maroon Bloom",
      oldPrice: "3280 TK",
      price: "3280 TK",
      image: TwoImg4,
    },
    {
      href: "/shop/serapha-satin",
      name: "Serapha",
      oldPrice: "3280 TK",
      price: "3280 TK",
      image: TwoImg1,
    },
  ];

  const decreaseQuantity = () => {
    setQuantity((prev) => Math.max(1, prev - 1));
  };

  const increaseQuantity = () => {
    setQuantity((prev) => prev + 1);
  };

  // zooming logic ///

  const [zoomStyle, setZoomStyle] = useState({
    transformOrigin: "center center",
    transform: "scale(1)",
  });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const { left, top, width, height } =
      e.currentTarget.getBoundingClientRect();

    const x = ((e.clientX - left) / width) * 100;
    const y = ((e.clientY - top) / height) * 100;

    setZoomStyle({
      transformOrigin: `${x}% ${y}%`,
      transform: "scale(2)",
    });
  };

  const handleMouseLeave = () => {
    setZoomStyle({
      transformOrigin: "center center",
      transform: "scale(1)",
    });
  };

  return (
    <div>
      {/* header */}
      <div className="py-[60px] bg-white">
        <p className="text-center font-inter text-[12px] leading-none capitalize">
          two piece
        </p>
        <h1 className="lg:text-8xl md:text-6xl text-4xl text-center font-inter font-normal text-[#1D1D1D] leading-24 tracking-[-2.88px]">
          Whisperlight
        </h1>
      </div>

      {/* banner */}
      <div className="flex justify-center items-center">
        <Image
          alt="Whisperlight"
          loading="lazy"
          width={1000}
          height={1000}
          className="h-screen w-screen object-cover"
          style={{ color: "transparent" }}
          src={
            "https://server.vlada.store/uploads/image-1760107166536-985689.jpg"
          }
        />
      </div>

      {/* swiper title */}
      <div className="py-[110px] flex justify-center bg-[#FDF8F2]">
        <p className="max-w-[900px] text-center text-[28px] font-inter font-normal">
          Whisperlight
        </p>
      </div>

      {/* swiper */}
      <div className="pb-[110px] lg:pl-[165px] px-3 bg-[#FDF8F2]">
        <div className="relative w-full overflow-hidden">
          <button
            type="button"
            onClick={() => swiperRef?.slidePrev()}
            className="absolute left-2 top-1/2 -translate-y-1/2 z-20 h-10 w-10 rounded-full bg-white/90 shadow flex items-center justify-center"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>

          <Swiper
            modules={[Navigation]}
            onSwiper={setSwiperRef}
            spaceBetween={15}
            slidesPerView={1.2}
            breakpoints={{
              640: {
                slidesPerView: 2.2,
                spaceBetween: 15,
              },
              1024: {
                slidesPerView: 4,
                spaceBetween: 15,
              },
            }}
            className="w-full"
          >
            {productImages.map((image, index) => (
              <SwiperSlide key={index} className="!h-auto">
                <button
                  type="button"
                  onClick={() => setSelectedImage(index)}
                  className="relative w-full aspect-[3/4] overflow-hidden cursor-pointer block"
                >
                  <Image
                    alt={`Product image ${index + 1}`}
                    width={1000}
                    height={1000}
                    className="w-full h-full object-cover transition-transform duration-300"
                    src={image}
                  />
                </button>
              </SwiperSlide>
            ))}
          </Swiper>

          <button
            type="button"
            onClick={() => swiperRef?.slideNext()}
            className="absolute right-2 top-1/2 -translate-y-1/2 z-20 h-10 w-10 rounded-full bg-white/90 shadow flex items-center justify-center"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </div>

      {/* part 5 */}
      <div className="min-h-screen bg-white">
        <div className="flex flex-col lg:flex-row gap-4 lg:gap-8 px-4 lg:px-24 pb-8 lg:pb-[234px]">
          <div className="w-full lg:w-1/2 xl:w-3/5 bg-[#EEEBE5] flex items-center justify-center p-4 sm:p-8 lg:p-1 xl:p-16">
            <div
              className="relative w-full max-w-[440px] max-h-[660px] overflow-hidden cursor-zoom-in"
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
            >
              <Image
                alt="product details image"
                loading="lazy"
                width={1000}
                height={1000}
                className="w-full h-full object-contain transition-transform duration-200 ease-out"
                style={{
                  color: "transparent",
                  ...zoomStyle,
                }}
                src={productImages[selectedImage]}
              />
            </div>
          </div>

          <div className="w-full lg:w-1/2 xl:w-2/5 flex flex-col py-4 lg:py-12 xl:py-24">
            <div className="flex-grow">
              <Link
                href="/shop?categories=two-piece"
                className="text-[#1D1D1D] underline font-normal text-sm capitalize"
              >
                Two Piece
              </Link>

              <h1 className="text-[#1D1D1D] font-normal my-5 text-2xl sm:text-3xl lg:text-4xl break-words">
                Whisperlight
              </h1>

              <div className="flex gap-2 items-center text-[#1D1D1D]">
                <p className="font-medium">3520 TK</p>
                <s className="text-gray-500 text-sm">4000 TK</s>
              </div>

              <div className="my-7 text-sm text-[#1D1D1D] space-y-3 leading-6 prose ql-editor ">
                <p>
                  <span className="font-semibold">Name-</span> Whisperlight
                </p>
                <p>
                  <span className="font-semibold">Fabric-</span> Cotton Mixed
                  playwair.
                </p>
                <div className="pt-1">
                  <p>
                    Not every dress needs a statement. Some whisper instead.
                    This one plays with
                  </p>
                  <p>
                    light and movement — soft ombre tones, subtle pearl glints,
                    Hand Embroidery
                  </p>
                  <p>and intricate threadwork that reveals a closer look.</p>
                  <p>
                    It’s the kind of detail you wear like second skin. Refined,
                    feminine, unfussy. Just
                  </p>
                  <p>like Vlada.</p>
                </div>
              </div>

              <div className="my-6">
                <p className="font-medium capitalize mb-3">Select Size :</p>
                <div className="flex flex-wrap items-center gap-2 sm:gap-3">
                  {["XS", "S", "M", "L", "XL", "2XL"].map((size) => (
                    <button
                      key={size}
                      type="button"
                      onClick={() => setSelectedSize(size)}
                      className={`text-sm border min-w-[44px] h-[44px] px-3 py-2 cursor-pointer transition-colors duration-200 uppercase ${
                        selectedSize === size
                          ? "bg-black text-white border-black"
                          : "border-gray-300 hover:border-gray-400 text-black bg-white"
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
                <p className="text-red-600 min-h-[1.5rem]"></p>
              </div>

              <div className="my-6">
                <button
                  type="button"
                  onClick={() => setShowSizeChart(true)}
                  className="border border-black rounded-full px-14 py-3 text-sm font-medium hover:bg-black hover:text-white transition-colors duration-200 capitalize cursor-pointer"
                >
                  View Size Chart
                </button>
              </div>

              <div className="flex items-center justify-between my-6">
                <p className="underline">For custom size order contact us</p>
                <div className="flex gap-2 items-center">
                  <Link
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://www.instagram.com"
                  >
                    <Image
                      alt="messenger logo"
                      loading="lazy"
                      width={500}
                      height={500}
                      className="w-[36px] h-[32px]"
                      src={InstagramLogo}
                      style={{ color: "transparent" }}
                    />
                  </Link>
                  <Link target="_blank" href="https://www.whatsapp.com">
                    <Image
                      alt="whatsapp logo"
                      loading="lazy"
                      width={500}
                      height={500}
                      className="w-[36px] h-[36px]"
                      src={WhatsappLogo}
                      style={{ color: "transparent" }}
                    />
                  </Link>
                </div>
              </div>
            </div>

            <div className="mt-auto">
              <div className="border border-gray-300 mt-6 flex justify-between items-center p-4">
                <p className="font-medium">Quantity</p>

                <div className="flex items-center border border-gray-300 rounded">
                  <button
                    type="button"
                    onClick={decreaseQuantity}
                    disabled={quantity <= 1}
                    className="p-2 cursor-pointer disabled:cursor-not-allowed disabled:opacity-50 transition-colors duration-200"
                  >
                    <Minus className="h-4 w-4" />
                  </button>

                  <input
                    type="text"
                    className="w-12 h-10 text-center border-none outline-none bg-transparent"
                    value={quantity}
                    onChange={(e) => {
                      const value = e.target.value.replace(/\D/g, "");
                      setQuantity(value ? Math.max(1, Number(value)) : 1);
                    }}
                  />

                  <button
                    type="button"
                    onClick={increaseQuantity}
                    className="p-2 cursor-pointer hover:bg-gray-100 transition-colors duration-200"
                  >
                    <Plus className="h-4 w-4" />
                  </button>
                </div>
              </div>

              <div className="mt-4 flex items-center gap-6">
                <Link
                  href="/cart"
                  className="w-full inline-block text-center rounded-full md:py-4 py-3 px-4 bg-black/60 hover:bg-black/30 text-white font-medium transition-colors duration-200 cursor-pointer"
                >
                  Add to cart
                </Link>

                <Link
                  href="/checkout"
                  className="w-full text-center rounded-full md:py-4 py-3 px-4 text-black border border-black hover:bg-black hover:text-white font-medium transition-colors duration-200 cursor-pointer block"
                >
                  Buy Now
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* part 6 */}
      <div className="px-2 md:px-[60px] lg:px-[100px] pt-[110px] pb-[270px] bg-white border-t border-black/20">
        <div className="flex justify-between items-center">
          <h1 className="text-[#1D1D1D] font-normal md:text-2xl text-xl lg:text-4xl">
            You might also like
          </h1>

          <Link
            href={"/shop"}
            className="py-2 px-8 bg-black text-white rounded-full"
          >
            View All
          </Link>
        </div>

        <div className="mt-11 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 px-4 sm:px-6 lg:px-8">
          {relatedProducts.map((product) => (
            <Link
              key={product.href}
              className="flex flex-col items-center text-center"
              href={product.href}
            >
              <div className="bg-[#EEEBE5] p-4 w-full aspect-square relative">
                <Image
                  alt={product.name}
                  loading="lazy"
                  width={500}
                  height={500}
                  className="absolute inset-0 w-full h-full object-cover rounded-md"
                  src={product.image}
                />
              </div>

              <div className="mt-4 flex flex-col items-center gap-2">
                <p className="text-[#1D1D1D] text-sm sm:text-base truncate w-full">
                  {product.name}
                </p>
                <div className="flex gap-2 text-sm sm:text-base">
                  <s className="text-gray-500">{product.oldPrice}</s>
                  <p className="font-medium text-[#1D1D1D]">{product.price}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {showSizeChart && (
        <div className="fixed inset-0 z-[999] flex items-center justify-center bg-black/40 px-4">
          <div className="relative bg-white rounded-[12px] max-w-[600px] w-full p-4 md:p-10 shadow-xl">
            <button
              type="button"
              onClick={() => setShowSizeChart(false)}
              className="absolute right-4 top-4 text-black cursor-pointer"
            >
              <X className="h-6 w-6" />
            </button>

            <div className="relative w-full">
              <Image
                src={SizeChartImage}
                alt="Size Chart"
                width={1200}
                height={900}
                className="w-full h-auto object-contain rounded-md"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductDetailsPage;
