"use client";

import { useMemo, useState, useEffect } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import {
  Search,
  Plus,
  Star,
  Funnel,
  ChevronDown,
  X,
  Minus,
  ShoppingBag,
  Zap,
} from "lucide-react";
import { addDemoCartItem } from "@/lib/demo-cart";

import ThreeImg1 from "@/assets/shop/three1.jpg";
import ThreeImg2 from "@/assets/shop/three2.jpg";
import TwoImg1 from "@/assets/shop/two1.jpg";
import TwoImg2 from "@/assets/shop/two2.jpg";
import TwoImg4 from "@/assets/shop/two4.jpg";

const categories = [
  "one piece",
  "two piece",
  "three piece",
  "kaftan",
  "midi dress",
  "pant",
  "shirt",
];

type Product = {
  id: number;
  name: string;
  category: string;
  price: number;
  oldPrice: number | null;
  rating: number;
  reviews: number;
  image: string | StaticImageData;
  badge: string | null;
  outOfStock: boolean;
};

const products: Product[] = [
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
    name: "Velora",
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
    name: "Whisperlight",
    category: "Two Piece",
    price: 3520,
    oldPrice: null,
    rating: 0,
    reviews: 0,
    image: TwoImg4,
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
    image: TwoImg2,
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

const sizes = ["XS", "S", "M", "L", "XL", "2XL"];

export default function ShopPage() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
  const [mobileCategoryOpen, setMobileCategoryOpen] = useState(true);
  const [tempSelectedCategories, setTempSelectedCategories] = useState<string[]>(
    []
  );

  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [selectedSize, setSelectedSize] = useState<string>("");
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    const categoryFromUrl = searchParams.get("categories");

    if (categoryFromUrl) {
      const formattedCategory = categoryFromUrl.replace(/-/g, " ").toLowerCase();

      if (categories.includes(formattedCategory)) {
        setSelectedCategories([formattedCategory]);
        setTempSelectedCategories([formattedCategory]);
      }
    } else {
      setSelectedCategories([]);
      setTempSelectedCategories([]);
    }
  }, [searchParams]);

  useEffect(() => {
    if (selectedProduct) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [selectedProduct]);

  const handleCategoryChange = (category: string) => {
    setSelectedCategories((prev) =>
      prev.includes(category)
        ? prev.filter((item) => item !== category)
        : [...prev, category]
    );
  };

  const handleTempCategoryChange = (category: string) => {
    setTempSelectedCategories((prev) =>
      prev.includes(category)
        ? prev.filter((item) => item !== category)
        : [...prev, category]
    );
  };

  const openMobileFilters = () => {
    setTempSelectedCategories(selectedCategories);
    setMobileFiltersOpen(true);
  };

  const applyMobileFilters = () => {
    setSelectedCategories(tempSelectedCategories);
    setMobileFiltersOpen(false);
  };

  const clearMobileFilters = () => {
    setTempSelectedCategories([]);
    setSelectedCategories([]);
    setSearchTerm("");
    setMobileFiltersOpen(false);
  };

  const openProductDialog = (product: Product) => {
    setSelectedProduct(product);
    setSelectedSize("");
    setQuantity(1);
  };

  const closeProductDialog = () => {
    setSelectedProduct(null);
    setSelectedSize("");
    setQuantity(1);
  };

  const getImageSrc = (image: string | StaticImageData) => {
    return typeof image === "string" ? image : image.src;
  };

  const handleAddToCart = () => {
    if (!selectedProduct || !selectedSize) return;

    addDemoCartItem({
      productId: selectedProduct.id,
      name: selectedProduct.name,
      price: selectedProduct.price,
      image: getImageSrc(selectedProduct.image),
      size: selectedSize,
      quantity,
    });

    closeProductDialog();
  };

  const handleBuyNow = () => {
    if (!selectedProduct || !selectedSize) return;

    addDemoCartItem({
      productId: selectedProduct.id,
      name: selectedProduct.name,
      price: selectedProduct.price,
      image: getImageSrc(selectedProduct.image),
      size: selectedSize,
      quantity,
    });

    closeProductDialog();
    router.push("/checkout");
  };

  const filteredProducts = useMemo(() => {
    const normalizedSearch = searchTerm.trim().toLowerCase();

    return products.filter((product) => {
      const matchesCategory =
        selectedCategories.length === 0 ||
        selectedCategories.some(
          (category) =>
            product.category.toLowerCase() === category.toLowerCase()
        );

      const isNumberSearch = !isNaN(Number(normalizedSearch));

      const matchesPrice =
        isNumberSearch &&
        (product.price === Number(normalizedSearch) ||
          product.oldPrice === Number(normalizedSearch));

      const matchesSearch =
        normalizedSearch === "" ||
        product.name.toLowerCase().includes(normalizedSearch) ||
        product.category.toLowerCase().includes(normalizedSearch) ||
        matchesPrice;

      return matchesCategory && matchesSearch;
    });
  }, [selectedCategories, searchTerm]);

  return (
    <>
      <section className="bg-[#f5f5f5]">
        <div className="p-[20px] md:p-[60px]">
          <h1 className="mt-[20px] text-2xl md:text-[50.242px] lg:text-[98.242px] font-inter">
            Shop what you love.
          </h1>

          <div className="mt-8 md:mt-10 flex flex-col md:flex-row items-start gap-6 md:gap-7 xl:gap-8">
            <aside className="w-full md:w-[230px] shrink-0">
              <div className="w-full md:hidden mb-6">
                <button
                  onClick={openMobileFilters}
                  className="w-full flex items-center justify-between p-4 bg-white rounded-[14px] shadow-sm border border-gray-200"
                >
                  <div className="flex items-center gap-3">
                    <Funnel className="w-5 h-5 text-gray-600" />
                    <span className="font-semibold text-gray-900">Filters</span>
                  </div>

                  <ChevronDown className="w-5 h-5 text-gray-600" />
                </button>
              </div>

              {mobileFiltersOpen && (
                <div className="fixed inset-0 z-50 md:hidden">
                  <div
                    className="absolute inset-0 bg-black/30"
                    onClick={() => setMobileFiltersOpen(false)}
                  />

                  <div className="absolute inset-x-0 bottom-0 top-0 bg-[#f5f5f5] flex flex-col rounded-t-[32px] overflow-hidden">
                    <div className="flex items-center justify-between px-6 py-8 bg-white border-b border-gray-200">
                      <h2 className="text-[18px] font-semibold text-[#111827]">
                        Filters
                      </h2>

                      <button onClick={() => setMobileFiltersOpen(false)}>
                        <X className="w-6 h-6 text-black" />
                      </button>
                    </div>

                    <div className="flex-1 overflow-y-auto px-6 py-6">
                      <div className="mb-8">
                        <h3 className="mb-4 text-[16px] font-semibold text-[#111827]">
                          Search
                        </h3>

                        <div className="relative">
                          <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
                          <input
                            type="text"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            placeholder="Search products..."
                            className="h-[52px] w-full rounded-[14px] border border-[#d9d9d9] bg-white pl-12 pr-4 text-[16px] text-[#374151] outline-none placeholder:text-[#9ca3af]"
                          />
                        </div>
                      </div>

                      <div>
                        <button
                          type="button"
                          onClick={() => setMobileCategoryOpen((prev) => !prev)}
                          className="mb-5 flex w-full items-center justify-between"
                        >
                          <span className="text-[16px] font-semibold text-[#111827]">
                            Categories
                          </span>

                          <ChevronDown
                            className={`h-5 w-5 text-black transition-transform duration-300 ${
                              mobileCategoryOpen ? "rotate-180" : ""
                            }`}
                          />
                        </button>

                        {mobileCategoryOpen && (
                          <div className="space-y-6">
                            {categories.map((category) => (
                              <label
                                key={category}
                                className="flex items-center gap-4 cursor-pointer"
                              >
                                <input
                                  type="checkbox"
                                  checked={tempSelectedCategories.includes(
                                    category
                                  )}
                                  onChange={() =>
                                    handleTempCategoryChange(category)
                                  }
                                  className="h-6 w-6 rounded-[6px] border border-[#cfd4dc] text-black focus:ring-0"
                                />

                                <span className="text-[16px] font-medium capitalize text-[#374151]">
                                  {category}
                                </span>
                              </label>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-3 border-t border-gray-200 bg-white p-6">
                      <button
                        onClick={clearMobileFilters}
                        className="h-[56px] rounded-[14px] border border-[#cfd4dc] bg-white text-[16px] font-semibold text-[#374151]"
                      >
                        Clear All
                      </button>

                      <button
                        onClick={applyMobileFilters}
                        className="h-[56px] rounded-[14px] bg-black text-[16px] font-semibold text-white"
                      >
                        Apply Filters
                      </button>
                    </div>
                  </div>
                </div>
              )}

              <div className="hidden md:block">
                <div className="relative mb-6">
                  <Search className="absolute left-4 top-1/2 h-[22px] w-[22px] -translate-y-1/2 text-[#9ca3af]" />
                  <input
                    type="text"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
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
              </div>
            </aside>

            <div className="flex-1 w-full">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-4 gap-y-4 md:gap-x-5 md:gap-y-5">
                {filteredProducts.map((product) => (
                  <div
                    key={product.id}
                    className="group relative w-full overflow-hidden rounded-b-[18px] border border-[#dddddd] bg-white shadow-sm hover:shadow-md transition-all duration-300"
                  >
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

                      {product.outOfStock && (
                        <div className="absolute inset-0 flex items-center justify-center bg-black/45">
                          <span className="rounded-lg bg-white px-3 py-1.5 text-sm font-semibold text-gray-800">
                            Out of Stock
                          </span>
                        </div>
                      )}

                      {product.badge && !product.outOfStock && (
                        <div className="absolute left-2 top-2 rounded-full bg-red-500 px-2 py-1 text-xs font-semibold text-white">
                          {product.badge}
                        </div>
                      )}

                      {!product.outOfStock && (
                        <div className="absolute inset-x-2 bottom-2 translate-y-0 opacity-100 transition-all duration-300 md:translate-y-full md:opacity-0 md:group-hover:translate-y-0 md:group-hover:opacity-100">
                          <button
                            onClick={() => openProductDialog(product)}
                            className="flex w-full cursor-pointer items-center justify-center gap-2 rounded-lg bg-gray-900 px-3 py-2 text-sm font-medium text-white shadow-md hover:shadow-lg"
                          >
                            <Plus className="h-4 w-4" />
                            Add to Cart
                          </button>
                        </div>
                      )}
                    </div>

                    <div className="space-y-2 p-4">
                      <div className="space-y-0.5">
                        <p className="text-xs font-medium capitalize text-gray-500">
                          {product.category}
                        </p>

                        <p className="line-clamp-2 text-sm font-semibold text-gray-900">
                          {product.name}
                        </p>
                      </div>

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

      {selectedProduct && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
          <div className="absolute inset-0" onClick={closeProductDialog} />

          <div className="relative z-10 w-full max-w-lg overflow-hidden rounded-[24px] bg-white shadow-2xl">
            <div className="flex items-center justify-between border-b border-gray-100 bg-gradient-to-r from-gray-50 to-white p-5">
              <h3 className="text-[20px] font-semibold text-gray-900">
                Customize Your Order
              </h3>

              <button
                onClick={closeProductDialog}
                className="rounded-full p-2 transition-colors duration-200 hover:bg-gray-100"
              >
                <X className="h-5 w-5 text-gray-600" />
              </button>
            </div>

            <div className="max-h-[70vh] space-y-6 overflow-y-auto p-6">
              <div className="flex items-start gap-4">
                <div className="relative h-24 w-24 overflow-hidden rounded-lg bg-gray-100 shadow-sm">
                  <Image
                    src={selectedProduct.image}
                    alt={selectedProduct.name}
                    fill
                    className="object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>

                <div className="flex-1 space-y-2">
                  <h4 className="line-clamp-2 text-lg font-semibold text-gray-900">
                    {selectedProduct.name}
                  </h4>

                  <p className="text-sm capitalize text-gray-500">
                    {selectedProduct.category}
                  </p>

                  <div className="flex items-center gap-2">
                    <p className="text-[18px] font-bold text-gray-900">
                      ৳{selectedProduct.price.toLocaleString()}
                    </p>

                    {selectedProduct.oldPrice && (
                      <s className="text-sm text-gray-500">
                        {selectedProduct.oldPrice} TK
                      </s>
                    )}
                  </div>
                </div>
              </div>

              <div className="space-y-3">
                <h5 className="font-medium text-gray-900">Select Options</h5>

                <div className="space-y-2">
                  <p className="text-sm font-medium capitalize text-gray-700">
                    Select size
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {sizes.map((size) => {
                      const isActive = selectedSize === size;

                      return (
                        <button
                          key={size}
                          onClick={() => setSelectedSize(size)}
                          className={`px-4 py-2 text-sm rounded-full border transition-all duration-200 capitalize ${
                            isActive
                              ? "border-blue-500 bg-blue-50 text-blue-600"
                              : "border-gray-200 text-gray-700 hover:border-blue-300 hover:bg-blue-50"
                          }`}
                        >
                          {size}
                        </button>
                      );
                    })}
                  </div>
                </div>
              </div>

              <div className="space-y-3">
                <h5 className="font-medium text-gray-900">Quantity</h5>

                <div className="flex w-fit items-center gap-3 rounded-lg bg-gray-50 p-2">
                  <button
                    onClick={() => setQuantity((prev) => Math.max(1, prev - 1))}
                    disabled={quantity === 1}
                    className="rounded-full p-2 transition-colors duration-200 hover:bg-gray-200 disabled:opacity-50"
                  >
                    <Minus className="h-4 w-4 text-gray-600" />
                  </button>

                  <input
                    readOnly
                    type="text"
                    value={quantity}
                    className="w-12 border-none bg-transparent text-center text-lg font-semibold outline-none"
                  />

                  <button
                    onClick={() => setQuantity((prev) => prev + 1)}
                    className="rounded-full p-2 transition-colors duration-200 hover:bg-gray-200"
                  >
                    <Plus className="h-4 w-4 text-gray-600" />
                  </button>
                </div>

                <p className="text-sm text-gray-500">41 items available</p>
              </div>

              <div className="flex gap-3 pt-4">
                <button
                  onClick={handleAddToCart}
                  disabled={!selectedSize}
                  className={`flex-1 rounded-lg py-3 font-medium flex items-center justify-center gap-2 transition-colors duration-200 ${
                    selectedSize
                      ? "bg-blue-600 text-white hover:bg-blue-700"
                      : "cursor-not-allowed bg-blue-200 text-white"
                  }`}
                >
                  <ShoppingBag className="h-5 w-5" />
                  Add to Cart
                </button>

                <button
                  onClick={handleBuyNow}
                  disabled={!selectedSize}
                  className={`rounded-lg px-6 py-3 font-medium flex items-center gap-2 transition-colors duration-200 ${
                    selectedSize
                      ? "bg-orange-500 text-white hover:bg-orange-600"
                      : "cursor-not-allowed bg-orange-200 text-white"
                  }`}
                >
                  <Zap className="h-5 w-5" />
                  Buy Now
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}