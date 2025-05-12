import React, { useContext, useState, useEffect } from "react";
import { ShopContext } from "../context/ShopContext";
import Title from "../components/Title";
import axios from "axios";

const OrderSkeleton = ({ theme }) => {
  return (
    <div className="animate-pulse">
      {[1, 2, 3].map((item) => (
        <div
          key={item}
          className={`py-4 border-t border-b ${
            theme === "dark" ? "text-white" : "text-gray-700"
          } flex flex-col md:flex-row md:items-center justify-between gap-4`}
        >
          <div className="flex items-start gap-6 text-sm">
            <div
              className={`w-16 sm:w-20 h-16 sm:h-20 rounded-md ${
                theme === "dark" ? "bg-gray-700" : "bg-gray-200"
              }`}
            />
            <div className="flex-1">
              <div
                className={`h-5 w-48 rounded-md mb-2 ${
                  theme === "dark" ? "bg-gray-700" : "bg-gray-200"
                }`}
              />
              <div className="flex items-center gap-3 mt-2">
                <div
                  className={`h-4 w-20 rounded-md ${
                    theme === "dark" ? "bg-gray-700" : "bg-gray-200"
                  }`}
                />
                <div
                  className={`h-4 w-24 rounded-md ${
                    theme === "dark" ? "bg-gray-700" : "bg-gray-200"
                  }`}
                />
                <div
                  className={`h-4 w-16 rounded-md ${
                    theme === "dark" ? "bg-gray-700" : "bg-gray-200"
                  }`}
                />
              </div>
              <div className="mt-2">
                <div
                  className={`h-4 w-32 rounded-md ${
                    theme === "dark" ? "bg-gray-700" : "bg-gray-200"
                  }`}
                />
              </div>
              <div className="mt-2">
                <div
                  className={`h-4 w-40 rounded-md ${
                    theme === "dark" ? "bg-gray-700" : "bg-gray-200"
                  }`}
                />
              </div>
              <div className="mt-1">
                <div
                  className={`h-4 w-56 rounded-md ${
                    theme === "dark" ? "bg-gray-700" : "bg-gray-200"
                  }`}
                />
              </div>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-between">
            <div className="flex items-center gap-2">
              <div
                className={`w-2 h-2 rounded-full ${
                  theme === "dark" ? "bg-gray-700" : "bg-gray-200"
                }`}
              />
              <div
                className={`h-4 w-24 rounded-md ${
                  theme === "dark" ? "bg-gray-700" : "bg-gray-200"
                }`}
              />
            </div>
            <div
              className={`h-8 w-24 rounded-md ${
                theme === "dark" ? "bg-gray-700" : "bg-gray-200"
              }`}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

const Orders = () => {
  const { backendUrl, token, currency, theme } = useContext(ShopContext);
  const [orderData, setOrderData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const loadOrderData = async () => {
    try {
      if (!token) return null;

      const response = await axios.post(
        backendUrl + "/api/order/userorders",
        {},
        { headers: { token } }
      );

      if (response.data.success) {
        let allOrdersItem = [];
        response.data.orders.forEach((order) => {
          order.items.forEach((item) => {
            item["status"] = order.status;
            item["payment"] = order.payment;
            item["paymentMethod"] = order.paymentMethod;
            item["date"] = order.date;
            item["category"] = item.category;
            item["subCategory"] = item.subCategory;
            allOrdersItem.push(item);
          });
        });
        setOrderData(allOrdersItem.reverse());
        setIsLoading(false);
      }
    } catch (error) {
      console.error("Failed to load order data:", error);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    loadOrderData();
  }, [token]);

  return (
    <div
      className={`${
        theme === "dark" ? "text-white" : "bg-white text-black"
      } border-t pt-16`}
    >
      <div className="text-2xl">
        <Title text1={"MY"} text2={"ORDERS"} />
      </div>
      <div>
        {isLoading ? (
          <OrderSkeleton theme={theme} />
        ) : (
          orderData.map((items, index) => (
            <div
              key={index}
              className={`py-4 border-t border-b ${
                theme === "dark" ? "text-white" : "text-gray-700"
              } flex flex-col md:flex-row md:items-center justify-between gap-4`}
            >
              <div className="flex items-start gap-6 text-sm">
                <img src={items.image[0]} className="w-16 sm:w-20" alt="" />
                <div>
                  <p className="sm:text-base font-medium">{items.name}</p>
                  <div
                    className={`flex items-center gap-3 mt-2 text-base ${
                      theme === "dark" ? "text-gray-300" : "text-gray-700"
                    }`}
                  >
                    <p>
                      {currency}
                      {items.price}
                    </p>
                    <p>Quantity: {items.quantity}</p>
                    <p>Size: {items.size}</p>
                  </div>
                  <p className="mt-2">
                    Date:{" "}
                    <span
                      className={
                        theme === "dark" ? "text-gray-400" : "text-gray-400"
                      }
                    >
                      {new Date(items.date).toDateString()}
                    </span>
                  </p>
                  <p className="mt-2">
                    Payment:{" "}
                    <span
                      className={
                        theme === "dark" ? "text-gray-400" : "text-gray-400"
                      }
                    >
                      {items.paymentMethod}
                    </span>
                  </p>
                  <p
                    className={`mt-1 text-sm ${
                      theme === "dark" ? "text-gray-400" : "text-gray-500"
                    }`}
                  >
                    Category: <span>{items.category}</span> | Sub-category:{" "}
                    <span>{items.subCategory}</span>
                  </p>
                </div>
              </div>
              <div className="md:w-1/2 flex justify-between">
                <div className="flex items-center gap-2">
                  <p className="min-w-2 h-2 rounded-full bg-green-500"></p>
                  <p className="text-sm md:text-base">{items.status}</p>
                </div>
                <button
                  onClick={loadOrderData}
                  className={`border px-4 py-2 text-sm font-medium rounded-sm ${
                    theme === "dark"
                      ? "border-gray-600 hover:bg-gray-700"
                      : "hover:bg-gray-100"
                  }`}
                >
                  Track Order
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Orders;
