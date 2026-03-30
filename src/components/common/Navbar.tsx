"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Handbag, ChevronDown, Menu, X, Globe } from "lucide-react";

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
  const router = useRouter();

  // Load user
  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) setUser(JSON.parse(storedUser));
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("user");
    setUser(null);
    router.push("/login");
  };

  const shopCategories = [
    { name: "ONE PIECE", href: "/shop?categories=one-piece", delay: "0ms" },
    { name: "TWO PIECE", href: "/shop?categories=two-piece", delay: "100ms" },
    { name: "THREE PIECE", href: "/shop?categories=three-piece", delay: "200ms" },
    { name: "KAFTAN", href: "/shop?categories=kaftan", delay: "300ms" },
    { name: "MIDI DRESS", href: "/shop?categories=midi-dress", delay: "400ms" },
    { name: "PANT", href: "/shop?categories=pant", delay: "500ms" },
    { name: "SHIRT", href: "/shop?categories=shirt", delay: "600ms" },
  ];

  const languages = [
    { name: "ENGLISH", code: "en", delay: "0ms" },
    { name: "BENGALI", code: "bn", delay: "100ms" },
    { name: "ARABIC", code: "ar", delay: "200ms" },
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
          {/* LOGO */}
          <Link href="/" className="flex-shrink-0">
            {/* <Image
              src="https://server.vlada.store/assets/logos/logo-colored.png"
              alt="Logo"
              width={120}
              height={40}
              className="w-[100px] h-auto"
              priority
            /> */}
            <h1 className="text-xl font-bold uppercase text-gray-800 hover:text-gray-600 transition-colors">Veloura</h1>
          </Link>

          {/* DESKTOP NAVIGATION */}
          <div className="hidden md:flex md:items-center md:space-x-8">
            <Link
              href="/"
              className="text-gray-800 hover:text-gray-600 px-3 py-2 text-sm font-medium tracking-wide transition-colors duration-200 uppercase"
            >
              HOME
            </Link>

            {/* Shop Dropdown */}
            <div className="relative group">
              <button
                className="text-gray-800 hover:text-gray-600 px-3 py-2 text-sm font-medium tracking-wide transition-colors duration-200 uppercase flex items-center gap-1"
                onMouseEnter={() => setIsShopDropdownOpen(true)}
                onMouseLeave={() => setIsShopDropdownOpen(false)}
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
          </div>

          {/* RIGHT SECTION - Desktop */}
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
                className="text-sm text-gray-800 hover:text-gray-600 transition-colors"
              >
                Login
              </Link>
            )}
            
            {/* Language Dropdown - Beside cart icon */}
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
                          // Handle language change here
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

            <Link href="/cart" className="relative">
              <Handbag className="h-6 w-6 text-gray-800 hover:text-gray-600 transition-colors" />
            </Link>
          </div>

          {/* MOBILE MENU BUTTONS */}
          <div className="md:hidden flex items-center space-x-4">
            {/* Language icon for mobile */}
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
                          // Handle language change here
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
            <Link href="/cart" className="relative">
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

        {/* MOBILE MENU */}
        <div
          className={`md:hidden transition-all duration-300 ease-in-out overflow-hidden ${
            isMobileMenuOpen ? "max-h-screen opacity-100 mt-4" : "max-h-0 opacity-0"
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

            {/* Mobile Shop Accordion */}
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
                  isShopDropdownOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
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

            {/* Mobile Language Section - Removed from here */}
            {/* Auth Section - Only login/logout now */}
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
                className="text-gray-800 hover:text-gray-600 block px-3 py-2 text-base font-medium transition-colors duration-200"
                onClick={toggleMobileMenu}
              >
                Login
              </Link>
            )}

            {/* Mobile CTA Button */}
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