import React, { useContext, useState, useEffect } from "react";
import Title from "../components/Title";
import { assets } from "../assets/assets";
import NewsletterBox from "../components/NewsletterBox";
import { ShopContext } from "../context/ShopContext";

const AboutSkeleton = ({ theme }) => {
  return (
    <div className="animate-pulse">
      <div className="text-2xl text-center pt-8 border-t">
        <div
          className={`h-8 w-48 mx-auto rounded-md ${
            theme === "dark" ? "bg-gray-700" : "bg-gray-200"
          }`}
        />
      </div>
      <div className="my-10 flex flex-col md:flex-row gap-16">
        <div
          className={`w-full max-w-[450px] aspect-square rounded-md ${
            theme === "dark" ? "bg-gray-700" : "bg-gray-200"
          }`}
        />
        <div className="flex flex-col justify-center gap-6 md:w-2/4">
          <div
            className={`h-6 w-32 rounded-md ${
              theme === "dark" ? "bg-gray-700" : "bg-gray-200"
            }`}
          />
          <div className="space-y-3">
            <div
              className={`h-4 w-full rounded-md ${
                theme === "dark" ? "bg-gray-700" : "bg-gray-200"
              }`}
            />
            <div
              className={`h-4 w-full rounded-md ${
                theme === "dark" ? "bg-gray-700" : "bg-gray-200"
              }`}
            />
          </div>
          <div className="space-y-3">
            <div
              className={`h-4 w-full rounded-md ${
                theme === "dark" ? "bg-gray-700" : "bg-gray-200"
              }`}
            />
            <div
              className={`h-4 w-full rounded-md ${
                theme === "dark" ? "bg-gray-700" : "bg-gray-200"
              }`}
            />
          </div>
          <div
            className={`h-6 w-32 rounded-md ${
              theme === "dark" ? "bg-gray-700" : "bg-gray-200"
            }`}
          />
          <div className="space-y-3">
            <div
              className={`h-4 w-full rounded-md ${
                theme === "dark" ? "bg-gray-700" : "bg-gray-200"
              }`}
            />
            <div
              className={`h-4 w-full rounded-md ${
                theme === "dark" ? "bg-gray-700" : "bg-gray-200"
              }`}
            />
          </div>
        </div>
      </div>
      <div className="text-xl py-4">
        <div
          className={`h-8 w-48 mx-auto rounded-md ${
            theme === "dark" ? "bg-gray-700" : "bg-gray-200"
          }`}
        />
      </div>
      <div className="flex flex-col md:flex-row text-sm mb-20">
        {[1, 2, 3].map((item) => (
          <div
            key={item}
            className={`border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5 ${
              theme === "dark" ? "border-gray-700" : "border-gray-200"
            }`}
          >
            <div
              className={`h-6 w-40 rounded-md ${
                theme === "dark" ? "bg-gray-700" : "bg-gray-200"
              }`}
            />
            <div className="space-y-3">
              <div
                className={`h-4 w-full rounded-md ${
                  theme === "dark" ? "bg-gray-700" : "bg-gray-200"
                }`}
              />
              <div
                className={`h-4 w-full rounded-md ${
                  theme === "dark" ? "bg-gray-700" : "bg-gray-200"
                }`}
              />
              <div
                className={`h-4 w-3/4 rounded-md ${
                  theme === "dark" ? "bg-gray-700" : "bg-gray-200"
                }`}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const About = () => {
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
    return <AboutSkeleton theme={theme} />;
  }

  return (
    <div
      className={`${
        theme === "dark" ? "text-white" : "bg-white text-gray-900"
      }`}
    >
      <div className="text-2xl text-center pt-8 border-t">
        <Title text1={"About"} text2={"Us"} theme={theme} />
      </div>
      <div className="my-10 flex flex-col md:flex-row gap-16">
        <img src={assets.about_img} className="w-full max-w-[450px]" alt="" />
        <div className="flex flex-col justify-center gap-6 md:w-2/4">
          <p className={theme === "dark" ? "text-gray-300" : ""}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur
            obcaecati aperiam fugit alias magni beatae necessitatibus culpa
            ipsam totam tempora similique in adipisci repellendus dolores, quasi
            maiores cum optio officia!
          </p>
          <p className={theme === "dark" ? "text-gray-300" : ""}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa in
            vitae, impedit eaque labore voluptatibus fuga, illum molestiae
            provident voluptatem aliquid quod. Enim ducimus itaque magnam qui
            inventore omnis odio!
          </p>
          <b className={theme === "dark" ? "text-white" : "text-gray-800"}>
            Our Mission
          </b>
          <p className={theme === "dark" ? "text-gray-300" : ""}>
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
        <div
          className={`border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5 ${
            theme === "dark" ? "border-gray-700" : "border-gray-200"
          }`}
        >
          <b className={theme === "dark" ? "text-white" : "text-gray-800"}>
            Quality Assurance:
          </b>
          <p className={theme === "dark" ? "text-gray-300" : "text-gray-600"}>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officiis
            sit laborum adipisci, sint ratione quam tenetur consequatur eius
            nostrum facilis aperiam soluta error nulla minima neque impedit
            necessitatibus, veritatis labore!
          </p>
        </div>
        <div
          className={`border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5 ${
            theme === "dark" ? "border-gray-700" : "border-gray-200"
          }`}
        >
          <b className={theme === "dark" ? "text-white" : "text-gray-800"}>
            Convenience:
          </b>
          <p className={theme === "dark" ? "text-gray-300" : "text-gray-600"}>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officiis
            sit laborum adipisci, sint ratione quam tenetur consequatur eius
            nostrum facilis aperiam soluta error nulla minima neque impedit
            necessitatibus, veritatis labore!
          </p>
        </div>
        <div
          className={`border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5 ${
            theme === "dark" ? "border-gray-700" : "border-gray-200"
          }`}
        >
          <b className={theme === "dark" ? "text-white" : "text-gray-800"}>
            Exceptional Customer Service:
          </b>
          <p className={theme === "dark" ? "text-gray-300" : "text-gray-600"}>
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
