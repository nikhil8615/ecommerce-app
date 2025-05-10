import React, { useContext } from "react";
import Title from "../components/Title";
import { assets } from "../assets/assets";
import NewsletterBox from "../components/NewsletterBox";
import { ShopContext } from "../context/ShopContext";

const About = () => {
  const { theme } = useContext(ShopContext); // Assuming theme is passed from context

  return (
    <div
      className={`${
        theme === "dark"
          ? "bg-gray-800 text-gray-300"
          : "bg-white text-gray-900"
      }`}
    >
      <div className="text-2xl text-center pt-8 border-t">
        <Title text1={"About"} text2={"Us"} theme={theme} />
      </div>
      <div className="my-10 flex flex-col md:flex-row gap-16">
        <img src={assets.about_img} className="w-full max-w-[450px]" alt="" />
        <div className="flex flex-col justify-center gap-6 md:w-2/4">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur
            obcaecati aperiam fugit alias magni beatae necessitatibus culpa
            ipsam totam tempora similique in adipisci repellendus dolores, quasi
            maiores cum optio officia!
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa in
            vitae, impedit eaque labore voluptatibus fuga, illum molestiae
            provident voluptatem aliquid quod. Enim ducimus itaque magnam qui
            inventore omnis odio!
          </p>
          <b className="text-gray-800">Our Mission</b>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Obcaecati
            voluptas commodi deserunt iusto odit eveniet accusantium, iure,
            aliquam itaque impedit voluptatibus magni provident corrupti id.
            Reiciendis possimus hic eos at.
          </p>
        </div>
      </div>
      <div className="text-xl py-4">
        <Title text1={"WHY"} text2={"CHOOSE US"} theme={theme} />
      </div>
      <div className="flex flex-col md:flex-row text-sm mb-20">
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Quality Assurance:</b>
          <p className="text-gray-600">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officiis
            sit laborum adipisci, sint ratione quam tenetur consequatur eius
            nostrum facilis aperiam soluta error nulla minima neque impedit
            necessitatibus, veritatis labore!
          </p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Convenience:</b>
          <p className="text-gray-600">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officiis
            sit laborum adipisci, sint ratione quam tenetur consequatur eius
            nostrum facilis aperiam soluta error nulla minima neque impedit
            necessitatibus, veritatis labore!
          </p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Exceptional Customer Service:</b>
          <p className="text-gray-600">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officiis
            sit laborum adipisci, sint ratione quam tenetur consequatur eius
            nostrum facilis aperiam soluta error nulla minima neque impedit
            necessitatibus, veritatis labore!
          </p>
        </div>
      </div>
      <NewsletterBox />
    </div>
  );
};

export default About;
