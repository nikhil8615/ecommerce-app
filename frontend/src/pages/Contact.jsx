import React, { useContext } from "react";
import Title from "../components/Title";
import { assets } from "../assets/assets";
import NewsletterBox from "../components/NewsletterBox";
import { ShopContext } from "../context/ShopContext";

const Contact = () => {
  const { theme } = useContext(ShopContext); // Assuming theme is passed from context

  return (
    <div
      className={`${
        theme === "dark"
          ? "bg-gray-800 text-gray-300"
          : "bg-white text-gray-900"
      }`}
    >
      <div className="text-center text-2xl pt-10 border-t">
        <Title text1={"CONTACT"} text2={"US"} theme={theme} />
      </div>
      <div className="my-10 flex flex-col justify-center md:flex-row gap-10 mb-28">
        <img src={assets.contact_img} className="w-full max-w-[480px]" alt="" />
        <div className="flex flex-col justify-center items-start gap-6">
          <p className="font-semibold text-xl text-gray-600">Our Store</p>
          <p className="text-gray-500">
            54079 Willms Station <br />
            Suite 350, Washington, USA
          </p>
          <p className="text-gray-500">
            Tel: (415) 555-0312 <br /> Email: admin@gmail.com
          </p>
          <p className="font-semibold text-xl text-gray-600">
            Careers at Forever
          </p>
          <p className="font-semibold text-xl text-gray-600">
            Learn more about teams and job openings
          </p>
          <button className="border border-black px-8 py-4 text-sm hover:bg-black hover:text-white transition-all duration-500">
            Explore Jobs
          </button>
        </div>
      </div>
      <NewsletterBox />
    </div>
  );
};

export default Contact;
