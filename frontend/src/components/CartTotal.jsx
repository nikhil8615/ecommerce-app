import React, { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import Title from "./Title";
import { toast } from "react-toastify";

const CartTotal = () => {
  const { getCartAmount, currency, delivery_fee, theme } =
    useContext(ShopContext);

  return (
    <div className="w-full">
      <div className="text-2xl">
        <Title text1={"CART"} text2={"TOTALS"} />
      </div>
      <div className="flex flex-col gap-2 mt-2 text-sm">
        <div className="flex justify-between">
          <p
            className={`${
              theme === "dark" ? "text-gray-300" : "text-gray-600"
            }`}
          >
            SubTotal
          </p>
          <p
            className={`${
              theme === "dark" ? "text-gray-300" : "text-gray-600"
            }`}
          >
            {currency} {getCartAmount()}.00
          </p>
        </div>
        <hr />
        <div className="flex justify-between">
          <p
            className={`${
              theme === "dark" ? "text-gray-300" : "text-gray-600"
            }`}
          >
            Shipping Fee
          </p>
          <p
            className={`${
              theme === "dark" ? "text-gray-300" : "text-gray-600"
            }`}
          >
            {currency} {delivery_fee}.00
          </p>
        </div>
        <hr />
        <div className="flex justify-between">
          <b
            className={`${
              theme === "dark" ? "text-gray-300" : "text-gray-600"
            }`}
          >
            Total
          </b>
          <b
            className={`${
              theme === "dark" ? "text-gray-300" : "text-gray-600"
            }`}
          >
            {currency}{" "}
            {getCartAmount() === 0 ? 0 : getCartAmount() + delivery_fee}.00
          </b>
        </div>
      </div>
    </div>
  );
};

export default CartTotal;
