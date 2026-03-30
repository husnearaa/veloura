import Image from "next/image";
import Link from "next/link";
import React from "react";

const HeroSection = () => {
  return (
    <section className="relative w-screen h-[45vh]! md:h-[95vh]! overflow-hidden">
      <div className="swiper swiper-fade swiper-initialized swiper-horizontal swiper-watch-progress !absolute top-0 left-0 right-0 z-10 h-full swiper-backface-hidden">
        <div
          className="swiper-wrapper"
          style={{ transitionDuration: "0ms", transitionDelay: "0ms" }}
        >
          <div
            className="swiper-slide swiper-slide-next swiper-slide-prev relative h-full"
            style={{
              width: "146px",
              opacity: 1,
              transform: "translate3d(0px, 0px, 0px)",
              transitionDuration: "0ms",
            }}
            data-swiper-slide-index="1"
          >
            <div className="absolute inset-0">
              <Image
                alt="hero bg image 1"
                decoding="async"
                data-nimg="fill"
                className="w-full object-cover h-full"
                width={500}
                height={500}
                src="https://server.vlada.store/uploads/image-1771499194659-40688579.jpg"
                style={{
                  position: "absolute",
                  height: "100%",
                  width: "100%",
                  inset: "0px",
                  color: "transparent",
                }}
              />
            </div>

            <div className="absolute top-0 flex flex-col justify-center items-start z-20 h-full px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
              <span className="text-[#737373] font-inter font-normal text-center mb-6 text-sm xs:text-base sm:text-[24px] leading-6 max-w-[95%] sm:max-w-[90%] md:max-w-[80%] lg:max-w-[70%] xl:max-w-[60%] px-4 sm:px-0">
                trg
              </span>
              <h1 className="text-primary font-inter text-left mb-4 sm:mb-6 md:mb-8 text-3xl xs:text-4xl xs:leading-[30px] sm:text-5xl sm:leading-[48px] md:text-6xl md:leading-[60px] lg:text-7xl lg:leading-[72px] xl:text-[80px] xl:leading-[80px] tracking-[-2px] max-w-[90%] sm:max-w-[85%] md:max-w-[80%] lg:max-w-[75%] xl:max-w-[685px]">
                Be your own icon
              </h1>
              <Link
                href="/shop"
                className="bg-background bg-opacity-15 rounded-full border border-[#ffffff70] flex items-center justify-between backdrop-blur-sm py-2 sm:py-2.5 md:py-3 px-6 gap-2 sm:gap-3 md:gap-4 lg:gap-6 hover:bg-opacity-25 transition-all duration-300 font-inter"
              >
                <span className="text-white font-medium text-sm sm:text-base">
                  Explore
                </span>
              </Link>
            </div>

            <div className="absolute top-0 flex flex-col justify-center items-start z-20 h-full px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
              <span className="text-[#737373] font-inter font-normal text-center mb-6 text-sm xs:text-base sm:text-[24px] leading-6 max-w-[95%] sm:max-w-[90%] md:max-w-[80%] lg:max-w-[70%] xl:max-w-[60%] px-4 sm:px-0">
                trg
              </span>
              <h1 className="text-primary font-inter text-left mb-4 sm:mb-6 md:mb-8 text-3xl xs:text-4xl xs:leading-[30px] sm:text-5xl sm:leading-[48px] md:text-6xl md:leading-[60px] lg:text-7xl lg:leading-[72px] xl:text-[80px] xl:leading-[80px] tracking-[-2px] max-w-[90%] sm:max-w-[85%] md:max-w-[80%] lg:max-w-[75%] xl:max-w-[685px]">
                Be your own icon
              </h1>
              <Link
                href="/shop"
                className="bg-background bg-opacity-15 rounded-full border border-[#ffffff70] flex items-center justify-between backdrop-blur-sm py-2 sm:py-2.5 md:py-3 px-6 gap-2 sm:gap-3 md:gap-4 lg:gap-6 hover:bg-opacity-25 transition-all duration-300 font-inter"
              >
                <span className="text-white font-medium text-sm sm:text-base">
                  Explore
                </span>
              </Link>
            </div>
          </div>

          <div
            className="swiper-slide swiper-slide-visible swiper-slide-fully-visible swiper-slide-active relative h-full"
            style={{
              width: "146px",
              opacity: 1,
              transform: "translate3d(-146px, 0px, 0px)",
              transitionDuration: "0ms",
            }}
            data-swiper-slide-index="0"
          >
            <div className="absolute inset-0">
              <Image
                alt="hero bg image 1"
                decoding="async"
                data-nimg="fill"
                className="w-full object-cover h-full"
                width={500}
                height={500}
                src="https://server.vlada.store/uploads/image-1771499194659-40688579.jpg"
                style={{
                  position: "absolute",
                  height: "100%",
                  width: "100%",
                  inset: "0px",
                  color: "transparent",
                }}
              />
            </div>

            <div className="absolute top-0 flex flex-col justify-center items-start z-20 h-full px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
              <span className="text-[#737373] font-inter font-normal text-center mb-6 text-sm xs:text-base sm:text-[24px] leading-6 max-w-[95%] sm:max-w-[90%] md:max-w-[80%] lg:max-w-[70%] xl:max-w-[60%] px-4 sm:px-0">
                trg
              </span>
              <h1 className="text-primary font-inter text-left mb-4 sm:mb-6 md:mb-8 text-3xl xs:text-4xl xs:leading-[30px] sm:text-5xl sm:leading-[48px] md:text-6xl md:leading-[60px] lg:text-7xl lg:leading-[72px] xl:text-[80px] xl:leading-[80px] tracking-[-2px] max-w-[90%] sm:max-w-[85%] md:max-w-[80%] lg:max-w-[75%] xl:max-w-[685px]">
                Be your own icon
              </h1>
              <Link
                href="/shop"
                className="bg-background bg-opacity-15 rounded-full border border-[#ffffff70] flex items-center justify-between backdrop-blur-sm py-2 sm:py-2.5 md:py-3 px-6 gap-2 sm:gap-3 md:gap-4 lg:gap-6 hover:bg-opacity-25 transition-all duration-300 font-inter"
              >
                <span className="text-white font-medium text-sm sm:text-base">
                  Explore
                </span>
              </Link>
            </div>

            <div className="absolute top-0 flex flex-col justify-center items-start z-20 h-full px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
              <span className="text-[#737373] font-inter font-normal text-center mb-6 text-sm xs:text-base sm:text-[24px] leading-6 max-w-[95%] sm:max-w-[90%] md:max-w-[80%] lg:max-w-[70%] xl:max-w-[60%] px-4 sm:px-0">
                trg
              </span>
              <h1 className="text-primary font-inter text-left mb-4 sm:mb-6 md:mb-8 text-3xl xs:text-4xl xs:leading-[30px] sm:text-5xl sm:leading-[48px] md:text-6xl md:leading-[60px] lg:text-7xl lg:leading-[72px] xl:text-[80px] xl:leading-[80px] tracking-[-2px] max-w-[90%] sm:max-w-[85%] md:max-w-[80%] lg:max-w-[75%] xl:max-w-[685px]">
                Be your own icon
              </h1>
              <Link
                href="/shop"
                className="bg-background bg-opacity-15 rounded-full border border-[#ffffff70] flex items-center justify-between backdrop-blur-sm py-2 sm:py-2.5 md:py-3 px-6 gap-2 sm:gap-3 md:gap-4 lg:gap-6 hover:bg-opacity-25 transition-all duration-300 font-inter"
              >
                <span className="text-white font-medium text-sm sm:text-base">
                  Explore
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-4 sm:bottom-6 md:bottom-8 lg:bottom-12 xl:bottom-16 left-4 sm:left-6 md:left-8 lg:left-12 xl:left-44 right-4 sm:right-6 md:right-8 lg:right-12 xl:right-44 z-20 hidden sm:flex items-end justify-between">
        <div className="flex items-end gap-1 text-white font-sofiaProRegular -rotate-90 origin-bottom-left transform -translate-x-4 sm:-translate-x-6 md:-translate-x-8 mb-8 sm:mb-10 md:mb-12">
          <span className="text-xl sm:text-2xl md:text-3xl lg:text-4xl leading-none">
            01
          </span>
          <span className="flex gap-0.5 sm:gap-1 items-end text-xs sm:text-sm md:text-base leading-none">
            {" "}
            <span className="text-sm sm:text-base md:text-lg lg:text-xl">
              /
            </span>
            <span>2</span>
          </span>
        </div>

        <div className="flex items-start gap-4 sm:gap-6 md:gap-8 lg:gap-10 mb-2 sm:mb-3 md:mb-10">
            <button className="cursor-pointer p-2 rounded-full transition-all duration-300 flex items-center justify-center" aria-label="Previous slide">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="17" fill="none" viewBox="0 0 40 21" className="w-6 h-4 sm:w-8 sm:h-5 md:w-10 md:h-6 lg:w-12 lg:h-7">
                <g clip-path="url(#clip0_839_109)">
                    <path d="M0 10.16L4 14.16V11.16H40V9.16003H4V6.16003L0 10.16Z" fill="white" />
                </g>
                <defs>
                    <clipPath id="clip0_839_109">
                    <rect width="40" height="20" fill="white" transform="matrix(-1 0 0 -1 40 20.16)" />
                    </clipPath>
                </defs>
                </svg>
            </button>
            <button className="cursor-pointer p-2 rounded-full transition-all duration-300 flex items-center justify-center" aria-label="Next slide">   
             <svg xmlns="http://www.w3.org/2000/svg" width="32" height="17" fill="none" viewBox="0 0 40 21" className="w-6 h-4 sm:w-8 sm:h-5 md:w-10 md:h-6 lg:w-12 lg:h-7">
                <g clip-path="url(#clip0_839_105)">
                    <path d="M40 10.1599L36 6.15991V9.15991H0V11.1599H36V14.1599L40 10.1599Z" fill="white" />
                </g>
                <defs>
                    <clipPath id="clip0_839_105">
                    <rect width="40" height="20" fill="white" transform="translate(0 0.159912)" />
                    </clipPath>
                </defs>
                </svg>
            </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
