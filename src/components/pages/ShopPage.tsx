"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Search, Plus, Star } from "lucide-react";
import ThreeImg1 from "@/assets/shop/three1.jpg";
import ThreeImg2 from "@/assets/shop/three2.jpg";
import TwoImg1 from "@/assets/shop/two1.jpg";
import TwoImg2 from "@/assets/shop/two2.jpg";

const categories = [
  "one piece",
  "two piece",
  "three piece",
  "kaftan",
  "midi dress",
  "pant",
  "shirt",
];

const products = [
  {
    id: 1,
    name: "Noor in Blue",
    category: "Three Piece",
    price: 3620,
    oldPrice: null,
    rating: 0,
    reviews: 0,
    image: ThreeImg1,
    badge: null,
    outOfStock: false,
  },
  {
    id: 2,
    name: "Sukoon",
    category: "Two Piece",
    price: 3200,
    oldPrice: null,
    rating: 0,
    reviews: 0,
    image: TwoImg1,
    badge: null,
    outOfStock: false,
  },
  {
    id: 3,
    name: "Lime Lustre",
    category: "Two Piece",
    price: 3480,
    oldPrice: null,
    rating: 0,
    reviews: 0,
    image: TwoImg2,
    badge: null,
    outOfStock: false,
  },
  {
    id: 4,
    name: "Blush Gardenia",
    category: "Three Piece",
    price: 3480,
    oldPrice: null,
    rating: 0,
    reviews: 0,
    image: ThreeImg2,
    badge: null,
    outOfStock: false,
  },
  {
    id: 5,
    name: "Sapphire Ombré",
    category: "Two Piece",
    price: 3200,
    oldPrice: null,
    rating: 0,
    reviews: 0,
    image: "/assets/shop/shop-5.jpg",
    badge: null,
    outOfStock: false,
  },
  {
    id: 6,
    name: "Antique Jade",
    category: "Two Piece",
    price: 4020,
    oldPrice: null,
    rating: 0,
    reviews: 0,
    image: "/assets/shop/shop-6.jpg",
    badge: null,
    outOfStock: false,
  },
  {
    id: 7,
    name: "Blossom",
    category: "Two Piece",
    price: 3415,
    oldPrice: 4000,
    rating: 0,
    reviews: 0,
    image: "/assets/shop/shop-7.jpg",
    badge: "-12%",
    outOfStock: false,
  },
  {
    id: 8,
    name: "Blush Grace",
    category: "Two Piece",
    price: 2904,
    oldPrice: 4000,
    rating: 0,
    reviews: 0,
    image: "/assets/shop/shop-8.jpg",
    badge: "-12%",
    outOfStock: true,
  },
  {
    id: 9,
    name: "Flax",
    category: "Pant",
    price: 1600,
    oldPrice: null,
    rating: 0,
    reviews: 0,
    image: "/assets/shop/shop-9.jpg",
    badge: null,
    outOfStock: false,
  },
  {
    id: 10,
    name: "daffodil",
    category: "Pant",
    price: 1600,
    oldPrice: null,
    rating: 0,
    reviews: 0,
    image: "/assets/shop/shop-10.jpg",
    badge: null,
    outOfStock: false,
  },
  {
    id: 11,
    name: "gfgfgfg",
    category: "Pant",
    price: 1600,
    oldPrice: null,
    rating: 0,
    reviews: 0,
    image: "/assets/shop/shop-11.jpg",
    badge: null,
    outOfStock: false,
  },
  {
    id: 12,
    name: "Mystic Night",
    category: "Midi Dress",
    price: 2816,
    oldPrice: 3200,
    rating: 0,
    reviews: 0,
    image: "/assets/shop/shop-12.jpg",
    badge: "-12%",
    outOfStock: true,
  },
  {
    id: 13,
    name: "ChickFit",
    category: "Shirt",
    price: 1600,
    oldPrice: null,
    rating: 0,
    reviews: 0,
    image: "/assets/shop/shop-13.jpg",
    badge: null,
    outOfStock: false,
  },
  {
    id: 14,
    name: "Sara",
    category: "Midi Dress",
    price: 2816,
    oldPrice: 3200,
    rating: 0,
    reviews: 0,
    image: "/assets/shop/shop-14.jpg",
    badge: "-12%",
    outOfStock: false,
  },
  {
    id: 15,
    name: "Velora",
    category: "Kaftan",
    price: 3000,
    oldPrice: null,
    rating: 0,
    reviews: 0,
    image: "/assets/shop/shop-15.jpg",
    badge: null,
    outOfStock: false,
  },
  {
    id: 16,
    name: "Velora",
    category: "Two Piece",
    price: 2904,
    oldPrice: 4000,
    rating: 0,
    reviews: 0,
    image: "/assets/shop/shop-16.jpg",
    badge: "-12%",
    outOfStock: false,
  },
  {
    id: 17,
    name: "Floria",
    category: "Two Piece",
    price: 3415,
    oldPrice: 4000,
    rating: 0,
    reviews: 0,
    image: "/assets/shop/shop-17.jpg",
    badge: "-12%",
    outOfStock: false,
  },
  {
    id: 18,
    name: "Luminara",
    category: "Two Piece",
    price: 2816,
    oldPrice: 3200,
    rating: 0,
    reviews: 0,
    image: "/assets/shop/shop-18.jpg",
    badge: "-12%",
    outOfStock: false,
  },
  {
    id: 19,
    name: "Artistry",
    category: "Two Piece",
    price: 2711,
    oldPrice: 3200,
    rating: 0,
    reviews: 0,
    image: "/assets/shop/shop-19.jpg",
    badge: "-12%",
    outOfStock: false,
  },
  {
    id: 20,
    name: "Lily Whisper",
    category: "Two Piece",
    price: 2711,
    oldPrice: 3200,
    rating: 0,
    reviews: 0,
    image: "/assets/shop/shop-20.jpg",
    badge: "-12%",
    outOfStock: true,
  },
];

