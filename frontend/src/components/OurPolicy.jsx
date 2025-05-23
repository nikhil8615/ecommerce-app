import React, { useContext } from "react";
import { assets } from "../assets/assets";
import { ShopContext } from "../context/ShopContext";
import img from "../assets/images_customer.png";
import img2 from "../assets/exchange_image_icon.png";

const OurPolicy = () => {
  const { theme } = useContext(ShopContext); // Get theme from context

  return (
    <div
      className={`flex flex-col sm:flex-row justify-around gap-12 sm:gap-2 text-center py-20 text-xs sm:text-sm md:text-base ${
        theme === "dark" ? "text-white" : "text-gray-700"
      }`} // Conditional text color
    >
      <div>
        <img
          src={theme === "dark" ? img2 : assets.exchange_icon}
          className="w-12 m-auto mb-5"
          alt=""
        />
        <p className="font-semibold">Easy Exchange Policy</p>
        <p className="text-gray-400">We offer hassle free exchange policy</p>
      </div>
      <div>
        <img src={assets.quality_icon} className="w-12 m-auto mb-5" alt="" />
        <p className="font-semibold">7 Days Return Policy</p>
        <p className="text-gray-400">We provide 7 days free return policy</p>
      </div>
      <div>
        <img
          src={theme === "dark" ? img : assets.support_img}
          className="w-12 m-auto mb-5"
          alt=""
        />
        <p className="font-semibold">Best Customer Support</p>
        <p className="text-gray-400">we provide 24/7 customer support</p>
      </div>
    </div>
  );
};

export default OurPolicy;
