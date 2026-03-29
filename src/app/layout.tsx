import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "sonner";
import ReduxProvider from "@/redux/ReduxProvider";

const inter = Inter({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
});

export const metadata: Metadata = {
  title: "VELOURA",
  icons: "/favicon.ico",
  description: "VELOURA - Elegant Dresses for Every Occasion. Veloura offers a curated collection of stylish and elegant dresses designed for every occasion. Blending premium quality with modern trends, we create pieces that make you feel confident, comfortable, and effortlessly beautiful.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.className} antialiased`}
        suppressHydrationWarning
      >
        <Toaster position="bottom-right" richColors />
        <ReduxProvider>{children}</ReduxProvider>
      </body>
    </html>
  );
}

