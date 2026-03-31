import Image from "next/image";
import Link from "next/link";
import React from "react";

const ShopPage = () => {
  return (
    <div className="p-[60px] bg-[#F5F5F5]">
      <div className="py-[110px] bg-[#222222] text-white px-6 md:p-[60px]">
        <h1 className="mt-[20px] text-2xl md:text-[50.242px] lg:text-[98.242px] font-inter">
          Shop what you love
        </h1>

        <div className="pt-[50px] flex flex-col md:flex-row gap-5 xl:gap-[60px] items-start">
          <div className="w-full md:hidden mb-6">
            <button className="w-full flex items-center justify-between p-4 bg-white rounded-x1 shadow-sm border border-gray-200 hover:bg-gray-50 transition-colors">
              <div className="flex items-center gap-3">
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
                  className="lucide lucide-funnel w-5 h -5 text-gray-600"
                  aria-hidden="true"
                >
                  <path d="M10 20a1 1 0 0 0 .553.89512 141 1 8 8 8 14 21v-7a2 2 0 0 1 .517-1.341L21.74 4.67A1 1 ℗ ℗ ℗ 21 3H3a1 1 0 0 0-.742 1.6717.225 7.989A2 2 0 0 1 10 14Z"></path>{" "}
                </svg>
                <span className="font-semibold text-gray-900">
                  Filters
                </span>{" "}
              </div>
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
                className="lucide lucide-chevron-down w -5 h-5 text-gray-600"
                aria-hidden="true"
              >
                <path d="m6 9 6 6 6-6"></path>
              </svg>
            </button>
          </div>

          <div className="hidden md:block space-y-6">
            <div className="relative">
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
                className="lucide lucide-search absolut e left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400"
                aria-hidden="true"
              >
                <path d="m21 21-4.34-4.34"></path>
                <circle cx="11" cy="11" r="8"></circle>
              </svg>
              <input
                type="text"
                placeholder="Search products..."
                className="w-full pl-12 pr-4 py-4 border border-gray-200 rounded-x1 focus:ring-2 focus:ring-black focus:border-transparent outline-none transition-all bg-white"
                value=""
              />
            </div>
            <div className="bg-white rounded-2x1 p-6 shadow-sm border border-gray-200">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-lg font-semibold text-gray-900">
                  Categories
                </h2>
              </div>

              <div className="space-y-2">
                <label className="flex items-center gap-3 p-3 rounded-1g hover:bg-gray-50 cursor-pointer transition-colors">
                  <div className="flex items-center gap-3">
                    <div className="relative max-w-[28px] min-w-[28px] w-full h-[20px] rounded-md border hover:cursor-pointer bg-transparent border-[#D1D5DB]"></div>
                  </div>
                  <span className="text-gray-700 font-medium flex-1">
                    one piece
                  </span>
                </label>
                <label className="flex items-center gap-3 p-3 rounded-1g hover:bg-gray-50 cursor-pointer transition-colors">
                  <div className="flex items-center gap-3">
                    <div className="relative max-w-[28px] min-w-[28px] w-full h-[28px] rounded-md border hover:cursor-pointer bg-transparent border-[#D1D5DB]"></div>
                  </div>
                  <span className="text-gray-700 font-medium flex-1">
                    two piece
                  </span>
                </label>
                <label className="flex items-center gap-3 p-3 rounded-1g hover:bg-gray-50 cursor-pointer transition-colors">
                  <div className="flex items-center gap-3">
                    <div className="relative max-w-[28px] min-w-[28px] w-full h-[20px] rounded-md border hover:cursor-pointer bg-transparent border-[#D1D5DB]"></div>
                  </div>
                  <span className="text-gray-700 font-medium flex-1">
                    three piece
                  </span>
                </label>
                <label className="flex items-center gap-3 p-3 rounded-1g hover:bg-gray-50 cursor-pointer transition-colors">
                  <div className="flex items-center gap-3">
                    <div className="relative max-w-[28px] min-w-[20px] w-full h-[20px] rounded-md border hover:cursor-pointer bg-transparent border-[#D1D5DB]"></div>
                  </div>
                  <span className="text-gray-700 font-medium flex-1">
                    kaftan
                  </span>
                </label>
                <label className="flex items-center gap-3 p-3 rounded-1g hover:bg-gray-50 cursor-pointer transition-colors">
                  <div className="flex items-center gap-3">
                    <div className="relative max-w-[28px] min-w-[28px] w-full h-[28px] rounded-md border hover:cursor-pointer bg-transparent border-[#D1D5DB]"></div>
                  </div>
                  <span className="text-gray-700 font-medium flex-1">
                    midi dress
                  </span>
                </label>
                <label className="flex items-center gap-3 p-3 rounded-1g hover:bg-gray-50 cursor-pointer transition-colors">
                  <div className="flex items-center gap-3">
                    <div className="relative max-w-[28px] min-w-[28px] w-full h-[20px] rounded-md border hover:cursor-pointer bg-transparent border-[#D1D5DB]"></div>
                  </div>
                  <span className="text-gray-700 font-medium flex-1">pant</span>
                </label>
                <label className="flex items-center gap-3 p-3 rounded-1g hover:bg-gray-50 cursor-pointer transition-colors">
                  <div className="flex items-center gap-3">
                    <div className="relative max-w-[28px] min-w-[20px] w-full h-[20px] rounded-md border hover:cursor-pointer bg-transparent border-[#D1D5DB]"></div>
                  </div>
                  <span className="text-gray-700 font-medium flex-1">
                    shirt
                  </span>
                </label>
              </div>
            </div>
          </div>

          <div className="w-full">
            <div className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {/* Product 1 */}
                <div className="group relative bg-white rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 ">
                  <div className="relative overflow-hidden bg-gray-50">
                    <Link href="/shop/vhv">
                      <Image
                        alt="product"
                        loading="lazy"
                        width="350"
                        height="300"
                        decoding="async"
                        data-nimg="1"
                        className="w-full h-[300px] object-cover hover: scale-105 overflow-hidden transition-all duration-300 cursor-pointer"
                        style={{ color: "transparent" }}
                        src="https://server.vlada.store/uploads/image-1771193305904-137623872.jpg"
                      />
                    </Link>
                    <div className="absolute inset-x-2 bottom-2 transition-all duration-300 md:translate-y-full md:opacity- translate-y-opacity-100">
                      <button className=" cursor-pointer w-full bg-gray-900 text-white py-2 px-3 rounded-lg font-medium flex items-center justify-center gap-2 transition-colors duration-200 shadow-md hover:shadow-lg">
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
                          className="lucide lucide-plus w-4 h-4"
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
                      <p className="text-xs text-gray-500 font-medium capitalize">
                        three piece
                      </p>
                      <Link
                        className="font-semibold text-gray-900 line-clamp-2 hover:text-black transition-colors text-sm"
                        href="/shop/vhy"
                      >
                        Noor in Blue
                      </Link>
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
                          <path d="M11.525 2.295a.53.53 0 0 1 .95 012.31 4.679a2.123 2.123 @ @ @ 1.595 1.1615.166.756.53.53 0 0 1 .294.9841-3.736 3.638a2.123 2.123 0 0 0-.611 1.8781.882 5.14a.53.53 0 0 1-.771.561-4.618-2.428a2.122 2.122 0 0 0-1.973 8L6.396 21.01.53.53 0 0 1-.77-561.881-5.13982.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-98615.165-.755a2.122 2.122 0 0 0 1.597-1.162"></path>{" "}
                        </svg>
                        <span className="text-xs font-medium text-gray-700">
                          0
                        </span>
                      </div>
                      <span className="text-xs text-gray-500">(0)</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-base font-bold text-gray-900">
                        3620
                      </span>
                    </div>
                  </div>
                </div>
                {/* Product 2 */}
                <div className="group relative bg-white rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 ">
                  <div className="relative overflow-hidden bg-gray-50">
                    <Link href="/shop/vhv">
                      <Image
                        alt="product"
                        loading="lazy"
                        width="350"
                        height="300"
                        decoding="async"
                        data-nimg="1"
                        className="w-full h-[300px] object-cover hover: scale-105 overflow-hidden transition-all duration-300 cursor-pointer"
                        style={{ color: "transparent" }}
                        src="https://server.vlada.store/uploads/image-1771193305904-137623872.jpg"
                      />
                    </Link>
                    <div className="absolute inset-x-2 bottom-2 transition-all duration-300 md:translate-y-full md:opacity- translate-y-opacity-100">
                      <button className=" cursor-pointer w-full bg-gray-900 text-white py-2 px-3 rounded-lg font-medium flex items-center justify-center gap-2 transition-colors duration-200 shadow-md hover:shadow-lg">
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
                          className="lucide lucide-plus w-4 h-4"
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
                      <p className="text-xs text-gray-500 font-medium capitalize">
                        three piece
                      </p>
                      <Link
                        className="font-semibold text-gray-900 line-clamp-2 hover:text-black transition-colors text-sm"
                        href="/shop/vhy"
                      >
                        Noor in Blue
                      </Link>
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
                          <path d="M11.525 2.295a.53.53 0 0 1 .95 012.31 4.679a2.123 2.123 @ @ @ 1.595 1.1615.166.756.53.53 0 0 1 .294.9841-3.736 3.638a2.123 2.123 0 0 0-.611 1.8781.882 5.14a.53.53 0 0 1-.771.561-4.618-2.428a2.122 2.122 0 0 0-1.973 8L6.396 21.01.53.53 0 0 1-.77-561.881-5.13982.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-98615.165-.755a2.122 2.122 0 0 0 1.597-1.162"></path>{" "}
                        </svg>
                        <span className="text-xs font-medium text-gray-700">
                          0
                        </span>
                      </div>
                      <span className="text-xs text-gray-500">(0)</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-base font-bold text-gray-900">
                        3620
                      </span>
                    </div>
                  </div>
                </div>
                {/* Product 3 */}
                <div className="group relative bg-white rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 ">
                  <div className="relative overflow-hidden bg-gray-50">
                    <Link href="/shop/vhv">
                      <Image
                        alt="product"
                        loading="lazy"
                        width="350"
                        height="300"
                        decoding="async"
                        data-nimg="1"
                        className="w-full h-[300px] object-cover hover: scale-105 overflow-hidden transition-all duration-300 cursor-pointer"
                        style={{ color: "transparent" }}
                        src="https://server.vlada.store/uploads/image-1771193305904-137623872.jpg"
                      />
                    </Link>
                    <div className="absolute inset-x-2 bottom-2 transition-all duration-300 md:translate-y-full md:opacity- translate-y-opacity-100">
                      <button className=" cursor-pointer w-full bg-gray-900 text-white py-2 px-3 rounded-lg font-medium flex items-center justify-center gap-2 transition-colors duration-200 shadow-md hover:shadow-lg">
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
                          className="lucide lucide-plus w-4 h-4"
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
                      <p className="text-xs text-gray-500 font-medium capitalize">
                        three piece
                      </p>
                      <Link
                        className="font-semibold text-gray-900 line-clamp-2 hover:text-black transition-colors text-sm"
                        href="/shop/vhy"
                      >
                        Noor in Blue
                      </Link>
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
                          <path d="M11.525 2.295a.53.53 0 0 1 .95 012.31 4.679a2.123 2.123 @ @ @ 1.595 1.1615.166.756.53.53 0 0 1 .294.9841-3.736 3.638a2.123 2.123 0 0 0-.611 1.8781.882 5.14a.53.53 0 0 1-.771.561-4.618-2.428a2.122 2.122 0 0 0-1.973 8L6.396 21.01.53.53 0 0 1-.77-561.881-5.13982.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-98615.165-.755a2.122 2.122 0 0 0 1.597-1.162"></path>{" "}
                        </svg>
                        <span className="text-xs font-medium text-gray-700">
                          0
                        </span>
                      </div>
                      <span className="text-xs text-gray-500">(0)</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-base font-bold text-gray-900">
                        3620
                      </span>
                    </div>
                  </div>
                </div>
                {/* Product 4 */}
                <div className="group relative bg-white rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 ">
                  <div className="relative overflow-hidden bg-gray-50">
                    <Link href="/shop/vhv">
                      <Image
                        alt="product"
                        loading="lazy"
                        width="350"
                        height="300"
                        decoding="async"
                        data-nimg="1"
                        className="w-full h-[300px] object-cover hover: scale-105 overflow-hidden transition-all duration-300 cursor-pointer"
                        style={{ color: "transparent" }}
                        src="https://server.vlada.store/uploads/image-1771193305904-137623872.jpg"
                      />
                    </Link>
                    <div className="absolute inset-x-2 bottom-2 transition-all duration-300 md:translate-y-full md:opacity- translate-y-opacity-100">
                      <button className=" cursor-pointer w-full bg-gray-900 text-white py-2 px-3 rounded-lg font-medium flex items-center justify-center gap-2 transition-colors duration-200 shadow-md hover:shadow-lg">
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
                          className="lucide lucide-plus w-4 h-4"
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
                      <p className="text-xs text-gray-500 font-medium capitalize">
                        three piece
                      </p>
                      <Link
                        className="font-semibold text-gray-900 line-clamp-2 hover:text-black transition-colors text-sm"
                        href="/shop/vhy"
                      >
                        Noor in Blue
                      </Link>
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
                          <path d="M11.525 2.295a.53.53 0 0 1 .95 012.31 4.679a2.123 2.123 @ @ @ 1.595 1.1615.166.756.53.53 0 0 1 .294.9841-3.736 3.638a2.123 2.123 0 0 0-.611 1.8781.882 5.14a.53.53 0 0 1-.771.561-4.618-2.428a2.122 2.122 0 0 0-1.973 8L6.396 21.01.53.53 0 0 1-.77-561.881-5.13982.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-98615.165-.755a2.122 2.122 0 0 0 1.597-1.162"></path>{" "}
                        </svg>
                        <span className="text-xs font-medium text-gray-700">
                          0
                        </span>
                      </div>
                      <span className="text-xs text-gray-500">(0)</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-base font-bold text-gray-900">
                        3620
                      </span>
                    </div>
                  </div>
                </div>
                {/* Product 4 */}
                <div className="group relative bg-white rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 ">
                  <div className="relative overflow-hidden bg-gray-50">
                    <Link href="/shop/vhv">
                      <Image
                        alt="product"
                        loading="lazy"
                        width="350"
                        height="300"
                        decoding="async"
                        data-nimg="1"
                        className="w-full h-[300px] object-cover hover: scale-105 overflow-hidden transition-all duration-300 cursor-pointer"
                        style={{ color: "transparent" }}
                        src="https://server.vlada.store/uploads/image-1771193305904-137623872.jpg"
                      />
                    </Link>
                    <div className="absolute inset-x-2 bottom-2 transition-all duration-300 md:translate-y-full md:opacity- translate-y-opacity-100">
                      <button className=" cursor-pointer w-full bg-gray-900 text-white py-2 px-3 rounded-lg font-medium flex items-center justify-center gap-2 transition-colors duration-200 shadow-md hover:shadow-lg">
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
                          className="lucide lucide-plus w-4 h-4"
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
                      <p className="text-xs text-gray-500 font-medium capitalize">
                        three piece
                      </p>
                      <Link
                        className="font-semibold text-gray-900 line-clamp-2 hover:text-black transition-colors text-sm"
                        href="/shop/vhy"
                      >
                        Noor in Blue
                      </Link>
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
                          <path d="M11.525 2.295a.53.53 0 0 1 .95 012.31 4.679a2.123 2.123 @ @ @ 1.595 1.1615.166.756.53.53 0 0 1 .294.9841-3.736 3.638a2.123 2.123 0 0 0-.611 1.8781.882 5.14a.53.53 0 0 1-.771.561-4.618-2.428a2.122 2.122 0 0 0-1.973 8L6.396 21.01.53.53 0 0 1-.77-561.881-5.13982.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-98615.165-.755a2.122 2.122 0 0 0 1.597-1.162"></path>{" "}
                        </svg>
                        <span className="text-xs font-medium text-gray-700">
                          0
                        </span>
                      </div>
                      <span className="text-xs text-gray-500">(0)</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-base font-bold text-gray-900">
                        3620
                      </span>
                    </div>
                  </div>
                </div>
                {/* Product 5 */}
                <div className="group relative bg-white rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 ">
                  <div className="relative overflow-hidden bg-gray-50">
                    <Link href="/shop/vhv">
                      <Image
                        alt="product"
                        loading="lazy"
                        width="350"
                        height="300"
                        decoding="async"
                        data-nimg="1"
                        className="w-full h-[300px] object-cover hover: scale-105 overflow-hidden transition-all duration-300 cursor-pointer"
                        style={{ color: "transparent" }}
                        src="https://server.vlada.store/uploads/image-1771193305904-137623872.jpg"
                      />
                    </Link>
                    <div className="absolute inset-x-2 bottom-2 transition-all duration-300 md:translate-y-full md:opacity- translate-y-opacity-100">
                      <button className=" cursor-pointer w-full bg-gray-900 text-white py-2 px-3 rounded-lg font-medium flex items-center justify-center gap-2 transition-colors duration-200 shadow-md hover:shadow-lg">
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
                          className="lucide lucide-plus w-4 h-4"
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
                      <p className="text-xs text-gray-500 font-medium capitalize">
                        three piece
                      </p>
                      <Link
                        className="font-semibold text-gray-900 line-clamp-2 hover:text-black transition-colors text-sm"
                        href="/shop/vhy"
                      >
                        Noor in Blue
                      </Link>
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
                          <path d="M11.525 2.295a.53.53 0 0 1 .95 012.31 4.679a2.123 2.123 @ @ @ 1.595 1.1615.166.756.53.53 0 0 1 .294.9841-3.736 3.638a2.123 2.123 0 0 0-.611 1.8781.882 5.14a.53.53 0 0 1-.771.561-4.618-2.428a2.122 2.122 0 0 0-1.973 8L6.396 21.01.53.53 0 0 1-.77-561.881-5.13982.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-98615.165-.755a2.122 2.122 0 0 0 1.597-1.162"></path>{" "}
                        </svg>
                        <span className="text-xs font-medium text-gray-700">
                          0
                        </span>
                      </div>
                      <span className="text-xs text-gray-500">(0)</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-base font-bold text-gray-900">
                        3620
                      </span>
                    </div>
                  </div>
                </div>
                {/* Product 6 */}
                <div className="group relative bg-white rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 ">
                  <div className="relative overflow-hidden bg-gray-50">
                    <Link href="/shop/vhv">
                      <Image
                        alt="product"
                        loading="lazy"
                        width="350"
                        height="300"
                        decoding="async"
                        data-nimg="1"
                        className="w-full h-[300px] object-cover hover: scale-105 overflow-hidden transition-all duration-300 cursor-pointer"
                        style={{ color: "transparent" }}
                        src="https://server.vlada.store/uploads/image-1771193305904-137623872.jpg"
                      />
                    </Link>
                    <div className="absolute inset-x-2 bottom-2 transition-all duration-300 md:translate-y-full md:opacity- translate-y-opacity-100">
                      <button className=" cursor-pointer w-full bg-gray-900 text-white py-2 px-3 rounded-lg font-medium flex items-center justify-center gap-2 transition-colors duration-200 shadow-md hover:shadow-lg">
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
                          className="lucide lucide-plus w-4 h-4"
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
                      <p className="text-xs text-gray-500 font-medium capitalize">
                        three piece
                      </p>
                      <Link
                        className="font-semibold text-gray-900 line-clamp-2 hover:text-black transition-colors text-sm"
                        href="/shop/vhy"
                      >
                        Noor in Blue
                      </Link>
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
                          <path d="M11.525 2.295a.53.53 0 0 1 .95 012.31 4.679a2.123 2.123 @ @ @ 1.595 1.1615.166.756.53.53 0 0 1 .294.9841-3.736 3.638a2.123 2.123 0 0 0-.611 1.8781.882 5.14a.53.53 0 0 1-.771.561-4.618-2.428a2.122 2.122 0 0 0-1.973 8L6.396 21.01.53.53 0 0 1-.77-561.881-5.13982.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-98615.165-.755a2.122 2.122 0 0 0 1.597-1.162"></path>{" "}
                        </svg>
                        <span className="text-xs font-medium text-gray-700">
                          0
                        </span>
                      </div>
                      <span className="text-xs text-gray-500">(0)</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-base font-bold text-gray-900">
                        3620
                      </span>
                    </div>
                  </div>
                </div>
                {/* Product 7 */}
                <div className="group relative bg-white rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 ">
                  <div className="relative overflow-hidden bg-gray-50">
                    <Link href="/shop/vhv">
                      <Image
                        alt="product"
                        loading="lazy"
                        width="350"
                        height="300"
                        decoding="async"
                        data-nimg="1"
                        className="w-full h-[300px] object-cover hover: scale-105 overflow-hidden transition-all duration-300 cursor-pointer"
                        style={{ color: "transparent" }}
                        src="https://server.vlada.store/uploads/image-1771193305904-137623872.jpg"
                      />
                    </Link>
                    <div className="absolute inset-x-2 bottom-2 transition-all duration-300 md:translate-y-full md:opacity- translate-y-opacity-100">
                      <button className=" cursor-pointer w-full bg-gray-900 text-white py-2 px-3 rounded-lg font-medium flex items-center justify-center gap-2 transition-colors duration-200 shadow-md hover:shadow-lg">
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
                          className="lucide lucide-plus w-4 h-4"
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
                      <p className="text-xs text-gray-500 font-medium capitalize">
                        three piece
                      </p>
                      <Link
                        className="font-semibold text-gray-900 line-clamp-2 hover:text-black transition-colors text-sm"
                        href="/shop/vhy"
                      >
                        Noor in Blue
                      </Link>
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
                          <path d="M11.525 2.295a.53.53 0 0 1 .95 012.31 4.679a2.123 2.123 @ @ @ 1.595 1.1615.166.756.53.53 0 0 1 .294.9841-3.736 3.638a2.123 2.123 0 0 0-.611 1.8781.882 5.14a.53.53 0 0 1-.771.561-4.618-2.428a2.122 2.122 0 0 0-1.973 8L6.396 21.01.53.53 0 0 1-.77-561.881-5.13982.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-98615.165-.755a2.122 2.122 0 0 0 1.597-1.162"></path>{" "}
                        </svg>
                        <span className="text-xs font-medium text-gray-700">
                          0
                        </span>
                      </div>
                      <span className="text-xs text-gray-500">(0)</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-base font-bold text-gray-900">
                        3620
                      </span>
                    </div>
                  </div>
                </div>
                {/* Product 8 */}
                <div className="group relative bg-white rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 ">
                  <div className="relative overflow-hidden bg-gray-50">
                    <Link href="/shop/vhv">
                      <Image
                        alt="product"
                        loading="lazy"
                        width="350"
                        height="300"
                        decoding="async"
                        data-nimg="1"
                        className="w-full h-[300px] object-cover hover: scale-105 overflow-hidden transition-all duration-300 cursor-pointer"
                        style={{ color: "transparent" }}
                        src="https://server.vlada.store/uploads/image-1771193305904-137623872.jpg"
                      />
                    </Link>
                    <div className="absolute inset-x-2 bottom-2 transition-all duration-300 md:translate-y-full md:opacity- translate-y-opacity-100">
                      <button className=" cursor-pointer w-full bg-gray-900 text-white py-2 px-3 rounded-lg font-medium flex items-center justify-center gap-2 transition-colors duration-200 shadow-md hover:shadow-lg">
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
                          className="lucide lucide-plus w-4 h-4"
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
                      <p className="text-xs text-gray-500 font-medium capitalize">
                        three piece
                      </p>
                      <Link
                        className="font-semibold text-gray-900 line-clamp-2 hover:text-black transition-colors text-sm"
                        href="/shop/vhy"
                      >
                        Noor in Blue
                      </Link>
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
                          <path d="M11.525 2.295a.53.53 0 0 1 .95 012.31 4.679a2.123 2.123 @ @ @ 1.595 1.1615.166.756.53.53 0 0 1 .294.9841-3.736 3.638a2.123 2.123 0 0 0-.611 1.8781.882 5.14a.53.53 0 0 1-.771.561-4.618-2.428a2.122 2.122 0 0 0-1.973 8L6.396 21.01.53.53 0 0 1-.77-561.881-5.13982.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-98615.165-.755a2.122 2.122 0 0 0 1.597-1.162"></path>{" "}
                        </svg>
                        <span className="text-xs font-medium text-gray-700">
                          0
                        </span>
                      </div>
                      <span className="text-xs text-gray-500">(0)</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-base font-bold text-gray-900">
                        3620
                      </span>
                    </div>
                  </div>
                </div>
                {/* Product 9 */}
                <div className="group relative bg-white rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 ">
                  <div className="relative overflow-hidden bg-gray-50">
                    <Link href="/shop/vhv">
                      <Image
                        alt="product"
                        loading="lazy"
                        width="350"
                        height="300"
                        decoding="async"
                        data-nimg="1"
                        className="w-full h-[300px] object-cover hover: scale-105 overflow-hidden transition-all duration-300 cursor-pointer"
                        style={{ color: "transparent" }}
                        src="https://server.vlada.store/uploads/image-1771193305904-137623872.jpg"
                      />
                    </Link>
                    <div className="absolute inset-x-2 bottom-2 transition-all duration-300 md:translate-y-full md:opacity- translate-y-opacity-100">
                      <button className=" cursor-pointer w-full bg-gray-900 text-white py-2 px-3 rounded-lg font-medium flex items-center justify-center gap-2 transition-colors duration-200 shadow-md hover:shadow-lg">
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
                          className="lucide lucide-plus w-4 h-4"
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
                      <p className="text-xs text-gray-500 font-medium capitalize">
                        three piece
                      </p>
                      <Link
                        className="font-semibold text-gray-900 line-clamp-2 hover:text-black transition-colors text-sm"
                        href="/shop/vhy"
                      >
                        Noor in Blue
                      </Link>
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
                          <path d="M11.525 2.295a.53.53 0 0 1 .95 012.31 4.679a2.123 2.123 @ @ @ 1.595 1.1615.166.756.53.53 0 0 1 .294.9841-3.736 3.638a2.123 2.123 0 0 0-.611 1.8781.882 5.14a.53.53 0 0 1-.771.561-4.618-2.428a2.122 2.122 0 0 0-1.973 8L6.396 21.01.53.53 0 0 1-.77-561.881-5.13982.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-98615.165-.755a2.122 2.122 0 0 0 1.597-1.162"></path>{" "}
                        </svg>
                        <span className="text-xs font-medium text-gray-700">
                          0
                        </span>
                      </div>
                      <span className="text-xs text-gray-500">(0)</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-base font-bold text-gray-900">
                        3620
                      </span>
                    </div>
                  </div>
                </div>
                {/* Product 10 */}
                <div className="group relative bg-white rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 ">
                  <div className="relative overflow-hidden bg-gray-50">
                    <Link href="/shop/vhv">
                      <Image
                        alt="product"
                        loading="lazy"
                        width="350"
                        height="300"
                        decoding="async"
                        data-nimg="1"
                        className="w-full h-[300px] object-cover hover: scale-105 overflow-hidden transition-all duration-300 cursor-pointer"
                        style={{ color: "transparent" }}
                        src="https://server.vlada.store/uploads/image-1771193305904-137623872.jpg"
                      />
                    </Link>
                    <div className="absolute inset-x-2 bottom-2 transition-all duration-300 md:translate-y-full md:opacity- translate-y-opacity-100">
                      <button className=" cursor-pointer w-full bg-gray-900 text-white py-2 px-3 rounded-lg font-medium flex items-center justify-center gap-2 transition-colors duration-200 shadow-md hover:shadow-lg">
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
                          className="lucide lucide-plus w-4 h-4"
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
                      <p className="text-xs text-gray-500 font-medium capitalize">
                        three piece
                      </p>
                      <Link
                        className="font-semibold text-gray-900 line-clamp-2 hover:text-black transition-colors text-sm"
                        href="/shop/vhy"
                      >
                        Noor in Blue
                      </Link>
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
                          <path d="M11.525 2.295a.53.53 0 0 1 .95 012.31 4.679a2.123 2.123 @ @ @ 1.595 1.1615.166.756.53.53 0 0 1 .294.9841-3.736 3.638a2.123 2.123 0 0 0-.611 1.8781.882 5.14a.53.53 0 0 1-.771.561-4.618-2.428a2.122 2.122 0 0 0-1.973 8L6.396 21.01.53.53 0 0 1-.77-561.881-5.13982.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-98615.165-.755a2.122 2.122 0 0 0 1.597-1.162"></path>{" "}
                        </svg>
                        <span className="text-xs font-medium text-gray-700">
                          0
                        </span>
                      </div>
                      <span className="text-xs text-gray-500">(0)</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-base font-bold text-gray-900">
                        3620
                      </span>
                    </div>
                  </div>
                </div>
                {/* Product  11*/}
                <div className="group relative bg-white rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 ">
                  <div className="relative overflow-hidden bg-gray-50">
                    <Link href="/shop/vhv">
                      <Image
                        alt="product"
                        loading="lazy"
                        width="350"
                        height="300"
                        decoding="async"
                        data-nimg="1"
                        className="w-full h-[300px] object-cover hover: scale-105 overflow-hidden transition-all duration-300 cursor-pointer"
                        style={{ color: "transparent" }}
                        src="https://server.vlada.store/uploads/image-1771193305904-137623872.jpg"
                      />
                    </Link>
                    <div className="absolute inset-x-2 bottom-2 transition-all duration-300 md:translate-y-full md:opacity- translate-y-opacity-100">
                      <button className=" cursor-pointer w-full bg-gray-900 text-white py-2 px-3 rounded-lg font-medium flex items-center justify-center gap-2 transition-colors duration-200 shadow-md hover:shadow-lg">
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
                          className="lucide lucide-plus w-4 h-4"
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
                      <p className="text-xs text-gray-500 font-medium capitalize">
                        three piece
                      </p>
                      <Link
                        className="font-semibold text-gray-900 line-clamp-2 hover:text-black transition-colors text-sm"
                        href="/shop/vhy"
                      >
                        Noor in Blue
                      </Link>
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
                          <path d="M11.525 2.295a.53.53 0 0 1 .95 012.31 4.679a2.123 2.123 @ @ @ 1.595 1.1615.166.756.53.53 0 0 1 .294.9841-3.736 3.638a2.123 2.123 0 0 0-.611 1.8781.882 5.14a.53.53 0 0 1-.771.561-4.618-2.428a2.122 2.122 0 0 0-1.973 8L6.396 21.01.53.53 0 0 1-.77-561.881-5.13982.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-98615.165-.755a2.122 2.122 0 0 0 1.597-1.162"></path>{" "}
                        </svg>
                        <span className="text-xs font-medium text-gray-700">
                          0
                        </span>
                      </div>
                      <span className="text-xs text-gray-500">(0)</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-base font-bold text-gray-900">
                        3620
                      </span>
                    </div>
                  </div>
                </div>
                {/* Product 12 */}
                <div className="group relative bg-white rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 ">
                  <div className="relative overflow-hidden bg-gray-50">
                    <Link href="/shop/vhv">
                      <Image
                        alt="product"
                        loading="lazy"
                        width="350"
                        height="300"
                        decoding="async"
                        data-nimg="1"
                        className="w-full h-[300px] object-cover hover: scale-105 overflow-hidden transition-all duration-300 cursor-pointer"
                        style={{ color: "transparent" }}
                        src="https://server.vlada.store/uploads/image-1771193305904-137623872.jpg"
                      />
                    </Link>
                    <div className="absolute inset-x-2 bottom-2 transition-all duration-300 md:translate-y-full md:opacity- translate-y-opacity-100">
                      <button className=" cursor-pointer w-full bg-gray-900 text-white py-2 px-3 rounded-lg font-medium flex items-center justify-center gap-2 transition-colors duration-200 shadow-md hover:shadow-lg">
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
                          className="lucide lucide-plus w-4 h-4"
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
                      <p className="text-xs text-gray-500 font-medium capitalize">
                        three piece
                      </p>
                      <Link
                        className="font-semibold text-gray-900 line-clamp-2 hover:text-black transition-colors text-sm"
                        href="/shop/vhy"
                      >
                        Noor in Blue
                      </Link>
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
                          <path d="M11.525 2.295a.53.53 0 0 1 .95 012.31 4.679a2.123 2.123 @ @ @ 1.595 1.1615.166.756.53.53 0 0 1 .294.9841-3.736 3.638a2.123 2.123 0 0 0-.611 1.8781.882 5.14a.53.53 0 0 1-.771.561-4.618-2.428a2.122 2.122 0 0 0-1.973 8L6.396 21.01.53.53 0 0 1-.77-561.881-5.13982.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-98615.165-.755a2.122 2.122 0 0 0 1.597-1.162"></path>{" "}
                        </svg>
                        <span className="text-xs font-medium text-gray-700">
                          0
                        </span>
                      </div>
                      <span className="text-xs text-gray-500">(0)</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-base font-bold text-gray-900">
                        3620
                      </span>
                    </div>
                  </div>
                </div>
                {/* Product 13 */}
                <div className="group relative bg-white rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 ">
                  <div className="relative overflow-hidden bg-gray-50">
                    <Link href="/shop/vhv">
                      <Image
                        alt="product"
                        loading="lazy"
                        width="350"
                        height="300"
                        decoding="async"
                        data-nimg="1"
                        className="w-full h-[300px] object-cover hover: scale-105 overflow-hidden transition-all duration-300 cursor-pointer"
                        style={{ color: "transparent" }}
                        src="https://server.vlada.store/uploads/image-1771193305904-137623872.jpg"
                      />
                    </Link>
                    <div className="absolute inset-x-2 bottom-2 transition-all duration-300 md:translate-y-full md:opacity- translate-y-opacity-100">
                      <button className=" cursor-pointer w-full bg-gray-900 text-white py-2 px-3 rounded-lg font-medium flex items-center justify-center gap-2 transition-colors duration-200 shadow-md hover:shadow-lg">
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
                          className="lucide lucide-plus w-4 h-4"
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
                      <p className="text-xs text-gray-500 font-medium capitalize">
                        three piece
                      </p>
                      <Link
                        className="font-semibold text-gray-900 line-clamp-2 hover:text-black transition-colors text-sm"
                        href="/shop/vhy"
                      >
                        Noor in Blue
                      </Link>
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
                          <path d="M11.525 2.295a.53.53 0 0 1 .95 012.31 4.679a2.123 2.123 @ @ @ 1.595 1.1615.166.756.53.53 0 0 1 .294.9841-3.736 3.638a2.123 2.123 0 0 0-.611 1.8781.882 5.14a.53.53 0 0 1-.771.561-4.618-2.428a2.122 2.122 0 0 0-1.973 8L6.396 21.01.53.53 0 0 1-.77-561.881-5.13982.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-98615.165-.755a2.122 2.122 0 0 0 1.597-1.162"></path>{" "}
                        </svg>
                        <span className="text-xs font-medium text-gray-700">
                          0
                        </span>
                      </div>
                      <span className="text-xs text-gray-500">(0)</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-base font-bold text-gray-900">
                        3620
                      </span>
                    </div>
                  </div>
                </div>
                {/* Product 14 */}
                <div className="group relative bg-white rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 ">
                  <div className="relative overflow-hidden bg-gray-50">
                    <Link href="/shop/vhv">
                      <Image
                        alt="product"
                        loading="lazy"
                        width="350"
                        height="300"
                        decoding="async"
                        data-nimg="1"
                        className="w-full h-[300px] object-cover hover: scale-105 overflow-hidden transition-all duration-300 cursor-pointer"
                        style={{ color: "transparent" }}
                        src="https://server.vlada.store/uploads/image-1771193305904-137623872.jpg"
                      />
                    </Link>
                    <div className="absolute inset-x-2 bottom-2 transition-all duration-300 md:translate-y-full md:opacity- translate-y-opacity-100">
                      <button className=" cursor-pointer w-full bg-gray-900 text-white py-2 px-3 rounded-lg font-medium flex items-center justify-center gap-2 transition-colors duration-200 shadow-md hover:shadow-lg">
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
                          className="lucide lucide-plus w-4 h-4"
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
                      <p className="text-xs text-gray-500 font-medium capitalize">
                        three piece
                      </p>
                      <Link
                        className="font-semibold text-gray-900 line-clamp-2 hover:text-black transition-colors text-sm"
                        href="/shop/vhy"
                      >
                        Noor in Blue
                      </Link>
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
                          <path d="M11.525 2.295a.53.53 0 0 1 .95 012.31 4.679a2.123 2.123 @ @ @ 1.595 1.1615.166.756.53.53 0 0 1 .294.9841-3.736 3.638a2.123 2.123 0 0 0-.611 1.8781.882 5.14a.53.53 0 0 1-.771.561-4.618-2.428a2.122 2.122 0 0 0-1.973 8L6.396 21.01.53.53 0 0 1-.77-561.881-5.13982.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-98615.165-.755a2.122 2.122 0 0 0 1.597-1.162"></path>{" "}
                        </svg>
                        <span className="text-xs font-medium text-gray-700">
                          0
                        </span>
                      </div>
                      <span className="text-xs text-gray-500">(0)</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-base font-bold text-gray-900">
                        3620
                      </span>
                    </div>
                  </div>
                </div>
                {/* Product 15 */}
                <div className="group relative bg-white rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 ">
                  <div className="relative overflow-hidden bg-gray-50">
                    <Link href="/shop/vhv">
                      <Image
                        alt="product"
                        loading="lazy"
                        width="350"
                        height="300"
                        decoding="async"
                        data-nimg="1"
                        className="w-full h-[300px] object-cover hover: scale-105 overflow-hidden transition-all duration-300 cursor-pointer"
                        style={{ color: "transparent" }}
                        src="https://server.vlada.store/uploads/image-1771193305904-137623872.jpg"
                      />
                    </Link>
                    <div className="absolute inset-x-2 bottom-2 transition-all duration-300 md:translate-y-full md:opacity- translate-y-opacity-100">
                      <button className=" cursor-pointer w-full bg-gray-900 text-white py-2 px-3 rounded-lg font-medium flex items-center justify-center gap-2 transition-colors duration-200 shadow-md hover:shadow-lg">
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
                          className="lucide lucide-plus w-4 h-4"
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
                      <p className="text-xs text-gray-500 font-medium capitalize">
                        three piece
                      </p>
                      <Link
                        className="font-semibold text-gray-900 line-clamp-2 hover:text-black transition-colors text-sm"
                        href="/shop/vhy"
                      >
                        Noor in Blue
                      </Link>
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
                          <path d="M11.525 2.295a.53.53 0 0 1 .95 012.31 4.679a2.123 2.123 @ @ @ 1.595 1.1615.166.756.53.53 0 0 1 .294.9841-3.736 3.638a2.123 2.123 0 0 0-.611 1.8781.882 5.14a.53.53 0 0 1-.771.561-4.618-2.428a2.122 2.122 0 0 0-1.973 8L6.396 21.01.53.53 0 0 1-.77-561.881-5.13982.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-98615.165-.755a2.122 2.122 0 0 0 1.597-1.162"></path>{" "}
                        </svg>
                        <span className="text-xs font-medium text-gray-700">
                          0
                        </span>
                      </div>
                      <span className="text-xs text-gray-500">(0)</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-base font-bold text-gray-900">
                        3620
                      </span>
                    </div>
                  </div>
                </div>
                {/* Product 16 */}
                <div className="group relative bg-white rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 ">
                  <div className="relative overflow-hidden bg-gray-50">
                    <Link href="/shop/vhv">
                      <Image
                        alt="product"
                        loading="lazy"
                        width="350"
                        height="300"
                        decoding="async"
                        data-nimg="1"
                        className="w-full h-[300px] object-cover hover: scale-105 overflow-hidden transition-all duration-300 cursor-pointer"
                        style={{ color: "transparent" }}
                        src="https://server.vlada.store/uploads/image-1771193305904-137623872.jpg"
                      />
                    </Link>
                    <div className="absolute inset-x-2 bottom-2 transition-all duration-300 md:translate-y-full md:opacity- translate-y-opacity-100">
                      <button className=" cursor-pointer w-full bg-gray-900 text-white py-2 px-3 rounded-lg font-medium flex items-center justify-center gap-2 transition-colors duration-200 shadow-md hover:shadow-lg">
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
                          className="lucide lucide-plus w-4 h-4"
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
                      <p className="text-xs text-gray-500 font-medium capitalize">
                        three piece
                      </p>
                      <Link
                        className="font-semibold text-gray-900 line-clamp-2 hover:text-black transition-colors text-sm"
                        href="/shop/vhy"
                      >
                        Noor in Blue
                      </Link>
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
                          <path d="M11.525 2.295a.53.53 0 0 1 .95 012.31 4.679a2.123 2.123 @ @ @ 1.595 1.1615.166.756.53.53 0 0 1 .294.9841-3.736 3.638a2.123 2.123 0 0 0-.611 1.8781.882 5.14a.53.53 0 0 1-.771.561-4.618-2.428a2.122 2.122 0 0 0-1.973 8L6.396 21.01.53.53 0 0 1-.77-561.881-5.13982.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-98615.165-.755a2.122 2.122 0 0 0 1.597-1.162"></path>{" "}
                        </svg>
                        <span className="text-xs font-medium text-gray-700">
                          0
                        </span>
                      </div>
                      <span className="text-xs text-gray-500">(0)</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-base font-bold text-gray-900">
                        3620
                      </span>
                    </div>
                  </div>
                </div>\
                {/* Product 17 */}
                <div className="group relative bg-white rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 ">
                  <div className="relative overflow-hidden bg-gray-50">
                    <Link href="/shop/vhv">
                      <Image
                        alt="product"
                        loading="lazy"
                        width="350"
                        height="300"
                        decoding="async"
                        data-nimg="1"
                        className="w-full h-[300px] object-cover hover: scale-105 overflow-hidden transition-all duration-300 cursor-pointer"
                        style={{ color: "transparent" }}
                        src="https://server.vlada.store/uploads/image-1771193305904-137623872.jpg"
                      />
                    </Link>
                    <div className="absolute inset-x-2 bottom-2 transition-all duration-300 md:translate-y-full md:opacity- translate-y-opacity-100">
                      <button className=" cursor-pointer w-full bg-gray-900 text-white py-2 px-3 rounded-lg font-medium flex items-center justify-center gap-2 transition-colors duration-200 shadow-md hover:shadow-lg">
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
                          className="lucide lucide-plus w-4 h-4"
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
                      <p className="text-xs text-gray-500 font-medium capitalize">
                        three piece
                      </p>
                      <Link
                        className="font-semibold text-gray-900 line-clamp-2 hover:text-black transition-colors text-sm"
                        href="/shop/vhy"
                      >
                        Noor in Blue
                      </Link>
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
                          <path d="M11.525 2.295a.53.53 0 0 1 .95 012.31 4.679a2.123 2.123 @ @ @ 1.595 1.1615.166.756.53.53 0 0 1 .294.9841-3.736 3.638a2.123 2.123 0 0 0-.611 1.8781.882 5.14a.53.53 0 0 1-.771.561-4.618-2.428a2.122 2.122 0 0 0-1.973 8L6.396 21.01.53.53 0 0 1-.77-561.881-5.13982.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-98615.165-.755a2.122 2.122 0 0 0 1.597-1.162"></path>{" "}
                        </svg>
                        <span className="text-xs font-medium text-gray-700">
                          0
                        </span>
                      </div>
                      <span className="text-xs text-gray-500">(0)</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-base font-bold text-gray-900">
                        3620
                      </span>
                    </div>
                  </div>
                </div>
                {/* Product 18 */}
                <div className="group relative bg-white rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 ">
                  <div className="relative overflow-hidden bg-gray-50">
                    <Link href="/shop/vhv">
                      <Image
                        alt="product"
                        loading="lazy"
                        width="350"
                        height="300"
                        decoding="async"
                        data-nimg="1"
                        className="w-full h-[300px] object-cover hover: scale-105 overflow-hidden transition-all duration-300 cursor-pointer"
                        style={{ color: "transparent" }}
                        src="https://server.vlada.store/uploads/image-1771193305904-137623872.jpg"
                      />
                    </Link>
                    <div className="absolute inset-x-2 bottom-2 transition-all duration-300 md:translate-y-full md:opacity- translate-y-opacity-100">
                      <button className=" cursor-pointer w-full bg-gray-900 text-white py-2 px-3 rounded-lg font-medium flex items-center justify-center gap-2 transition-colors duration-200 shadow-md hover:shadow-lg">
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
                          className="lucide lucide-plus w-4 h-4"
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
                      <p className="text-xs text-gray-500 font-medium capitalize">
                        three piece
                      </p>
                      <Link
                        className="font-semibold text-gray-900 line-clamp-2 hover:text-black transition-colors text-sm"
                        href="/shop/vhy"
                      >
                        Noor in Blue
                      </Link>
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
                          <path d="M11.525 2.295a.53.53 0 0 1 .95 012.31 4.679a2.123 2.123 @ @ @ 1.595 1.1615.166.756.53.53 0 0 1 .294.9841-3.736 3.638a2.123 2.123 0 0 0-.611 1.8781.882 5.14a.53.53 0 0 1-.771.561-4.618-2.428a2.122 2.122 0 0 0-1.973 8L6.396 21.01.53.53 0 0 1-.77-561.881-5.13982.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-98615.165-.755a2.122 2.122 0 0 0 1.597-1.162"></path>{" "}
                        </svg>
                        <span className="text-xs font-medium text-gray-700">
                          0
                        </span>
                      </div>
                      <span className="text-xs text-gray-500">(0)</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-base font-bold text-gray-900">
                        3620
                      </span>
                    </div>
                  </div>
                </div>
                {/* Product 19 */}
                <div className="group relative bg-white rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 ">
                  <div className="relative overflow-hidden bg-gray-50">
                    <Link href="/shop/vhv">
                      <Image
                        alt="product"
                        loading="lazy"
                        width="350"
                        height="300"
                        decoding="async"
                        data-nimg="1"
                        className="w-full h-[300px] object-cover hover: scale-105 overflow-hidden transition-all duration-300 cursor-pointer"
                        style={{ color: "transparent" }}
                        src="https://server.vlada.store/uploads/image-1771193305904-137623872.jpg"
                      />
                    </Link>
                    <div className="absolute inset-x-2 bottom-2 transition-all duration-300 md:translate-y-full md:opacity- translate-y-opacity-100">
                      <button className=" cursor-pointer w-full bg-gray-900 text-white py-2 px-3 rounded-lg font-medium flex items-center justify-center gap-2 transition-colors duration-200 shadow-md hover:shadow-lg">
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
                          className="lucide lucide-plus w-4 h-4"
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
                      <p className="text-xs text-gray-500 font-medium capitalize">
                        three piece
                      </p>
                      <Link
                        className="font-semibold text-gray-900 line-clamp-2 hover:text-black transition-colors text-sm"
                        href="/shop/vhy"
                      >
                        Noor in Blue
                      </Link>
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
                          <path d="M11.525 2.295a.53.53 0 0 1 .95 012.31 4.679a2.123 2.123 @ @ @ 1.595 1.1615.166.756.53.53 0 0 1 .294.9841-3.736 3.638a2.123 2.123 0 0 0-.611 1.8781.882 5.14a.53.53 0 0 1-.771.561-4.618-2.428a2.122 2.122 0 0 0-1.973 8L6.396 21.01.53.53 0 0 1-.77-561.881-5.13982.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-98615.165-.755a2.122 2.122 0 0 0 1.597-1.162"></path>{" "}
                        </svg>
                        <span className="text-xs font-medium text-gray-700">
                          0
                        </span>
                      </div>
                      <span className="text-xs text-gray-500">(0)</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-base font-bold text-gray-900">
                        3620
                      </span>
                    </div>
                  </div>
                </div>
                {/* Product 20 */}
                <div className="group relative bg-white rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 ">
                  <div className="relative overflow-hidden bg-gray-50">
                    <Link href="/shop/vhv">
                      <Image
                        alt="product"
                        loading="lazy"
                        width="350"
                        height="300"
                        decoding="async"
                        data-nimg="1"
                        className="w-full h-[300px] object-cover hover: scale-105 overflow-hidden transition-all duration-300 cursor-pointer"
                        style={{ color: "transparent" }}
                        src="https://server.vlada.store/uploads/image-1771193305904-137623872.jpg"
                      />
                    </Link>
                    <div className="absolute inset-x-2 bottom-2 transition-all duration-300 md:translate-y-full md:opacity- translate-y-opacity-100">
                      <button className=" cursor-pointer w-full bg-gray-900 text-white py-2 px-3 rounded-lg font-medium flex items-center justify-center gap-2 transition-colors duration-200 shadow-md hover:shadow-lg">
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
                          className="lucide lucide-plus w-4 h-4"
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
                      <p className="text-xs text-gray-500 font-medium capitalize">
                        three piece
                      </p>
                      <Link
                        className="font-semibold text-gray-900 line-clamp-2 hover:text-black transition-colors text-sm"
                        href="/shop/vhy"
                      >
                        Noor in Blue
                      </Link>
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
                          <path d="M11.525 2.295a.53.53 0 0 1 .95 012.31 4.679a2.123 2.123 @ @ @ 1.595 1.1615.166.756.53.53 0 0 1 .294.9841-3.736 3.638a2.123 2.123 0 0 0-.611 1.8781.882 5.14a.53.53 0 0 1-.771.561-4.618-2.428a2.122 2.122 0 0 0-1.973 8L6.396 21.01.53.53 0 0 1-.77-561.881-5.13982.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-98615.165-.755a2.122 2.122 0 0 0 1.597-1.162"></path>{" "}
                        </svg>
                        <span className="text-xs font-medium text-gray-700">
                          0
                        </span>
                      </div>
                      <span className="text-xs text-gray-500">(0)</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-base font-bold text-gray-900">
                        3620
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="w-full flex justify-center mt-[80px]">
                <div className="h-10 w-full"></div>
              </div>
            </div>

            <div className="w-full flex justify-center mt-[80px]">
              <div className="h-10 w-full"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShopPage;
