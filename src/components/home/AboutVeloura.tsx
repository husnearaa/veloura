import Link from "next/link";
import React from "react";

const AboutVeloura = () => {
  return (
    <section className="pt-[100px] md:pt-[160px] pb-[50px] md:pb-[50px] w-full">
      <div className="max-w-[973px] w-full mx-auto">
        <span className="block text-center font-inter text-xs uppercase leading-none md:leading-3 mb-6 tracking-[1px]">
          Fashion that feels as good as it looks
        </span>
        <p className="text-lg text-primary font-inter md:text-[28.594px] leading-7 md:leading-[41.25px] text-center">
          Welcome to Vlada - Your Fashion Destination
        </p>{" "}
        <p className="text-lg text-primary font-inter md:text-[28.594px] leading-7 md:leading-[41.25px] text-center">
          We create unique designer collections for women who love trendy
          styles and weather-friendly fabrics. With our own production house,
          sample zone and a talented team of leading designers, we work every
          day to understand what our customers love and how we can deliver the
          best quality fashion for them.
        </p>{" "}
        <div className="flex justify-center">
          <Link
            className="border mt-3 border-[#E5E7EB] hover:border-[#7a7b7c] py-3 px-4 rounded-2x1 text-center font-inter text-xs uppercase leading-3 mb-6 tracking-[1px] pt-4 transition-all duration-300"
            href="/"
          >
            Explore below
          </Link>
        </div>
      </div>
    </section>
  );
};

export default AboutVeloura;
