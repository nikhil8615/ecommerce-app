import React, { useContext, useState, useEffect } from "react";
import Title from "../components/Title";
import { assets } from "../assets/assets";
import NewsletterBox from "../components/NewsletterBox";
import { ShopContext } from "../context/ShopContext";

const ContactSkeleton = ({ theme }) => {
  return (
    <div className="animate-pulse">
      <div className="text-center text-2xl pt-10 border-t">
        <div
          className={`h-8 w-48 mx-auto rounded-md ${
            theme === "dark" ? "bg-gray-700" : "bg-gray-200"
          }`}
        />
      </div>
      <div className="my-10 flex flex-col justify-center md:flex-row gap-10 mb-28">
        <div
          className={`w-full max-w-[480px] aspect-square rounded-md ${
            theme === "dark" ? "bg-gray-700" : "bg-gray-200"
          }`}
        />
        <div className="flex flex-col justify-center items-start gap-6">
          <div
            className={`h-6 w-32 rounded-md ${
              theme === "dark" ? "bg-gray-700" : "bg-gray-200"
            }`}
          />
          <div className="space-y-2">
            <div
              className={`h-4 w-48 rounded-md ${
                theme === "dark" ? "bg-gray-700" : "bg-gray-200"
              }`}
            />
            <div
              className={`h-4 w-56 rounded-md ${
                theme === "dark" ? "bg-gray-700" : "bg-gray-200"
              }`}
            />
          </div>
          <div className="space-y-2">
            <div
              className={`h-4 w-40 rounded-md ${
                theme === "dark" ? "bg-gray-700" : "bg-gray-200"
              }`}
            />
            <div
              className={`h-4 w-48 rounded-md ${
                theme === "dark" ? "bg-gray-700" : "bg-gray-200"
              }`}
            />
          </div>
          <div
            className={`h-6 w-40 rounded-md ${
              theme === "dark" ? "bg-gray-700" : "bg-gray-200"
            }`}
          />
          <div
            className={`h-6 w-64 rounded-md ${
              theme === "dark" ? "bg-gray-700" : "bg-gray-200"
            }`}
          />
          <div
            className={`h-12 w-32 rounded-md ${
              theme === "dark" ? "bg-gray-700" : "bg-gray-200"
            }`}
          />
        </div>
      </div>
    </div>
  );
};

const Contact = () => {
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
    return <ContactSkeleton theme={theme} />;
  }

  return (
    <div
      className={`${
        theme === "dark" ? "text-white" : "bg-white text-gray-900"
      }`}
    >
      <div className="text-center text-2xl pt-10 border-t">
        <Title text1={"CONTACT"} text2={"US"} theme={theme} />
      </div>
      <div className="my-10 flex flex-col justify-center md:flex-row gap-10 mb-28">
        <img src={assets.contact_img} className="w-full max-w-[480px]" alt="" />
        <div className="flex flex-col justify-center items-start gap-6">
          <p
            className={`font-semibold text-xl ${
              theme === "dark" ? "text-white" : "text-gray-600"
            }`}
          >
            Our Store
          </p>
          <p className={theme === "dark" ? "text-gray-300" : "text-gray-500"}>
            54079 Willms Station <br />
            Suite 350, Washington, USA
          </p>
          <p className={theme === "dark" ? "text-gray-300" : "text-gray-500"}>
            Tel: (415) 555-0312 <br /> Email: admin@gmail.com
          </p>
          <p
            className={`font-semibold text-xl ${
              theme === "dark" ? "text-white" : "text-gray-600"
            }`}
          >
            Careers at Forever
          </p>
          <p
            className={`font-semibold text-xl ${
              theme === "dark" ? "text-white" : "text-gray-600"
            }`}
          >
            Learn more about teams and job openings
          </p>
          <button
            className={`border ${
              theme === "dark"
                ? "border-white hover:bg-white hover:text-black"
                : "border-black hover:bg-black hover:text-white"
            } px-8 py-4 text-sm transition-all duration-500`}
          >
            Explore Jobs
          </button>
        </div>
      </div>
      <NewsletterBox />
    </div>
  );
};

export default Contact;
