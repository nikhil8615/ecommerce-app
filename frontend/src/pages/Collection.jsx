import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import { assets } from "../assets/assets";
import Title from "../components/Title";
import ProductItem from "../components/ProductItem";

const Collection = () => {
  const { products, search, showSearch } = useContext(ShopContext);
  const { theme } = useContext(ShopContext);
  const [showFilter, setShowFilter] = useState(false);
  const [filterProducts, setFilterProducts] = useState([]);
  const [category, setCategory] = useState([]);
  const [subCategory, setSubCategory] = useState([]);
  const [sortType, setSortType] = useState("relevant");

  const toggleCategory = (e) => {
    if (category.includes(e.target.value)) {
      setCategory((prev) => prev.filter((item) => item !== e.target.value));
    } else {
      setCategory((prev) => [...prev, e.target.value]);
    }
  };

  const toggleSubCategory = (e) => {
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
  };

  const sortProducts = () => {
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
  };

  useEffect(() => {
    applyFilter();
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
                value={"Men"}
                onChange={toggleCategory}
              />
              Men
            </p>
            <p className="flex gap-2">
              <input
                type="checkbox"
                className="w-3"
                value={"Women"}
                onChange={toggleCategory}
              />
              Women
            </p>
            <p className="flex gap-2">
              <input
                type="checkbox"
                className="w-3"
                value={"Kids"}
                onChange={toggleCategory}
              />
              Kids
            </p>
            <p className="flex gap-2">
              <input
                type="checkbox"
                className="w-3"
                value={"Book"}
                onChange={toggleCategory}
              />
              Books
            </p>
            <p className="flex gap-2">
              <input
                type="checkbox"
                className="w-3"
                value={"Cosmetics"}
                onChange={toggleCategory}
              />
              Cosmetics
            </p>
            <p className="flex gap-2">
              <input
                type="checkbox"
                className="w-3"
                value={"DIgitalGadget"}
                onChange={toggleCategory}
              />
              Digital Gadget
            </p>
            <p className="flex gap-2">
              <input
                type="checkbox"
                className="w-3"
                value={"Footwear"}
                onChange={toggleCategory}
              />
              Footwear
            </p>
            <p className="flex gap-2">
              <input
                type="checkbox"
                className="w-3"
                value={"HomeDecor"}
                onChange={toggleCategory}
              />
              Home Decor
            </p>
            <p className="flex gap-2">
              <input
                type="checkbox"
                className="w-3"
                value={"IceCreamDesserts"}
                onChange={toggleCategory}
              />
              Ice Cream & Desserts
            </p>
            <p className="flex gap-2">
              <input
                type="checkbox"
                className="w-3"
                value={"Jewelry"}
                onChange={toggleCategory}
              />
              Jewelry
            </p>
            <p className="flex gap-2">
              <input
                type="checkbox"
                className="w-3"
                value={"KitchenAppliances"}
                onChange={toggleCategory}
              />
              Kitchen Appliances
            </p>
            <p className="flex gap-2">
              <input
                type="checkbox"
                className="w-3"
                value={"LaptopsAccessories"}
                onChange={toggleCategory}
              />
              Laptops & Accessories
            </p>
            <p className="flex gap-2">
              <input
                type="checkbox"
                className="w-3"
                value={"MobilesTablets"}
                onChange={toggleCategory}
              />
              Mobiles & Tablets
            </p>
            <p className="flex gap-2">
              <input
                type="checkbox"
                className="w-3"
                value={"NutritionHealth"}
                onChange={toggleCategory}
              />
              Nutrition & Health
            </p>
            <p className="flex gap-2">
              <input
                type="checkbox"
                className="w-3"
                value={"OrganicFood"}
                onChange={toggleCategory}
              />
              Organic Food
            </p>
            <p className="flex gap-2">
              <input
                type="checkbox"
                className="w-3"
                value={"PetSupplies"}
                onChange={toggleCategory}
              />
              Pet Supplies
            </p>
            <p className="flex gap-2">
              <input
                type="checkbox"
                className="w-3"
                value={"QuickMeals"}
                onChange={toggleCategory}
              />
              Quick Meals (Ready-to-eat)
            </p>
            <p className="flex gap-2">
              <input
                type="checkbox"
                className="w-3"
                value={"RideGearAutoAccessories"}
                onChange={toggleCategory}
              />
              Ride Gear & Auto Accessories
            </p>
            <p className="flex gap-2">
              <input
                type="checkbox"
                className="w-3"
                value={"StationeryOfficeSupplies"}
                onChange={toggleCategory}
              />
              Stationery & Office Supplies
            </p>
            <p className="flex gap-2">
              <input
                type="checkbox"
                className="w-3"
                value={"ToysGames"}
                onChange={toggleCategory}
              />
              Toys & Games
            </p>
            <p className="flex gap-2">
              <input
                type="checkbox"
                className="w-3"
                value={"UnderwearLoungewear"}
                onChange={toggleCategory}
              />
              Underwear & Loungewear
            </p>
            <p className="flex gap-2">
              <input
                type="checkbox"
                className="w-3"
                value={"VegetablesFruits"}
                onChange={toggleCategory}
              />
              Vegetables & Fruits
            </p>
            <p className="flex gap-2">
              <input
                type="checkbox"
                className="w-3"
                value={"Watches"}
                onChange={toggleCategory}
              />
              Watches
            </p>
            <p className="flex gap-2">
              <input
                type="checkbox"
                className="w-3"
                value={"XtremeSportsGear"}
                onChange={toggleCategory}
              />
              Xtreme Sports Gear
            </p>
            <p className="flex gap-2">
              <input
                type="checkbox"
                className="w-3"
                value={"YogaProducts"}
                onChange={toggleCategory}
              />
              Yoga Products
            </p>
            <p className="flex gap-2">
              <input
                type="checkbox"
                className="w-3"
                value={"ZipWearables"}
                onChange={toggleCategory}
              />
              Zip Wearables (Smartwear)
            </p>
          </div>
        </div>

        <div
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
        </div>
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
          {filterProducts.map((item, index) => (
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
