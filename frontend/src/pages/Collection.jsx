import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import { assets } from "../assets/assets";
import Title from "../components/Title";
import ProductItem from "../components/ProductItem";

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

const Collection = () => {
  const { products, search, showSearch } = useContext(ShopContext);
  const { theme } = useContext(ShopContext);
  const [showFilter, setShowFilter] = useState(false);
  const [filterProducts, setFilterProducts] = useState([]);
  const [category, setCategory] = useState([]);
  const [subCategory, setSubCategory] = useState([]);
  const [sortType, setSortType] = useState("relevant");
  const [isLoading, setIsLoading] = useState(true);

  const toggleCategory = (e) => {
    setIsLoading(true);
    if (category.includes(e.target.value)) {
      setCategory((prev) => prev.filter((item) => item !== e.target.value));
    } else {
      setCategory((prev) => [...prev, e.target.value]);
    }
  };

  const toggleSubCategory = (e) => {
    setIsLoading(true);
    if (subCategory.includes(e.target.value)) {
      setSubCategory((prev) => prev.filter((item) => item !== e.target.value));
    } else {
      setSubCategory((prev) => [...prev, e.target.value]);
    }
  };

  const applyFilter = () => {
    let productsCopy = products.slice();
    if (category.length > 0) {
      productsCopy = productsCopy.filter((item) =>
        category.includes(item.category)
      );
    }
    if (subCategory.length > 0) {
      productsCopy = productsCopy.filter((item) =>
        subCategory.includes(item.subCategory)
      );
    }
    if (showSearch && search) {
      productsCopy = productsCopy.filter((item) =>
        item.name.toLowerCase().includes(search.toLowerCase())
      );
    }

    setFilterProducts(productsCopy);
    setTimeout(() => {
      setIsLoading(false);
    }, 500);
  };

  const sortProducts = () => {
    setIsLoading(true);
    let fproductsCopy = filterProducts.slice();
    switch (sortType) {
      case "low-high":
        setFilterProducts(fproductsCopy.sort((a, b) => a.price - b.price));
        break;
      case "high-low":
        setFilterProducts(fproductsCopy.sort((a, b) => b.price - a.price));
        break;
      default:
        applyFilter();
        break;
    }
    setTimeout(() => {
      setIsLoading(false);
    }, 500);
  };

  useEffect(() => {
    if (products.length > 0) {
      applyFilter();
    }
  }, [category, subCategory, search, showSearch, products]);

  useEffect(() => {
    sortProducts();
  }, [sortType]);

  return (
    <div
      className={`${
        theme === "dark" ? " text-gray-300" : "bg-white text-gray-900"
      } flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t`}
    >
      <div className="min-w-60">
        <p
          onClick={() => setShowFilter(!showFilter)}
          className="my-2 text-xl flex items-center cursor-pointer gap-2"
        >
          FILTERS
          <img
            src={assets.dropdown_icon}
            className={`h-3 sm:hidden ${showFilter ? "rotate-90" : ""}`}
            alt=""
          />
        </p>

        <div
          className={`border border-gray-300 pl-5 py-3 mt-6 ${
            showFilter ? "" : "hidden"
          } sm:block`}
        >
          <p
            className={`mb-3 text-sm font-medium ${
              theme === "dark" ? "text-gray-300" : "text-gray-900"
            }`}
          >
            CATEGORIES
          </p>
          <div
            className={`${
              theme === "dark" ? "text-gray-300" : "text-gray-900"
            } flex flex-col gap-2 text-sm font-light`}
          >
            <p className="flex gap-2">
              <input
                type="checkbox"
                className="w-3"
                value={"VitaminsSupplements"}
                onChange={toggleCategory}
              />
              Vitamins & Supplements
            </p>
            <p className="flex gap-2">
              <input
                type="checkbox"
                className="w-3"
                value={"ProteinFitness"}
                onChange={toggleCategory}
              />
              Protein & Fitness
            </p>
            <p className="flex gap-2">
              <input
                type="checkbox"
                className="w-3"
                value={"WeightManagement"}
                onChange={toggleCategory}
              />
              Weight Management
            </p>
            <p className="flex gap-2">
              <input
                type="checkbox"
                className="w-3"
                value={"HealthySnacksBeverages"}
                onChange={toggleCategory}
              />
              Healthy Snacks & Beverages
            </p>
            <p className="flex gap-2">
              <input
                type="checkbox"
                className="w-3"
                value={"ImmunityWellness"}
                onChange={toggleCategory}
              />
              Immunity & Wellness
            </p>
            <p className="flex gap-2">
              <input
                type="checkbox"
                className="w-3"
                value={"KidsNutrition"}
                onChange={toggleCategory}
              />
              Kids' Nutrition
            </p>
            <p className="flex gap-2">
              <input
                type="checkbox"
                className="w-3"
                value={"WomenHealth"}
                onChange={toggleCategory}
              />
              Women's Health
            </p>
            <p className="flex gap-2">
              <input
                type="checkbox"
                className="w-3"
                value={"ElderlyCare"}
                onChange={toggleCategory}
              />
              Elderly Care
            </p>
            <p className="flex gap-2">
              <input
                type="checkbox"
                className="w-3"
                value={"DiabeticFriendly"}
                onChange={toggleCategory}
              />
              Diabetic-Friendly
            </p>
          </div>
        </div>

        {/* <div
          className={`border border-gray-300 pl-5 py-3 my-5 ${
            showFilter ? "" : "hidden"
          } sm:block`}
        >
          <p
            className={`mb-3 text-sm font-medium ${
              theme === "dark" ? "text-gray-300" : "text-gray-900"
            }`}
          >
            TYPE
          </p>
          <div
            className={`${
              theme === "dark" ? "text-gray-300" : "text-gray-900"
            } flex flex-col gap-2 text-sm font-light`}
          >
            <p className="flex gap-2">
              <input
                type="checkbox"
                className="w-3"
                value={"Topwear"}
                onChange={toggleSubCategory}
              />
              Topwear
            </p>
            <p className="flex gap-2">
              <input
                type="checkbox"
                className="w-3"
                value={"Bottomwear"}
                onChange={toggleSubCategory}
              />
              Bottomwear
            </p>
            <p className="flex gap-2">
              <input
                type="checkbox"
                className="w-3"
                value={"Winterwear"}
                onChange={toggleSubCategory}
              />
              Winterwear
            </p>
          </div>
        </div> */}
      </div>

      <div className="flex-1">
        <div className="flex justify-between text-base sm:text-2xl mb-4">
          <Title
            text1={"ALL"}
            text2={"COLLECTIONS"}
            theme={theme}
            className={`${
              theme === "dark" ? "text-gray-300" : "text-gray-900"
            }`}
          />
          <select
            onChange={(e) => setSortType(e.target.value)}
            className={`border border-gray-300 text-sm px-2 rounded-md ${
              theme === "dark"
                ? "text-gray-300 bg-gray-800"
                : "text-gray-900 bg-white"
            }`}
          >
            <option value="relevant">Sort by: Relevant</option>
            <option value="low-high">Sort by: Low to High</option>
            <option value="high-low">Sort by: High to Low</option>
          </select>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6">
          {isLoading
            ? Array(8)
                .fill()
                .map((_, index) => (
                  <ProductSkeleton key={index} theme={theme} />
                ))
            : filterProducts.map((item, index) => (
                <ProductItem
                  key={index}
                  name={item.name}
                  id={item._id}
                  price={item.price}
                  image={item.image}
                />
              ))}
        </div>
      </div>
    </div>
  );
};

export default Collection;
