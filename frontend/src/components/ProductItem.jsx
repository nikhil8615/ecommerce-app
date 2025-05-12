import React, { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import { Link } from "react-router-dom";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";

const ProductItem = ({ id, image, name, price }) => {
  const { currency, theme, addToWishlist, removeFromWishlist, isInWishlist } =
    useContext(ShopContext);

  const handleWishlistClick = (e) => {
    e.preventDefault(); // Prevent navigation when clicking the wishlist button
    if (isInWishlist(id)) {
      removeFromWishlist(id);
    } else {
      addToWishlist(id, { id, name, price, image });
    }
  };

  return (
    <Link
      className={`${
        theme === "dark" ? "text-white" : "text-gray-700"
      } relative group`}
      to={`/product/${id}`}
    >
      <div className="overflow-hidden">
        <img
          src={image[0]}
          className="hover:scale-110 transition ease-in-out"
          alt=""
        />
        <button
          onClick={handleWishlistClick}
          className="absolute top-2 right-2 p-2 rounded-full bg-white shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-200"
          title={isInWishlist(id) ? "Remove from wishlist" : "Add to wishlist"}
        >
          {isInWishlist(id) ? (
            <AiFillHeart className="w-5 h-5 text-red-500" />
          ) : (
            <AiOutlineHeart className="w-5 h-5 text-gray-600" />
          )}
        </button>
      </div>
      <p className="pt-3 pb-1 text-sm">{name}</p>
      <p className="text-sm font-medium">
        {currency}
        {price}
      </p>
    </Link>
  );
};

export default ProductItem;
