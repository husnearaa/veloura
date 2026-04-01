import Image from "next/image";
import React from "react";

const CartPage = () => {
  return (
    <div className="min-h-screen bg-[#f6f6f6]">
      <div className="mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-[#0b1b3b] mb-2">
            Shopping Cart
          </h1>
          <p className="text-[16px] text-[#44556f]">1 items in your cart</p>
        </div>

        <div className="lg:grid lg:grid-cols-12 gap-8 space-y-8 lg:space-y-0">
          {/* Left side */}
          <div className="lg:col-span-8">
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
              <div className="flex flex-col sm:flex-row items-start gap-4 p-4 sm:p-6">
                {/* Image */}
                <div className="w-full sm:w-24 h-24 sm:h-24 rounded-lg overflow-hidden flex-shrink-0 bg-gray-50">
                  <Image
                    alt="cart image"
                    loading="lazy"
                    width={500}
                    height={500}
                    className="w-full h-full object-cover"
                    src="https://server.vlada.store/uploads/image-1760107166536-985689.jpg"
                    style={{ color: "transparent" }}
                  />
                </div>

                {/* Product content */}
                <div className="flex-1 min-w-0 w-full sm:w-auto">
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-2 gap-2">
                    <div className="flex flex-col gap-2">
                      <h3 className="text-[20px] font-semibold text-gray-900 pr-0 sm:pr-4">
                        Whisperlight
                      </h3>

                      <div className="flex flex-wrap gap-3 text-sm text-gray-600">
                        <div className="flex items-center gap-1">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="w-3 h-3"
                            aria-hidden="true"
                          >
                            <path d="M20.59 13.41 11 3H4v7l9.59 9.59a2 2 0 0 0 2.82 0l4.18-4.18a2 2 0 0 0 0-2.82Z" />
                            <circle cx="7.5" cy="7.5" r=".5" fill="currentColor" />
                          </svg>
                          <span className="capitalize">Two Piece</span>
                        </div>

                        <div className="flex items-center gap-1">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="w-3 h-3"
                            aria-hidden="true"
                          >
                            <circle cx="12" cy="12" r="10"></circle>
                            <path d="M12 16v-4"></path>
                            <path d="M12 8h.01"></path>
                          </svg>
                          <span>SKU: 45</span>
                        </div>
                      </div>
                    </div>

                    <button className="text-[#737373] hover:text-red-700 text-sm underline self-start sm:self-auto cursor-pointer">
                      Remove
                    </button>
                  </div>

                  <div className="my-2">
                    <div className="flex items-start gap-2">
                      <span className="font-medium text-gray-700 text-sm flex-shrink-0">
                        Variants:
                      </span>

                      <div className="flex flex-wrap gap-1">
                        <span className="inline-flex items-center px-2 py-0.5 rounded bg-gray-100 text-gray-800 text-xs font-medium border border-gray-200">
                          <span className="capitalize">Size</span>
                          <span className="mx-1 text-gray-400">:</span>
                          <span className="capitalize">M</span>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Quantity + price */}
                <div className="flex sm:flex-col items-center sm:items-end justify-between sm:justify-start gap-4 sm:gap-3 flex-shrink-0 w-full sm:w-auto">
                  <div className="flex items-center border border-gray-300 rounded-lg overflow-hidden">
                    <button className="cursor-pointer w-10 h-10 flex items-center justify-center text-gray-600 hover:text-gray-800 hover:bg-gray-50 transition-colors">
                      -
                    </button>
                    <span className="w-12 text-center text-sm font-semibold bg-white flex items-center justify-center h-10">
                      1
                    </span>
                    <button className="cursor-pointer w-10 h-10 flex items-center justify-center text-gray-600 hover:text-gray-800 hover:bg-gray-50 transition-colors">
                      +
                    </button>
                  </div>

                  <div className="text-right">
                    <p className="text-[22px] font-bold text-gray-900">3520 TK</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right side */}
          <div className="lg:col-span-4">
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 sticky top-6">
              <h2 className="text-[22px] font-semibold text-gray-900 mb-6 border-b border-gray-200 pb-3">
                Order Summary
              </h2>

              <div className="space-y-4 mb-6">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Subtotal (1 items)</span>
                  <span className="font-medium">Tk 3520</span>
                </div>

                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Shipping</span>
                  <span className="font-medium">Calculated at checkout</span>
                </div>

                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Discount</span>
                  <span className="font-medium">Calculated at checkout</span>
                </div>

                <div className="border-t border-gray-200 pt-4">
                  <div className="flex justify-between items-center">
                    <span className="text-lg font-semibold text-gray-900">
                      Total
                    </span>
                    <span className="text-[20px] font-bold text-gray-900">
                      Tk 3,520
                    </span>
                  </div>
                </div>
              </div>

              <a
                className="block text-center w-full bg-black text-white py-3 rounded-lg font-semibold cursor-pointer transition-all duration-200 hover:opacity-90"
                href="/checkout"
              >
                Proceed to Checkout
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;