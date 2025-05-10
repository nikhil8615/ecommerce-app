import React from "react";

const Title = ({ text1, text2, theme }) => {
  return (
    <div className="inline-flex gap-2 items-center mb-3">
      <p className={`${theme === "dark" ? "text-gray-300" : "text-gray-500"}`}>
        {text1}{" "}
        <span
          className={`${
            theme === "dark" ? "text-gray-100" : "text-gray-700"
          } font-medium`}
        >
          {text2}
        </span>
      </p>
      <p
        className={`${
          theme === "dark" ? "bg-gray-400" : "bg-gray-700"
        } w-8 sm:w-12 h-[1px] sm:h-[2px]`}
      ></p>
    </div>
  );
};

export default Title;
