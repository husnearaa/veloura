import Link from "next/link";
import Image from "next/image";
import React from "react";
import { ChevronUp, ChevronDown, Lock, Tag, Info } from "lucide-react";

const CheckoutPage = () => {
    type FloatingInputProps = {
  id: string;
  label: string;
  value: string;
};

const FloatingInput = ({ id, label, value }: FloatingInputProps) => {
  return (
    <div className="relative w-full">
      <label
        htmlFor={id}
        className="absolute left-3 -top-[10px] bg-white px-2 text-[14px] leading-5 text-[#245bff]"
      >
        {label}
      </label>
      <input
        id={id}
        type="text"
        value={value}
        readOnly
        className="w-full h-[48px] rounded-[4px] border border-[#cfd6df] px-4 text-[16px] text-[#4b5563] outline-none"
      />
    </div>
  );
};

  return (
    <div className="w-full bg-[#f3f3f3] pb-12">
      <div className="max-w-7xl px-4 sm:px-6 lg:px-8 w-full mx-auto my-[50px]">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_0.98fr] gap-6 items-start">
          {/* Left Side */}
          <div className="flex flex-col gap-11">
            {/* Billing Address */}
            <div className="bg-white rounded-[4px] shadow-[0_2px_8px_rgba(0,0,0,0.08)] p-5 sm:p-6">
              <h2 className="text-[18px] leading-[26px] font-bold text-black mb-6">
                Billing Address
              </h2>

              <div className="space-y-6">
                <FloatingInput
                  id="fullname"
                  label="Full Name"
                  value="Violet Talley"
                />
                <FloatingInput
                  id="email"
                  label="Email address (Optional)"
                  value="zuqov@mailinator.com"
                />
                <FloatingInput
                  id="phone"
                  label="Phone Number"
                  value="01600000001"
                />
                <FloatingInput
                  id="district"
                  label="Choose District"
                  value="Dhaka"
                />
                <FloatingInput id="area" label="Area" value="rampura" />
                <FloatingInput
                  id="address"
                  label="Street address"
                  value="road 7"
                />
              </div>
            </div>

            {/* Payment Method */}
            <div className="bg-white rounded-[4px] shadow-[0_2px_8px_rgba(0,0,0,0.08)] p-5 sm:p-6">
              <h2 className="text-[18px] leading-[26px] font-bold text-black mb-6">
                Payment Method
              </h2>

              <div className="border border-[#e5e7eb] rounded-[10px] bg-white">
                <label className="flex items-center gap-3 px-4 py-5 cursor-pointer">
                  <input
                    type="radio"
                    name="payment_method"
                    defaultChecked
                    className="h-4 w-4 accent-fuchsia-500 cursor-pointer"
                  />
                  <span className="text-[15px] leading-6 text-black">
                    Cash On Delivery
                  </span>
                </label>
              </div>

              <div className="flex items-center gap-3 mt-7">
                <span className="w-8 h-8 rounded-full border border-[#4f7cff] flex items-center justify-center text-[#4f7cff]">
                  <Lock size={14} />
                </span>
                <p className="text-[13px] leading-5 text-[#7d8795]">
                  We protect your payment information using encryption to
                  provide bank-level security.
                </p>
              </div>
            </div>
          </div>

          {/* Right Side */}
          <div className="flex flex-col gap-5">
            {/* Order Review */}
            <div className="bg-white rounded-[4px] shadow-[0_2px_8px_rgba(0,0,0,0.08)] overflow-hidden">
              <div className="flex items-start justify-between px-5 py-4 border-b border-[#e9e9e9]">
                <div>
                  <h2 className="text-[18px] leading-[26px] font-bold text-black">
                    Order Review
                  </h2>
                  <p className="text-[14px] leading-5 text-black mt-1">
                    2 items in cart
                  </p>
                </div>
                <ChevronUp className="w-5 h-5 text-[#8f96a3] mt-1" />
              </div>

              <div className="px-5 py-6">
                <div className="flex items-start justify-between gap-4">
                  <Link
                    href="/shop/Whisperlight"
                    className="flex items-start gap-4 min-w-0 flex-1"
                  >
                    <div className="w-[58px] h-[64px] rounded-[6px] overflow-hidden bg-[#f3f3f3] shrink-0">
                      <Image
                        src="https://server.vlada.store/uploads/image-1760107166536-985689.jpg"
                        alt="cart item"
                        width={100}
                        height={100}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    <div className="min-w-0">
                      <h3 className="text-[16px] leading-6 font-medium text-black mb-2">
                        Whisperlight
                      </h3>

                      <div className="flex flex-wrap items-center gap-3 text-[14px] text-[#6b7280]">
                        <span className="flex items-center gap-1">
                          <Tag size={13} />
                          <span>Two Piece</span>
                        </span>

                        <span className="flex items-center gap-1">
                          <Info size={13} />
                          <span>SKU: 45</span>
                        </span>
                      </div>
                    </div>
                  </Link>

                  <div className="shrink-0 text-right">
                    <p className="text-[15px] sm:text-[16px] font-bold text-black whitespace-nowrap">
                      3520 TK * 2 = 7040 TK
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Discount Codes */}
            <div className="bg-white rounded-[4px] shadow-[0_2px_8px_rgba(0,0,0,0.08)] overflow-hidden">
              <div className="flex items-center justify-between px-5 py-4">
                <h2 className="text-[18px] leading-[26px] font-bold text-black">
                  Discount Codes
                </h2>
                <ChevronDown className="w-5 h-5 text-[#8f96a3]" />
              </div>
            </div>

            {/* Billing Summary */}
            <div className="bg-white rounded-[4px] shadow-[0_2px_8px_rgba(0,0,0,0.08)] overflow-hidden">
              <div className="flex items-center justify-between px-5 py-4 border-b border-[#e9e9e9]">
                <h2 className="text-[18px] leading-[26px] font-bold text-black">
                  Billing Summary
                </h2>
                <ChevronUp className="w-5 h-5 text-[#8f96a3]" />
              </div>

              <div className="p-5">
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-[16px] text-[#374151]">Subtotal</span>
                    <span className="text-[16px] text-[#374151]">7040 TK</span>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-[16px] text-[#374151]">Shipping</span>
                    <span className="text-[16px] text-[#374151]">+70 TK</span>
                  </div>
                </div>

                <div className="border-t border-[#e5e7eb] mt-4 pt-3">
                  <div className="flex items-center justify-between">
                    <span className="text-[18px] font-bold text-black">
                      Grand Total
                    </span>
                    <span className="text-[18px] font-bold text-black">
                      7110 TK
                    </span>
                  </div>
                </div>

                <div className="mt-5">
                  <textarea
                    id="orderComment"
                    placeholder="Order comment"
                    rows={3}
                    className="w-full rounded-[4px] border border-[#cfd6df] px-4 py-3 text-[16px] text-[#4b5563] outline-none resize-none placeholder:text-[#7b8794] focus:border-[#cfd6df] focus:ring-0"
                  />
                </div>

                <div className="mt-5 flex items-start gap-2">
                  <input
                    id="agreeToPrivacy"
                    type="checkbox"
                    className="mt-[3px] h-4 w-4 cursor-pointer"
                  />
                  <label
                    htmlFor="agreeToPrivacy"
                    className="text-[14px] leading-6 text-[#4b5563]"
                  >
                    Please check to acknowledge our{" "}
                    <span className="text-[#3b82f6]">
                      Privacy & Terms Policy
                    </span>
                  </label>
                </div>

                <button
                  disabled
                  className="mt-4 w-full rounded-full bg-[#9f9f9f] py-[13px] text-center text-white text-[16px] font-bold cursor-not-allowed"
                >
                  Pay 7110 TK
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default CheckoutPage;