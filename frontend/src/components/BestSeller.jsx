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

const BestSeller = () => {
  const { products, theme } = useContext(ShopContext);
  //   console.log(products);
  const [bestSellerProducts, setBestSellerProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (products.length > 0) {
      const bestSellers = products.filter((item) => item.bestSeller);
      setBestSellerProducts(bestSellers);
      setIsLoading(false);
    }
  }, [products]);

  return (
    <div className="my-10">
      <div className="text-center text-3xl py-8">
        <Title text1={"BEST"} text2={"SELLERS"} />
        <p
          className={`w-3/4 m-auto text-xs sm:text-sm md:text-base ${
            theme === "dark" ? "text-gray-300" : "text-gray-600"
          }`}
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, aliquid,
          reiciendis porro quo.
        </p>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6">
        {isLoading
          ? // Show skeleton loaders while loading
            Array(5)
              .fill()
              .map((_, index) => <ProductSkeleton key={index} theme={theme} />)
          : bestSellerProducts.map((item, index) => (
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

export default BestSeller;