export default function ShopPage() {
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);

  const handleCategoryChange = (category: string) => {
    setSelectedCategories((prev) =>
      prev.includes(category)
        ? prev.filter((item) => item !== category)
        : [...prev, category]
    );
  };

  const filteredProducts = useMemo(() => {
    if (selectedCategories.length === 0) return products;

    return products.filter((product) =>
      selectedCategories.some(
        (category) =>
          product.category.toLowerCase() === category.toLowerCase()
      )
    );
  }, [selectedCategories]);

  return (
    <section className="bg-[#f5f5f5]">
      <div className="p-[60px]">
        <h1 className="mt-[20px] text-2xl md:text-[50.242px] lg:text-[98.242px] font-inter">
          Shop what you love.
        </h1>

        <div className="mt-8 md:mt-10 flex flex-col md:flex-row items-start gap-6 md:gap-7 xl:gap-8">
          {/* Sidebar */}
          <aside className="w-[230px] shrink-0">
            <div className="relative mb-6">
              <Search className="absolute left-4 top-1/2 h-[22px] w-[22px] -translate-y-1/2 text-[#9ca3af]" />
              <input
                type="text"
                placeholder="Search products..."
                className="h-[58px] w-full rounded-[14px] border border-[#e3e3e3] bg-white pl-[46px] pr-4 text-[16px] text-[#374151] outline-none placeholder:text-[#9ca3af]"
              />
            </div>

            <div className="rounded-[18px] border border-[#dddddd] bg-white px-[24px] py-[24px] shadow-[0_1px_2px_rgba(0,0,0,0.04)]">
              <h2 className="mb-8 text-[18px] font-semibold text-[#111827]">
                Categories
              </h2>

              <div className="space-y-8">
                {categories.map((category) => (
                  <label
                    key={category}
                    className="flex cursor-pointer items-center gap-4"
                  >
                    <input
                      type="checkbox"
                      checked={selectedCategories.includes(category)}
                      onChange={() => handleCategoryChange(category)}
                      className="h-[22px] w-[22px] rounded-[6px] border border-[#d1d5db] text-black focus:ring-0"
                    />
                    <span className="text-[16px] font-medium capitalize text-[#374151]">
                      {category}
                    </span>
                  </label>
                ))}
              </div>
            </div>
          </aside>

          {/* Products */}
          <div className="flex-1">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-4 gap-y-4 md:gap-x-5 md:gap-y-5">
              {filteredProducts.map((product) => (
                <div
                  key={product.id}
                  className="group relative overflow-hidden rounded-b-[18px] border border-[#dddddd] bg-white shadow-sm hover:shadow-md transition-all duration-300"
                >
                  {/* Image */}
                  <div className="relative overflow-hidden bg-gray-50">
                    <Link href={`/shop/${product.id}`}>
                      <Image
                        src={product.image}
                        alt={product.name}
                        width={800}
                        height={800}
                        className={`h-[300px] w-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-110 ${
                          product.outOfStock ? "opacity-60" : ""
                        }`}
                      />
                    </Link>

                    {/* Out of stock */}
                    {product.outOfStock && (
                      <div className="absolute inset-0 flex items-center justify-center bg-black/45">
                        <span className="rounded-lg bg-white px-3 py-1.5 text-sm font-semibold text-gray-800">
                          Out of Stock
                        </span>
                      </div>
                    )}

                    {/* Discount */}
                    {product.badge && !product.outOfStock && (
                      <div className="absolute left-2 top-2 rounded-full bg-red-500 px-2 py-1 text-xs font-semibold text-white">
                        {product.badge}
                      </div>
                    )}

                    {/* Add to Cart */}
                    {!product.outOfStock && (
                      <div className="absolute inset-x-2 bottom-2 translate-y-0 opacity-100 transition-all duration-300 md:translate-y-full md:opacity-0 md:group-hover:translate-y-0 md:group-hover:opacity-100">
                        <button className="flex w-full cursor-pointer items-center justify-center gap-2 rounded-lg bg-gray-900 px-3 py-2 text-sm font-medium text-white shadow-md hover:shadow-lg">
                          <Plus className="h-4 w-4" />
                          Add to Cart
                        </button>
                      </div>
                    )}
                  </div>

                  {/* Content */}
                  <div className="space-y-2 p-4">
                    <div className="space-y-0.5">
                      <p className="text-xs font-medium capitalize text-gray-500">
                        {product.category}
                      </p>

                      <p className="line-clamp-2 text-sm font-semibold text-gray-900">
                        {product.name}
                      </p>
                    </div>

                    {/* Rating */}
                    <div className="flex items-center gap-1">
                      <div className="flex items-center gap-0.5">
                        <Star className="h-3.5 w-3.5 fill-yellow-400 text-yellow-400" />
                        <span className="text-xs font-medium text-gray-700">
                          {product.rating}
                        </span>
                      </div>

                      <span className="text-xs text-gray-500">
                        ({product.reviews})
                      </span>
                    </div>

                    {/* Price */}
                    <div className="flex items-center gap-2">
                      <span className="text-base font-bold text-gray-900">
                        ৳{product.price}
                      </span>

                      {product.oldPrice && (
                        <span className="text-sm text-gray-400 line-through">
                          ৳{product.oldPrice}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}