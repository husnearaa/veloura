"use client";

import { Handbag } from "lucide-react";
import Image from "next/image";
import React, { useEffect, useMemo, useState } from "react";
import { getDemoCartItems } from "@/lib/demo-cart";

type DemoCartItem = {
  productId: number;
  name: string;
  category: string;
  price: number;
  image: string;
  size?: string;
  quantity: number;
};

const CART_KEY = "demo_cart_items";

const CartPage = () => {
  const [cartItems, setCartItems] = useState<DemoCartItem[]>([]);

  useEffect(() => {
    setCartItems(getDemoCartItems());
  }, []);

  const increaseQty = (productId: number, size?: string) => {
    const updatedItems = cartItems.map((item) =>
      item.productId === productId && item.size === size
        ? { ...item, quantity: item.quantity + 1 }
        : item,
    );

    setCartItems(updatedItems);
    localStorage.setItem(CART_KEY, JSON.stringify(updatedItems));
    window.dispatchEvent(new Event("cartUpdated"));
  };

  const decreaseQty = (productId: number, size?: string) => {
    const targetItem = cartItems.find(
      (item) => item.productId === productId && item.size === size,
    );

    if (!targetItem) return;

    let updatedItems: DemoCartItem[];

    if (targetItem.quantity === 1) {
      updatedItems = cartItems.filter(
        (item) => !(item.productId === productId && item.size === size),
      );
    } else {
      updatedItems = cartItems.map((item) =>
        item.productId === productId && item.size === size
          ? { ...item, quantity: item.quantity - 1 }
          : item,
      );
    }

    setCartItems(updatedItems);
    localStorage.setItem(CART_KEY, JSON.stringify(updatedItems));
    window.dispatchEvent(new Event("cartUpdated"));
  };

  const handleRemove = (productId: number, size?: string) => {
    const updatedItems = cartItems.filter(
      (item) => !(item.productId === productId && item.size === size),
    );

    setCartItems(updatedItems);
    localStorage.setItem(CART_KEY, JSON.stringify(updatedItems));
    window.dispatchEvent(new Event("cartUpdated"));
  };

  const totalItems = useMemo(
    () => cartItems.reduce((total, item) => total + item.quantity, 0),
    [cartItems],
  );

  const totalPrice = useMemo(
    () =>
      cartItems.reduce((total, item) => total + item.price * item.quantity, 0),
    [cartItems],
  );

  if (cartItems.length === 0) {
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
          <div className="lg:col-span-8 space-y-4">
            {cartItems.map((item) => (
              <div
                key={`${item.productId}-${item.size ?? "default"}`}
                className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden"
              >
                <div className="flex flex-col sm:flex-row items-start gap-4 p-4 sm:p-6">
                  <div className="w-full sm:w-24 h-24 rounded-lg overflow-hidden bg-gray-50">
                    <Image
                      alt={item.name}
                      width={500}
                      height={500}
                      src={item.image}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <div className="flex-1">
                    <div className="flex justify-between">
                      <h3 className="text-[20px] font-semibold text-gray-900">
                        {item.name}
                      </h3>

                      <button
                        onClick={() => handleRemove(item.productId, item.size)}
                        className="text-sm underline text-gray-500 hover:text-red-600"
                      >
                        Remove
                      </button>
                    </div>

                    <p className="text-sm text-gray-600 mt-2">
                      {item.category} • SKU: fdf
                    </p>

                    <div className="mt-3 text-sm">
                      <span className="font-medium">Variants:</span>
                      <span className="ml-2 bg-gray-100 px-2 py-0.5 rounded text-xs border">
                        Size : {item.size || "Default"}
                      </span>
                    </div>
                  </div>

                  <div className="flex flex-col items-end gap-3">
                    <div className="flex border rounded-lg overflow-hidden">
                      <button
                        onClick={() => decreaseQty(item.productId, item.size)}
                        className="w-10 h-10 hover:bg-gray-100"
                      >
                        -
                      </button>

                      <span className="w-12 flex items-center justify-center font-semibold">
                        {item.quantity}
                      </span>

                      <button
                        onClick={() => increaseQty(item.productId, item.size)}
                        className="w-10 h-10 hover:bg-gray-100"
                      >
                        +
                      </button>
                    </div>

                    <div className="text-right">
                      <p className="text-[22px] font-bold">
                        {(item.price * item.quantity).toLocaleString()} TK
                      </p>

                      {item.quantity > 1 && (
                        <p className="text-sm text-gray-600">
                          {item.price.toLocaleString()} TK each
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="lg:col-span-4">
            <div className="bg-white rounded-lg border p-6 sticky top-6">
              <h2 className="text-xl font-semibold mb-6 border-b pb-3">
                Order Summary
              </h2>

              <div className="space-y-4">
                <div className="flex justify-between text-sm">
                  <span>Subtotal ({totalItems})</span>
                  <span>Tk {totalPrice.toLocaleString()}</span>
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
