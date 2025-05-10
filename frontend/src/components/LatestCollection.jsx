import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import Title from "./Title";
import ProductItem from "./ProductItem";

const ProductSkeleton = ({ theme }) => {
  return (
    <div className="animate-pulse">
      <div
        className={`w-full aspect-square rounded-md ${
          theme === "dark" ? "bg-gray-700" : "bg-gray-200"
        }`}
      />
      <div className="mt-3">
        <div
          className={`h-4 w-3/4 rounded-md mb-2 ${
            theme === "dark" ? "bg-gray-700" : "bg-gray-200"
          }`}
        />
        <div
          className={`h-4 w-1/4 rounded-md ${
            theme === "dark" ? "bg-gray-700" : "bg-gray-200"
          }`}
        />
      </div>
    </div>
  );
};

const LatestCollection = () => {
  const { products, theme } = useContext(ShopContext); // Get theme from context
  const [latestProducts, setLatestProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (products.length > 0) {
      setLatestProducts(products.slice(0, 10));
      setIsLoading(false);
    }
  }, [products]);

  return (
    <div className="my-10">
      <div className="text-center py-8 text-3xl">
        {/* Title with conditional text color */}
        <Title text1={"LATEST"} text2={"COLLECTION"} />
        <p
          className={`w-3/4 m-auto text-xs sm:text-sm md:text-base ${
            theme === "dark" ? "text-gray-300" : "text-gray-600"
          }`}
        >
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel nulla,
          sint iusto ratione neque nam.
        </p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6">
        {isLoading
          ? // Show skeleton loaders while loading
            Array(10)
              .fill()
              .map((_, index) => <ProductSkeleton key={index} theme={theme} />)
          : latestProducts.map((item, index) => (
              <ProductItem
                key={index}
                id={item._id}
                image={item.image}
                name={item.name}
                price={item.price}
              />
            ))}
      </div>
    </div>
  );
};

export default LatestCollection;
