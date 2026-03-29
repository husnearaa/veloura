"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import {
  ChevronDown,
  Globe,
} from "lucide-react";

interface UserData {
  email: string;
  role: "user" | "admin";
  name: string;
  isLoggedIn: boolean;
  loginTime: string;
}

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [user, setUser] = useState<UserData | null>(null);
  const [language, setLanguage] = useState<"en" | "bn">("en");

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

  const navLinks = [
    { name: "HOME", href: "/" },
    { name: "SHOP", href: "/shop" },
  ];

  const shopItems = [
    "ONE PIECE",
    "TWO PIECE",
    "THREE PIECE",
    "KAFTAN",
    "MIDI DRESS",
    "PANT",
    "SHIRT",
  ];

  return (
    <>
      <nav className="fixed top-0 left-0 w-full bg-white border-b z-50">
        <div className="container mx-auto flex items-center justify-between h-16 px-4">
          
          {/* LOGO */}
          <Link href="/">
            <Image
              src="/greetely.png"
              alt="Logo"
              width={120}
              height={40}
              className="object-contain"
            />
          </Link>

          {/* DESKTOP NAV */}
          <div className="hidden md:flex items-center gap-8">
            
            {/* Home */}
            <Link
              href="/"
              className="text-sm font-medium text-gray-600 hover:text-black"
            >
              HOME
            </Link>

            {/* SHOP DROPDOWN */}
            <div className="relative group">
              <button className="flex items-center gap-1 text-sm font-medium text-gray-600 hover:text-black">
                SHOP
                <ChevronDown size={16} className="group-hover:rotate-180 transition" />
              </button>

              {/* Dropdown */}
              <div className="absolute left-0 top-full mt-3 w-52 bg-white border rounded-md shadow-xl opacity-0 invisible group-hover:visible group-hover:opacity-100 group-hover:translate-y-0 translate-y-2 transition-all duration-300">
                {shopItems.map((item, i) => (
                  <Link
                    key={i}
                    href={`/shop/${item.toLowerCase().replace(/\s+/g, "-")}`}
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    {item}
                  </Link>
                ))}
              </div>
            </div>

            {/* LANGUAGE */}
            <div className="relative group">
              <button className="flex items-center gap-1 text-sm text-gray-600 hover:text-black">
                <Globe size={18} />
                {language.toUpperCase()}
                <ChevronDown size={16} />
              </button>

              <div className="absolute right-0 top-full mt-3 w-32 bg-white border rounded-md shadow-xl opacity-0 invisible group-hover:visible group-hover:opacity-100 group-hover:translate-y-0 translate-y-2 transition-all duration-300">
                <button
                  onClick={() => setLanguage("en")}
                  className="block w-full text-left px-4 py-2 text-sm hover:bg-gray-100"
                >
                  English
                </button>
                <button
                  onClick={() => setLanguage("bn")}
                  className="block w-full text-left px-4 py-2 text-sm hover:bg-gray-100"
                >
                  বাংলা
                </button>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="hidden md:flex items-center gap-4">
            {user ? (
              <div className="relative">
                <button
                  onClick={handleLogout}
                  className="text-sm bg-black text-white px-4 py-2 rounded-md"
                >
                  {user.name}
                </button>
              </div>
            ) : (
              <Link
                href="/login"
                className="text-sm text-orange-500 font-semibold"
              >
                LOGIN
              </Link>
            )}
          </div>

          {/* MOBILE BUTTON */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            ☰
          </button>
        </div>
      </nav>

      {/* MOBILE MENU */}
      {isMenuOpen && (
        <div className="fixed top-16 left-0 w-full bg-white border-t z-40 md:hidden">
          {navLinks.map((link, i) => (
            <Link
              key={i}
              href={link.href}
              onClick={() => setIsMenuOpen(false)}
              className="block px-6 py-4 border-b text-sm"
            >
              {link.name}
            </Link>
          ))}
        </div>
      )}

      <div className="h-16" />
    </>
  );
}