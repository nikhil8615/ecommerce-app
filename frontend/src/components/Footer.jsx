import React, { useContext } from "react";
import { assets } from "../assets/assets";
import { ShopContext } from "../context/ShopContext";
import img5 from "../assets/logo_white_text.png";

const Footer = () => {
  const { theme } = useContext(ShopContext); // Get theme from context

  return (
    <div>
      <div
        className={`flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm ${
          theme === "dark" ? "text-white" : "text-gray-700"
        }`}
      >
        <div>
          <img
            src={theme === "dark" ? img5 : assets.logo}
            className="mb-5 w-32"
            alt=""
          />
          <p className="w-full md:w-2/3">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odio esse
            ipsa eaque voluptate quasi odit consequuntur unde, velit expedita
            ratione culpa cum at nostrum labore. Delectus ex praesentium numquam
            et!
          </p>
        </div>

        <div>
          <p
            className={`text-xl font-medium mb-5 ${
              theme === "dark" ? "text-white" : "text-gray-800"
            }`}
          >
            COMPANY
          </p>
          <ul
            className={`flex flex-col gap-1 ${
              theme === "dark" ? "text-gray-300" : "text-gray-600"
            }`}
          >
            <li>Home</li>
            <li>About us</li>
            <li>Delivery</li>
            <li>Privacy Policy</li>
          </ul>
        </div>

        <div>
          <p
            className={`text-xl font-medium mb-5 ${
              theme === "dark" ? "text-white" : "text-gray-800"
            }`}
          >
            GET IN TOUCH
          </p>
          <ul
            className={`flex flex-col gap-1 ${
              theme === "dark" ? "text-gray-300" : "text-gray-600"
            }`}
          >
            <li>+1-212-456-7890</li>
            <li>contact@foreveryou.com</li>
          </ul>
        </div>
      </div>
      <div>
        <hr />
        <p
          className={`py-5 text-sm text-center ${
            theme === "dark" ? "text-gray-300" : "text-gray-600"
          }`}
        >
          Copyright 2020@ forever.com - All Right Reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
