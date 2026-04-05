"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Handbag, ChevronDown, Menu, X, Globe } from "lucide-react";
import { getDemoCartCount } from "@/lib/demo-cart";

interface UserData {
  email: string;
  role: "user" | "admin";
  name: string;
  isLoggedIn: boolean;
  loginTime: string;
}

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isShopDropdownOpen, setIsShopDropdownOpen] = useState(false);
  const [isLanguageDropdownOpen, setIsLanguageDropdownOpen] = useState(false);
  const [user, setUser] = useState<UserData | null>(null);
  const [cartCount, setCartCount] = useState(0);
  const router = useRouter();

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) setUser(JSON.parse(storedUser));

    const updateCartCount = () => {
      setCartCount(getDemoCartCount());
    };

    updateCartCount();

    window.addEventListener("cartUpdated", updateCartCount);

    return () => {
      window.removeEventListener("cartUpdated", updateCartCount);
    };
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("user");
    setUser(null);
    router.push("/login");
  };

  const shopCategories = [
    { name: "ONE PIECE", href: "/shop?categories=one-piece", delay: "0ms" },
    { name: "TWO PIECE", href: "/shop?categories=two-piece", delay: "100ms" },
    {
      name: "THREE PIECE",
      href: "/shop?categories=three-piece",
      delay: "200ms",
    },
    { name: "KAFTAN", href: "/shop?categories=kaftan", delay: "300ms" },
    { name: "MIDI DRESS", href: "/shop?categories=midi-dress", delay: "400ms" },
    { name: "PANT", href: "/shop?categories=pant", delay: "500ms" },
    { name: "SHIRT", href: "/shop?categories=shirt", delay: "600ms" },
  ];

  const languages = [
    { name: "ENGLISH", code: "en", delay: "0ms" },
    { name: "BENGALI", code: "bn", delay: "100ms" },
  ];

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    if (isShopDropdownOpen) setIsShopDropdownOpen(false);
    if (isLanguageDropdownOpen) setIsLanguageDropdownOpen(false);
  };

  const toggleShopDropdown = () => {
    setIsShopDropdownOpen(!isShopDropdownOpen);
    if (isLanguageDropdownOpen) setIsLanguageDropdownOpen(false);
  };

  const toggleLanguageDropdown = () => {
    setIsLanguageDropdownOpen(!isLanguageDropdownOpen);
    if (isShopDropdownOpen) setIsShopDropdownOpen(false);
  };

  return (
    <nav className="bg-white py-6 sticky top-0 z-50">
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex-shrink-0">
            <h1 className="text-xl font-bold uppercase text-gray-800 hover:text-gray-600 transition-colors">
              Veloura
            </h1>
          </Link>

          <div className="hidden md:flex md:items-center md:space-x-8">
            <Link
              href="/"
              className="text-gray-800 hover:text-gray-600 px-3 py-2 text-sm font-medium tracking-wide transition-colors duration-200 uppercase"
            >
              HOME
            </Link>

            <div className="relative group">
              <button
                className="text-gray-800 hover:text-gray-600 px-3 py-2 text-sm font-medium tracking-wide transition-colors duration-200 uppercase flex items-center gap-1"
                onMouseEnter={() => setIsShopDropdownOpen(true)}
                onMouseLeave={() => setIsShopDropdownOpen(false)}
                onClick={() => router.push("/shop")}
              >
                SHOP
                <ChevronDown className="h-4 w-4 transition-transform duration-300 group-hover:rotate-180" />
              </button>

              <div
                className="absolute left-0 mt-2 w-64 bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50"
                onMouseEnter={() => setIsShopDropdownOpen(true)}
                onMouseLeave={() => setIsShopDropdownOpen(false)}
              >
                <div className="py-2">
                  {shopCategories.map((category) => (
                    <Link
                      key={category.name}
                      href={category.href}
                      className="block px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 hover:text-gray-900 transition-colors duration-200 uppercase"
                      style={{ animationDelay: category.delay }}
                    >
                      {category.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            <Link
              href="/contact"
              className="text-gray-800 hover:text-gray-600 px-3 py-2 text-sm font-medium tracking-wide transition-colors duration-200 uppercase"
            >
              CONTACT
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-6">
            {user ? (
              <div className="flex items-center space-x-4">
                <span className="text-sm text-gray-600">Hi, {user.name}</span>
                {user.role === "admin" && (
                  <Link
                    href="/admin/dashboard"
                    className="text-gray-800 hover:text-gray-600 transition-colors"
                  >
                    Dashboard
                  </Link>
                )}
                <button
                  onClick={handleLogout}
                  className="text-sm text-gray-800 hover:text-gray-600 transition-colors"
                >
                  Logout
                </button>
              </div>
            ) : (
              <Link
                href="/login"
                className="text-sm text-gray-800 hover:text-gray-600 transition-colors uppercase mt-2"
              >
                Login
              </Link>
            )}

            <div className="relative">
              <button
                onClick={toggleLanguageDropdown}
                className="text-gray-800 hover:text-gray-600 transition-colors focus:outline-none mt-2"
              >
                <Globe className="h-6 w-6" />
              </button>

              {isLanguageDropdownOpen && (
                <div
                  className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 transition-all duration-300 z-50"
                  onMouseLeave={() => setIsLanguageDropdownOpen(false)}
                >
                  <div className="py-2">
                    {languages.map((language) => (
                      <button
                        key={language.code}
                        onClick={() => {
                          console.log(`Language changed to: ${language.code}`);
                          setIsLanguageDropdownOpen(false);
                        }}
                        className="block w-full text-left px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 hover:text-gray-900 transition-colors duration-200 uppercase"
                        style={{ animationDelay: language.delay }}
                      >
                        {language.name}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <Link href="/cart" className="relative inline-flex">
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 z-20 flex h-5 min-w-5 items-center justify-center rounded-full bg-black px-1 text-[10px] font-semibold leading-none text-white">
                  {cartCount > 99 ? "99+" : cartCount}
                </span>
              )}
              <Handbag className="h-6 w-6 text-gray-800 hover:text-gray-600 transition-colors" />
            </Link>
          </div>

          <div className="md:hidden flex items-center space-x-4">
            <div className="relative">
              <button
                onClick={toggleLanguageDropdown}
                className="text-gray-800 hover:text-gray-600 transition-colors focus:outline-none mt-2"
                aria-label="Language selector"
              >
                <Globe className="h-6 w-6" />
              </button>

              {isLanguageDropdownOpen && (
                <div
                  className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 transition-all duration-300 z-50"
                  onMouseLeave={() => setIsLanguageDropdownOpen(false)}
                >
                  <div className="py-2">
                    {languages.map((language) => (
                      <button
                        key={language.code}
                        onClick={() => {
                          console.log(`Language changed to: ${language.code}`);
                          setIsLanguageDropdownOpen(false);
                        }}
                        className="block w-full text-left px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 hover:text-gray-900 transition-colors duration-200 uppercase"
                        style={{ animationDelay: language.delay }}
                      >
                        {language.name}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <Link href="/cart" className="relative inline-flex">
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 z-20 flex h-5 min-w-5 items-center justify-center rounded-full bg-black px-1 text-[10px] font-semibold leading-none text-white">
                  {cartCount > 99 ? "99+" : cartCount}
                </span>
              )}
              <Handbag className="h-6 w-6 text-gray-800" />
            </Link>

            <button
              onClick={toggleMobileMenu}
              className="text-gray-800 focus:outline-none"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        <div
          className={`md:hidden transition-all duration-300 ease-in-out overflow-hidden ${
            isMobileMenuOpen
              ? "max-h-screen opacity-100 mt-4"
              : "max-h-0 opacity-0"
          }`}
        >
          <div className="px-2 space-y-1 border-t border-gray-100 pt-4">
            <Link
              href="/"
              className="text-gray-800 hover:text-gray-600 block px-3 py-2 text-base font-medium tracking-wide transition-colors duration-200 uppercase"
              onClick={toggleMobileMenu}
            >
              HOME
            </Link>

            <Link
              href="/contact"
              className="text-gray-800 hover:text-gray-600 block px-3 py-2 text-base font-medium tracking-wide transition-colors duration-200 uppercase"
              onClick={toggleMobileMenu}
            >
              CONTACT
            </Link>

            <div>
              <button
                onClick={toggleShopDropdown}
                className="text-gray-800 hover:text-gray-600 w-full flex items-center justify-between px-3 py-2 text-base font-medium tracking-wide transition-colors duration-200 uppercase"
              >
                SHOP
                <ChevronDown
                  className={`h-5 w-5 transition-transform duration-300 ${
                    isShopDropdownOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              <div
                className={`transition-all duration-300 ease-in-out overflow-hidden ${
                  isShopDropdownOpen
                    ? "max-h-96 opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                <div className="pl-6 space-y-1 mt-1">
                  {shopCategories.map((category) => (
                    <Link
                      key={category.name}
                      href={category.href}
                      className="text-gray-600 hover:text-gray-900 block px-3 py-2 text-sm transition-colors duration-200 capitalize"
                      onClick={() => {
                        toggleMobileMenu();
                        toggleShopDropdown();
                      }}
                    >
                      {category.name.toLowerCase()}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {user ? (
              <div className="space-y-2 pt-2">
                <div className="px-3 py-2 text-sm text-gray-600">
                  Signed in as {user.name}
                </div>
                {user.role === "admin" && (
                  <Link
                    href="/admin/dashboard"
                    className="text-gray-800 hover:text-gray-600 block px-3 py-2 text-base font-medium transition-colors duration-200"
                    onClick={toggleMobileMenu}
                  >
                    Dashboard
                  </Link>
                )}
                <button
                  onClick={() => {
                    handleLogout();
                    toggleMobileMenu();
                  }}
                  className="text-gray-800 hover:text-gray-600 block w-full text-left px-3 py-2 text-base font-medium transition-colors duration-200"
                >
                  Logout
                </button>
              </div>
            ) : (
              <Link
                href="/login"
                className="text-gray-800 hover:text-gray-600 block px-3 py-2 text-base font-medium transition-colors duration-200 uppercase"
                onClick={toggleMobileMenu}
              >
                Login
              </Link>
            )}

            <div className="pt-4 pb-2">
              <Link
                href="/shop"
                className="w-full block text-center bg-black text-white px-6 py-3 text-sm font-medium tracking-wide hover:bg-gray-800 transition-colors duration-200 rounded-sm"
                onClick={toggleMobileMenu}
              >
                ORDER NOW
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}