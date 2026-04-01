"use client";

import { Handbag } from "lucide-react";
import Image from "next/image";
import React, { useState } from "react";

const CartPage = () => {
  const [quantity, setQuantity] = useState(1);
  const [isRemoved, setIsRemoved] = useState(false);

  const price = 3520;

  const increaseQty = () => {
    setQuantity((prev) => prev + 1);
  };

  const decreaseQty = () => {
    if (quantity === 1) {
      setIsRemoved(true);
    } else {
      setQuantity((prev) => prev - 1);
    }
  };

  const handleRemove = () => {
    setIsRemoved(true);
  };

  const totalPrice = isRemoved ? 0 : price * quantity;
  const totalItems = isRemoved ? 0 : quantity;

  // EMPTY CART UI ONLY
  if (isRemoved) {
    return (
      <div className="p-12 text-center">
        <div className="w-24 h-24 mx-auto mb-4 bg-gray-100 rounded-full flex items-center justify-center">
          <Handbag className="w-12 h-12 text-gray-400" />
        </div>
        <h3 className="text-lg font-medium text-gray-900 mb-2">
          Your cart is empty
        </h3>
        <p className="text-gray-500">Add some items to get started!</p>
      </div>
    );
  }

  // ✅ NORMAL CART UI (your original code)
  return (
    <div className="min-h-screen bg-[#f6f6f6]">
      <div className="mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-[#0b1b3b] mb-2">
            Shopping Cart
          </h1>
          <p className="text-[16px] text-[#44556f]">
            {totalItems} items in your cart
          </p>
        </div>

        <div className="lg:grid lg:grid-cols-12 gap-8 space-y-8 lg:space-y-0">
          {/* Left side */}
          <div className="lg:col-span-8">
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
              <div className="flex flex-col sm:flex-row items-start gap-4 p-4 sm:p-6">
                {/* Image */}
                <div className="w-full sm:w-24 h-24 rounded-lg overflow-hidden bg-gray-50">
                  <Image
                    alt="cart image"
                    width={500}
                    height={500}
                    src="https://server.vlada.store/uploads/image-1760107166536-985689.jpg"
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Content */}
                <div className="flex-1">
                  <div className="flex justify-between">
                    <h3 className="text-[20px] font-semibold text-gray-900">
                      Whisperlight
                    </h3>

                    <button
                      onClick={handleRemove}
                      className="text-sm underline text-gray-500 hover:text-red-600"
                    >
                      Remove
                    </button>
                  </div>

                  <p className="text-sm text-gray-600 mt-2">
                    Two Piece • SKU: 45
                  </p>

                  <div className="mt-3 text-sm">
                    <span className="font-medium">Variants:</span>
                    <span className="ml-2 bg-gray-100 px-2 py-0.5 rounded text-xs border">
                      Size : M
                    </span>
                  </div>
                </div>

                {/* Qty */}
                <div className="flex flex-col items-end gap-3">
                  <div className="flex border rounded-lg overflow-hidden">
                    <button
                      onClick={decreaseQty}
                      className="w-10 h-10 hover:bg-gray-100"
                    >
                      -
                    </button>

                    <span className="w-12 flex items-center justify-center font-semibold">
                      {quantity}
                    </span>

                    <button
                      onClick={increaseQty}
                      className="w-10 h-10 hover:bg-gray-100"
                    >
                      +
                    </button>
                  </div>

                  <p className="text-[22px] font-bold">{totalPrice} TK</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right */}
          <div className="lg:col-span-4">
            <div className="bg-white rounded-lg border p-6 sticky top-6">
              <h2 className="text-xl font-semibold mb-6 border-b pb-3">
                Order Summary
              </h2>

              <div className="space-y-4">
                <div className="flex justify-between text-sm">
                  <span>Subtotal ({totalItems})</span>
                  <span>Tk {totalPrice}</span>
                </div>

                <div className="flex justify-between text-sm">
                  <span>Shipping</span>
                  <span>Calculated</span>
                </div>

                <div className="border-t pt-4 flex justify-between">
                  <span className="font-semibold">Total</span>
                  <span className="font-bold">
                    Tk {totalPrice.toLocaleString()}
                  </span>
                </div>
              </div>

              <a
                href="/checkout"
                className="block mt-6 bg-black text-white text-center py-3 rounded-lg"
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
