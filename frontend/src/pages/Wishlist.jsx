import React, { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import ProductItem from "../components/ProductItem";
import Title from "../components/Title";
import { Link } from "react-router-dom";

const Wishlist = () => {
  const { wishlistItems, removeFromWishlist, theme } = useContext(ShopContext);

  return (
    <div className="my-10">
      <div className="text-center text-3xl py-8">
        <Title text1={"MY"} text2={"WISHLIST"} />
      </div>
      {Object.keys(wishlistItems).length === 0 ? (
        <div
          className={`text-center ${
            theme === "dark" ? "text-gray-300" : "text-gray-600"
          }`}
        >
          <p className="text-xl mb-4">Your wishlist is empty</p>
          <p>Add items to your wishlist to see them here</p>
          <Link
            to="/collection"
            className={`mt-4 inline-block px-6 py-2 border ${
              theme === "dark"
                ? "text-white border-white hover:bg-white hover:text-black"
                : "text-black border-black hover:bg-black hover:text-white"
            } transition-colors duration-200`}
          >
            Browse Products
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6">
          {Object.values(wishlistItems).map((item) => (
            <div key={item._id} className="relative group">
              <ProductItem
                id={item._id}
                image={item.image}
                name={item.name}
                price={item.price}
              />
              <button
                onClick={() => removeFromWishlist(item._id)}
                className="absolute top-2 right-2 p-2 rounded-full bg-white shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                title="Remove from wishlist"
              >
                <svg
                  className="w-5 h-5 text-red-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Wishlist;
