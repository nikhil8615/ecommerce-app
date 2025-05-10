import React, { useContext } from "react";
import { assets } from "../assets/assets";
import { ShopContext } from "../context/ShopContext";

const Hero = () => {
  const { theme } = useContext(ShopContext); // Get the theme from the context

  return (
    <div className="flex flex-col sm:flex-row border border-gray-400">
      {/* Hero Left Side*/}
      <div className="w-full sm:w-1/2 flex items-center justify-center py-10 sm:py-0">
        <div
          className={`${theme === "dark" ? "text-white" : "text-[#414141]"}`}
        >
          <div className="flex items-center gap-2">
            <p
              className={`w-8 md:w-11 h-[2px] ${
                theme === "dark" ? "bg-white" : "bg-[#414141]"
              }`}
            ></p>
            <p
              className={`font-medium text-sm md:text-base ${
                theme === "dark" ? "text-white" : ""
              }`}
            >
              OUR BESTSELLERS
            </p>
          </div>
          <h1
            className={`prata-regular text-3xl sm:py-3 lg:text-5xl leading-relaxed ${
              theme === "dark" ? "text-white" : ""
            }`}
          >
            Latest Arrivals
          </h1>
          <div className="flex items-center gap-2">
            <p
              className={`font-semibold text-sm md:text-base ${
                theme === "dark" ? "text-white" : ""
              }`}
            >
              SHOP NOW
            </p>
            <p
              className={`w-8 md:w-11 h-[1px] ${
                theme === "dark" ? "bg-white" : "bg-[#414141]"
              }`}
            ></p>
          </div>
        </div>
      </div>
      <img className="w-full sm:w-1/2" src={assets.hero_img} alt="" />
    </div>
  );
};

export default Hero;
