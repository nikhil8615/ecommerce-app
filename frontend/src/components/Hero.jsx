import React, { useContext, useState, useEffect } from "react";
import { assets } from "../assets/assets";
import { ShopContext } from "../context/ShopContext";

const HeroSkeleton = ({ theme }) => {
  return (
    <div className="flex flex-col sm:flex-row border border-gray-400 animate-pulse">
      <div className="w-full sm:w-1/2 flex items-center justify-center py-10 sm:py-0">
        <div className="space-y-4">
          <div
            className={`h-4 w-32 rounded-md ${
              theme === "dark" ? "bg-gray-700" : "bg-gray-200"
            }`}
          />
          <div
            className={`h-12 w-48 rounded-md ${
              theme === "dark" ? "bg-gray-700" : "bg-gray-200"
            }`}
          />
          <div
            className={`h-4 w-24 rounded-md ${
              theme === "dark" ? "bg-gray-700" : "bg-gray-200"
            }`}
          />
        </div>
      </div>
      <div
        className={`w-full sm:w-1/2 aspect-square ${
          theme === "dark" ? "bg-gray-700" : "bg-gray-200"
        }`}
      />
    </div>
  );
};

const Hero = () => {
  const { theme } = useContext(ShopContext);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <HeroSkeleton theme={theme} />;
  }

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
