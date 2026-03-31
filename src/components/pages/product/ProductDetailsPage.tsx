import Image from "next/image";
import React from "react";

const ProductDetailsPage = () => {
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
          <div className="w-full lg:w-1/2 x1:w-3/5 bg-[#EEEBE5] flex items-center justify-center p-4 sm:p-8 lg:p-12 x1:p-16">
          </div>
          <div className="w-full lg:w-1/2 x1:w-2/5 flex flex-col py-4 lg:py-12 x1:py-24"></div>{" "}
        </div>
      </div>
    </div>
  );
};

export default ProductDetailsPage;
