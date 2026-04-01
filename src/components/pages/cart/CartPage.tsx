import Image from "next/image";
import React from "react";

const CartPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50/20">
      <div className="mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Shopping Cart
          </h1>
          <p className="text-gray-600">1 items in your cart</p>
        </div>
        <div className="lg:grid lg:grid-cols-12 lg: gap-8 space-y-8 1g:space-y-0">
          <div className="lg:col-span-8">
            <div className="bg-white rounded-1g shadow-sm overflow-hidden">
              <div className="flex flex-col sm:flex-row items-start gap-4 p-4 sm:p-6">
                <div className="w-full sm:w-24 h-24 sm:h-24 rounded-lg overflow-hidden flex-shrink-0 bg-gray-50">
                  <Image
                    alt="cart image"
                    loading="lazy"
                    width="96"
                    height="96"
                    decoding="async"
                    data-nimg="1"
                    className="w-full h-full object-cover"
                    src="https://server.vlada.store/uploads/image-1760107166536-985689.j pg"
                    style={{ color: "transparent" }}
                  />
                </div>
                <div className="flex-1 min-w-8 w-full sm:w-auto">
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-2 gap-2">
                    <div className="flex flex-col gap-2">
                      <h3 className="text-lg font-semibold text-gray-900 pr-0 sm:pr-4">
                        Whisperlight
                      </h3>
                      <div className="flex flex-wrap gap-3 text-sm text-gray-600 font-sofiaProRegular">
                        <div className="flex items-center gap-1">
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
                            className="lucide lucide-tag w-3 h-3"
                            aria-hidden="true"
                          >
                            <path d="M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 e e e .586 1.41418.784 8.784a2.426 2.426 0 0 0 3.42 016.58-6.58a2.426 2.426 0 0 0 0-3.422"></path>
                            <circle
                              cx="7.5"
                              cy="7.5"
                              r=".5"
                              fill="currentColor"
                            ></circle>
                          </svg>
                          <span className="capitalize">two piece</span>
                        </div>
                        <div className="flex items-center gap-1">
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
                            className="lucide lucide-info w-3 h-3"
                            aria-hidden="true"
                          >
                            <circle cx="12" cy="12" r="10"></circle>
                            <path d="M12 16v-4"></path>
                            <path d="M12 8h.01"></path>
                          </svg>
                          <span>SKU: 45 </span>{" "}
                        </div>
                      </div>{" "}
                    </div>
                    <button className="text-[#737373] hover:text-red-700 text-sm underline self-start sm:self-auto cursor-pointer">
                      Remove
                    </button>{" "}
                  </div>
                  <div className="my-2">
                    <div className="flex items-start gap-2">
                      <span className="font-medium text-gray-700 text-sm font-sofiaProRegular flex-shrink-e">
                        Variants:
                      </span>
                      <div className="flex flex-wrap gap-1">
                        <span className="inline-flex items-center px-2 py-0.5 rounded bg-gray-100 text-gray-808 text-xs font-medium border border-gray-200">
                          {" "}
                          (flex) <span className="capitalize">size</span>
                          <span className="mx-1 text-gray-400">:</span>
                          <span className="capitalize">M</span>
                        </span>
                      </div>{" "}
                    </div>{" "}
                  </div>{" "}
                </div>
                <div className="flex sm:flex-col items-center sm:items-end justify-between sm:justify-start gap-4 sm:gap-3 flex-shrink-0 w-full sm:w-auto">
                  <div className="flex items-center border border-gray-300 rounded-1g overflow-hidden">
                    <button className="cursor-pointer w-10 h-10 flex items-center justify-center text-gray-680 hover: text-gray-800 hover:bg-gray-50 transition-colors">
                      -
                    </button>
                    <span className="w-12 text-center text-sm font-semibold bg-gray-50 flex items-center justify-center h-10">
                      1
                    </span>
                    <button className="cursor-pointer w-10 h-10 flex items-center justify-center text-gray-680 hover: text-gray-800 hover:bg-gray-50 transition-colors">
                      +
                    </button>
                  </div>
                  <div className="text-right">
                    <p className="text-xl font-bold text-gray-900">3520 TK</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="lg:col-span-4">
          <div className="bg-white rounded-1g shadow-sm p-6 sticky top-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-6 border-b border-gray-100 pb-3">
              Order Summary
            </h2>
            <div className="space-y-4 mb-6">
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Subtotal 1 items</span>
                <span className="font-medium">Tk 3520</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Shipping</span>
                <span className="font-medium">
                  Calculated at checkout{" "}
                </span>{" "}
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Discount</span>
                <span className="font-medium">Calculated at checkout</span>{" "}
              </div>
              <div className="border-t border-gray-100 pt-4">
                <div className="flex justify-between items-center">
                  <span className="text-lg font-semibold text-gray-900">
                    Total
                  </span>
                  <span className="text-xl font-bold text-gray-900">
                    Tk 3,520
                  </span>{" "}
                </div>{" "}
              </div>{" "}
            </div>
            <a
              className="block text-center w-full bg-gradient-to-r bg-black text-white py-3 rounded-1g font-semibold cursor-pointer transform hover:-translate-y-0.5 transition-all duration-200 shadow-1g hover:shadow-xl mb-4"
              href="/checkout"
            >
              Proceed to Checkout
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
