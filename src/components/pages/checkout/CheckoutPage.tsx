"use client";

import Link from "next/link";
import Image from "next/image";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { ChevronUp, ChevronDown, Lock, Tag, Info } from "lucide-react";

type FormValues = {
  fullname: string;
  email: string;
  phone: string;
  district: string;
  area: string;
  address: string;
  payment_method: "cash_on_delivery" | "online_payment";
  orderComment: string;
  agreeToPrivacy: boolean;
  coupon: string;
};

type FloatingInputProps = {
  id: keyof FormValues;
  label: string;
  placeholder: string;
  register: ReturnType<typeof useForm<FormValues>>["register"];
};

const FloatingInput = ({
  id,
  label,
  placeholder,
  register,
}: FloatingInputProps) => {
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
        placeholder={placeholder}
        {...register(id)}
        className="w-full h-[48px] rounded-[4px] border border-[#cfd6df] px-4 text-[16px] text-[#4b5563] outline-none placeholder:text-[#9ca3af]"
      />
    </div>
  );
};

const CheckoutPage = () => {
  const { register, handleSubmit, watch } = useForm<FormValues>({
    defaultValues: {
      payment_method: "cash_on_delivery",
    },
  });

  const [isOrderReviewOpen, setIsOrderReviewOpen] = useState(true);
  const [isDiscountOpen, setIsDiscountOpen] = useState(false);
  const [isBillingSummaryOpen, setIsBillingSummaryOpen] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const agreeToPrivacy = watch("agreeToPrivacy");

  const onSubmit = async (data: FormValues) => {
    try {
      setIsSubmitting(true);

      const orderPayload = {
        fullname: data.fullname,
        email: data.email,
        phone: data.phone,
        district: data.district,
        area: data.area,
        address: data.address,
        orderComment: data.orderComment,
        coupon: data.coupon,
        payment_method: data.payment_method,
        items: [
          {
            name: "Whisperlight",
            sku: "45",
            variant: "Two Piece",
            price: 3520,
            quantity: 2,
            total: 7040,
            image:
              "https://server.vlada.store/uploads/image-1760107166536-985689.jpg",
          },
        ],
        pricing: {
          subtotal: 7040,
          shipping: 70,
          grandTotal: 7110,
        },
      };

      if (data.payment_method === "cash_on_delivery") {
        const response = await fetch("/api/orders", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(orderPayload),
        });

        if (!response.ok) {
          throw new Error("Failed to place cash on delivery order");
        }

        const result = await response.json();

        if (result?.redirectUrl) {
          window.location.href = result.redirectUrl;
          return;
        }

        alert("Order placed successfully");
        return;
      }

      if (data.payment_method === "online_payment") {
        const response = await fetch("/api/stripe/checkout-session", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(orderPayload),
        });

        if (!response.ok) {
          throw new Error("Failed to create Stripe checkout session");
        }

        const result = await response.json();

        if (result?.url) {
          window.location.href = result.url;
          return;
        }

        throw new Error("Stripe checkout URL not found");
      }
    } catch (error) {
      console.error(error);
      alert("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="w-full pb-12">
      <div className="max-w-7xl px-4 sm:px-6 lg:px-8 w-full mx-auto my-[50px]">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[1fr_0.98fr] gap-6 items-start"
        >
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
                  placeholder="Full Name"
                  register={register}
                />
                <FloatingInput
                  id="email"
                  label="Email address"
                  placeholder="Email address"
                  register={register}
                />
                <FloatingInput
                  id="phone"
                  label="Phone Number"
                  placeholder="Phone Number"
                  register={register}
                />
                <FloatingInput
                  id="district"
                  label="Choose District"
                  placeholder="Choose District"
                  register={register}
                />
                <FloatingInput
                  id="area"
                  label="Area"
                  placeholder="Area"
                  register={register}
                />
                <FloatingInput
                  id="address"
                  label="Street address"
                  placeholder="Street address"
                  register={register}
                />
              </div>
            </div>

            {/* Payment Method */}
            <div className="bg-white rounded-[4px] p-5 sm:p-6">
              <h2 className="text-[18px] leading-[26px] font-bold text-black mb-6">
                Payment Method
              </h2>

              <div className="flex flex-col gap-4">
                <div className="border border-[#e5e7eb] rounded-[10px] bg-white">
                  <label className="flex items-center gap-3 px-4 py-5 cursor-pointer">
                    <input
                      type="radio"
                      value="cash_on_delivery"
                      {...register("payment_method")}
                      className="h-4 w-4 text-[#0078d4] cursor-pointer"
                    />
                    <span className="text-[15px] leading-6 text-black">
                      Cash On Delivery
                    </span>
                  </label>
                </div>

                <div className="border border-[#e5e7eb] rounded-[10px] bg-white">
                  <label className="flex items-center gap-3 px-4 py-5 cursor-pointer">
                    <input
                      type="radio"
                      value="online_payment"
                      {...register("payment_method")}
                      className="h-4 w-4 text-[#0078d4] cursor-pointer"
                    />
                    <span className="text-[15px] leading-6 text-black">
                      Online Payment
                    </span>
                  </label>
                </div>
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
            <div className="bg-white rounded-[4px] overflow-hidden">
              <button
                type="button"
                onClick={() => setIsOrderReviewOpen((prev) => !prev)}
                className="w-full flex items-start justify-between px-5 py-4 border-b border-[#e9e9e9] text-left"
              >
                <div>
                  <h2 className="text-[18px] leading-[26px] font-bold text-black">
                    Order Review
                  </h2>
                  <p className="text-[14px] leading-5 text-black mt-1">
                    2 items in cart
                  </p>
                </div>
                {isOrderReviewOpen ? (
                  <ChevronUp className="w-5 h-5 text-[#8f96a3] mt-1" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-[#8f96a3] mt-1" />
                )}
              </button>

              {isOrderReviewOpen && (
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
              )}
            </div>

            {/* Discount Codes */}
            <div
              className="flex flex-col gap-6 bg-white rounded"
              style={{ boxShadow: "rgba(0, 0, 0, 0.14) 0px 2px 6px 0px" }}
            >
              <div>
                <button
                  type="button"
                  onClick={() => setIsDiscountOpen((prev) => !prev)}
                  className="w-full flex items-center justify-between p-5 border-b border-gray-200 cursor-pointer hover:bg-gray-50 transition-colors text-left"
                >
                  <div>
                    <h2 className="text-1g font-openSans font-bold leading-5 text-black">
                      Discount Codes
                    </h2>
                  </div>

                  {isDiscountOpen ? (
                    <ChevronUp className="w-5 h-5 text-gray-400 transition-transform duration-200" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-gray-400 transition-transform duration-200" />
                  )}
                </button>

                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    isDiscountOpen ? "max-h-40" : "max-h-0"
                  }`}
                >
                  <div className="p-5">
                    <div className="relative w-full">
                      <label
                        htmlFor="coupon"
                        className="absolute left-2 bg-white px-2 pointer-events-none transition-all duration-200 ease-in-out top-3 text-base text-gray-500"
                      >
                        Coupon
                      </label>
                      <input
                        id="coupon"
                        type="text"
                        placeholder=""
                        {...register("coupon")}
                        className="w-full border outline-none py-3 px-[14px] rounded text-base text-[#4F4F4F] font-inter transition-all duration-200 border-[#B2BCCA]"
                      />
                    </div>
                    <button
                      type="button"
                      className="w-full text-center rounded-full p-2.5 cursor-pointer text-white bg-black/40 mt-4 font-openSans font-bold"
                    >
                      Apply
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Billing Summary */}
            <div className="bg-white rounded-[4px] shadow-[0_2px_8px_rgba(0,0,0,0.08)] overflow-hidden">
              <button
                type="button"
                onClick={() => setIsBillingSummaryOpen((prev) => !prev)}
                className="w-full flex items-center justify-between px-5 py-4 border-b border-[#e9e9e9] text-left"
              >
                <h2 className="text-[18px] leading-[26px] font-bold text-black">
                  Billing Summary
                </h2>
                {isBillingSummaryOpen ? (
                  <ChevronUp className="w-5 h-5 text-[#8f96a3]" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-[#8f96a3]" />
                )}
              </button>

              {isBillingSummaryOpen && (
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
                      {...register("orderComment")}
                      className="w-full rounded-[4px] border border-[#cfd6df] px-4 py-3 text-[16px] text-[#4b5563] outline-none resize-none placeholder:text-[#7b8794] focus:border-[#cfd6df] focus:ring-0"
                    />
                  </div>

                  <div className="mt-5 flex items-start gap-2">
                    <input
                      id="agreeToPrivacy"
                      type="checkbox"
                      {...register("agreeToPrivacy")}
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
                    type="submit"
                    disabled={!agreeToPrivacy || isSubmitting}
                    className="mt-4 w-full rounded-full bg-[#9f9f9f] py-[10px] text-center text-white text-[16px] font-bold cursor-not-allowed"
                  >
                    {isSubmitting ? "Processing..." : "Pay 7110 TK"}
                  </button>
                </div>
              )}
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CheckoutPage;