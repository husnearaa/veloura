import Link from "next/link";
import Image from "next/image";
import React from "react";

const CheckoutPage = () => {
  return (
    <div className="max-w-7x1 px-4 sm:px-6 lg:px-8 w-full mx-auto my-[50px">
      <div className="flex justify-between items-start gap-6">
        <div className="w-full flex flex-col gap-[45px]">
          <div
            className="flex flex-col gap-6 bg-white p-5 rounded"
            style={{ boxShadow: "rgba(0, 0, 0, 0.14) 0px 2px 6px 0px" }}
          >
            <h3 className="text-lg font-openSans font-bold leading-5 text-black">
              Billing Address
            </h3>{" "}
            <div className="relative w-full ">
              <label
                htmlFor="fullname"
                className="absolute left-2 bg-white px-2 pointer-events-none transition-all duration-200 ease-in-out -top-3 text-sm text-blue-600"
              >
                Full Name
              </label>
              <input
                id="fullname"
                className="w-full border outline-none py-3 px-[14px] rounded text-base text-[#4F4F4F] font-inter transition-all duration-200 border-[#B2BCCA]"
                type="text"
                value="Violet Talley"
              />{" "}
            </div>
            <div className="relative w-full">
              <label
                htmlFor="email"
                className="absolute left-2 bg-white px-2 pointer-events-none transition-all duration-200 ease-in-out -top-3 text-sm text-blue-600"
              >
                Email address (Optional)
              </label>{" "}
              <input
                id="email"
                className="w-full border outline-none py-3 px-[14px] rounded text-base text-[#4F4F4F] font-inter transition-all duration-200 border-[#B2BCCA]"
                type="text"
                value="zuqov@mailinator.com"
              />{" "}
            </div>
            <div className="relative w-full">
              <label
                htmlFor="phone"
                className="absolute left-2 bg-white px-2 pointer-events-none transition-all duration-200 ease-in-out -top-3 text-sm text-blue-680"
              >
                Phone Number
              </label>
              <input
                id="phone"
                className="w-full border outline-none py-3 px-[14px] rounded text-base text-[#4F4F4F] font-inter transition-all duration-200 border-[#B2BCCA]"
                type="text"
                value="01600000001"
              />{" "}
            </div>
            <div className="relative w-full">
              <label
                htmlFor="district"
                className="absolute left-2 bg-white px-2 pointer-events-none transition-all duration-200 ease-in-out -top-3 text-sm text-blue-600"
              >
                Choose District
              </label>{" "}
              <input
                id="district"
                className="w-full border outline-none py-3 px-[14px] rounded text-base text-[#4F4F4F] font-inter transition-all duration-200 border-[#B2BCCA]"
                type="text"
                value="Dhaka"
              />{" "}
            </div>
            <div className="relative w-full">
              <label
                htmlFor="area"
                className="absolute left-2 bg-white px-2 pointer-events-none transition-all duration-200 ease-in-out -top-3 text-sm text-blue-600"
              >
                Area
              </label>
              <input
                id="area"
                className="w-full border outline-none py-3 px-[14px] rounded text-base text-[#4F4F4F] font-inter transition-all duration-200 border-[#B2BCCA]"
                type="text"
                value="rampura"
              />{" "}
            </div>
            <div className="relative w-full">
              <label
                htmlFor="address"
                className="absolute left-2 bg-white px-2 pointer-events-none transition-all duration-200 ease-in-out -top-3 text-sm text-blue-600"
              >
                Street address
              </label>{" "}
              <input
                id="address"
                className="w-full border outline-none py-3 px-[14px] rounded text-base text-[#4F4F4F] font-inter transition-all duration-200 border-[#B2BCCA]"
                type="text"
                value="road 7"
              />{" "}
            </div>
          </div>

          <div
            className="flex flex-col gap-6 bg-white p-5 rounded"
            style={{ boxShadow: "rgba(0, 0, 0, 0.14) 0px 2px 6px 0px" }}
          >
            <h3 className="text-lg font-openSans font-bold leading-5 text-black">
              Payment Method
            </h3>
            <div className="rounded-1g border border-[#DEDEDE] bg-white mt-4 flex flex-col">
              <div className="flex items-center justify-between gap-3 py-5 px-4 rounded-b-lg">
                <div className="flex items-center gap-3">
                  <input
                    id="cash_on_delivery"
                    className="cursor-pointer"
                    type="radio"
                    value="cod"
                    checked
                    name="payment_method"
                  />
                  <label
                    htmlFor="cash_on_delivery"
                    className="font-sofiaProRegular text-black leading-[21px] text-sm cursor-pointer"
                  >
                    Cash On Delivery
                  </label>
                </div>
              </div>{" "}
            </div>
            <div className="flex items-center gap-2">
              <span className="border border-blue-600 rounded-full inline-block p-1.5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="11"
                  height="11"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="lucide lucide-lock text-blue-600"
                  aria-hidden="true"
                >
                  {" "}
                  <rect
                    width="18"
                    height="11"
                    x="3"
                    y="11"
                    rx="2"
                    ry="2"
                  ></rect>
                  <path d="M7 11V7a5 5 0 0 1 10 8v4"></path>
                </svg>
              </span>
              <span className="text-xs leading-5 font-openSans text-[#828282] font-normal">
                We protect your payment information using encryption to provide
                bank-level security.
              </span>
            </div>
          </div>
        </div>

        <div className=" w-full flex flex-col gap-5">
          <div
            className="flex flex-col gap-6 bg-white rounded"
            style={{ boxShadow: "rgba(0, 0, 0, 0.14) 0px 2px 6px 0px" }}
          >
            <div>
              <div className="flex items-center justify-between p-5 border-b border-gray-200 cursor-pointer hover:bg-gray-50 transition-colors">
                <div>
                  <h2 className="text-lg font-openSans font-bold leading-5 text-black">
                    Order Review
                  </h2>
                  <p className="text-sm text-black mt-1 font-openSans leading-5 font-normal">
                    2 items in cart
                  </p>{" "}
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
                  className="lucide lucide-chevron-down w-5 h-5 text-gray-400 trans ition-transform duration-200 rotate-180"
                  aria-hidden="true"
                >
                  <path d="m6 9 6 6 6-6"></path>
                </svg>
              </div>
              <div className="overflow-hidden transition-all duration-300 ease-in-out max-h-96">
                <div className="divide-y divide-gray-100">
                  <Link
                    className="p-6 flex space-x-4"
                    href="/shop/Whisperlight"
                  />
                  <div className="w-16 h-16 rounded-lg overflow-hidden bg-gray-100 flex-shrink-0">
                    <Image
                      alt="cart image item"
                      loading="lazy"
                      width="1000"
                      height="1000"
                      decoding="async"
                      data-nimg="1"
                      className="w-full h-full object-cover"
                      src="https://server.vlada.store/uploads/image-1760107166536-985689.jpg"
                      style={{ backgroundColor: "transparent" }}
                    />{" "}
                  </div>{" "}
                  <div className="flex-1 min-w-0">
                    <h3 className="text-base font-medium text-primary mb-2 font-openSans">
                      Whisperlight
                    </h3>
                    <div className="flex flex-wrap gap-3 my-2 text-sm text-gray-600 font-sofiaProRegular">
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
                        {" "}
                        <path d="M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.41418.784 8.7842.426 2.426 0 0 0 3.42 016.58-6.58a2.426 2.426 0 0 0 -3.422"></path>
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
                        <path d="M12 8h.81"></path>
                      </svg>
                      <span>SKU:45</span>
                    </div>
                  </div>
                </div>
                <div className="text-right">
                  <p className=" font-semibold text-primary font-openSans tracking-[0.33px">
                    3520 TK 2740TK
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div
            className="flex flex-col gap-6 bg-white rounded"
            style={{ boxShadow: "rgba(0, 0, 0, 0.14) 0px 2px 6px 0px" }}
          >
            <div
              className="flex flex-col gap-6 bg-white rounded"
              style={{ boxShadow: "rgba(0, 0, 0, 0.14) 0px 2px 6px 0px;" }}
            >
              <div>
                <div className="flex items-center justify-between p-5 border-b border-gray-200 cursor-pointer hover:bg-gray-50 transition-colors">
                  <div>
                    <h2 className="text-lg font-openSans font-bold leading-5 text-black">
                      Discount Codes
                    </h2>
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
                    className="lucide lucide-chevron-down w-5 h-5 text-gray-400 trans ition-transform duration-200"
                    aria-hidden="true"
                  >
                    <path d="m6 9 6 6 6-6"></path>
                  </svg>
                </div>
                <div className="overflow-hidden transition-all duration-300 ease-in-out max-h-8">
                  <form className="p-5">
                    <div className="relative w-full">
                      <label
                        htmlFor="coupon"
                        className="absolute left-2 bg-white px-2 pointer-events-none transition-all duration-200 ease-in-out top-3 text-base text-gray-588"
                      >
                        Coupon
                      </label>
                      <input
                        id="coupon"
                        className="w-full border outline-none py-3 px-[14px] rounded text-base text-[#4F4F4F] font-inter transition-all duration-200 border-[#B2BCCA]"
                        type="text"
                        value=""
                      />{" "}
                    </div>
                    <button
                      type="submit"
                      className="w-full text-center rounded-full p-2.5 cursor-pointer text-white bg-black/40 mt-4 font-openSans font-bold"
                    >
                      Apply
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <div
            className="flex flex-col gap-6 bg-white rounded"
            style={{ boxShadow: "rgba(0, 0, 0, 0.14) 0px 2px 6px 0px" }}
          >
            <div>
              <div className="flex items-center justify-between p-5 border-b border-gray-200 cursor-pointer hover:bg-gray-50 transition-colors">
                <div>
                  <h2 className="text-lg font-openSans font-bold leading-5 text-black">
                    Billing Summary
                  </h2>{" "}
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
                  className="lucide lucide-chevron-down w-5 h-5 text-gray-400 trans ition-transform duration-200 rotate-180"
                  aria-hidden="true"
                >
                  <path d="m6 9 6 6 6-6"></path>
                </svg>
              </div>
              <div className="overflow-hidden transition-all duration-300 ease-in-out max-h-[500px">
                <div className="p-5">
                  <div className="space-y-3 mb-5">
                    <div className="flex justify-between items-center">
                      <span className="text-base font-openSans text-gray-700">
                        Subtotal
                      </span>
                      <span className="text-base font-openSans text-gray-700">
                        {" "}
                        7040 TK{" "}
                      </span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-base font-openSans text-gray-700">
                        Shipping
                      </span>
                      <span className="text-base font-openSans text-gray-700">
                        +70 TK
                      </span>
                    </div>
                    <div className="border-t border-gray-200 pt-3">
                      <div className="flex justify-between items-center">
                        <span className="text-lg font-openSans font-bold leading-5 text-black">
                          Grand Total
                        </span>
                        <span className="text-1g font-openSans font-bold leading-5 text-black">
                          7110 - TK{" "}
                        </span>{" "}
                      </div>{" "}
                    </div>
                  </div>
                  <div className="relative w-full">
                    <label
                      htmlFor="orderComment"
                      className="absolute left-2 bg-white px-2 pointer-events-none transition-all duration-200 ease-in-out top-3 text-base text-gray-500"
                    >
                      Order comment
                    </label>{" "}
                    <textarea
                      id="orderComment"
                      className="w-full border outline-none py-3 px-[14px] rounded text-base text-[#4F4F4F] font-inter transition-all duration-200 border-[#B2BCCA]"
                    ></textarea>{" "}
                  </div>
                  <div className="mt-5 flex items-center gap-2">
                    <input
                      id="agreeToPrivacy"
                      className="cursor-pointer"
                      type="checkbox"
                    />
                    <label
                      htmlFor="agreeToPrivacy"
                      className="font-openSans text-sm text-[#4F4F4F]"
                    >
                      Please check to acknowledge our
                      <span className="text-[#2F88FF]">
                        Privacy & Terms Policy
                      </span>
                    </label>
                  </div>
                  <button
                    disabled
                    className="bg-black/40 rounded-full p-2.5 text-center text-white block w-full mt-4 font-openSans font-bold cursor-pointer"
                  >
                    Pay 7110 TK
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
