import Image from "next/image";
import React from "react";

const HeroSection = () => {
  return (
    <div className="relative bg-heroYellow h-screen flex justify-center items-center overflow-hidden">
      <div className="inset-0 flex justify-center items-center px-4 py-16 ">
        <Image
          src="/images/Shape.png"
          alt="#"
          width={1609}
          height={970}
          objectFit="cover"
          className="opacity-70 "
        />
      </div>
      <div className="absolute inset-0 flex justify-center items-center z-10">
        <span className="font-manrope font-bold text-5xl md:text-7xl lg:text-8xl text-center">
          Let’s create something <span className="block">great together.</span>
        </span>
      </div>
    </div>
  );
};
export default HeroSection;
