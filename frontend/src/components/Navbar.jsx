import React, { useContext, useState } from "react";
import { assets } from "../assets/assets";
import { NavLink, Link } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";
import Switch from "./Switch";
import img from "../assets/shopping_bag-removebg-preview.png";
import img2 from "../assets/images-removebg-preview.png";
import img3 from "../assets/images_search.png";
import img4 from "../assets/logo_white_text.png";
import img5 from "../assets/hamberger_white.png";

const Navbar = () => {
  const [visible, setVisible] = useState(false);
  const {
    setShowSearch,
    getCartCount,
    navigate,
    token,
    setToken,
    setCartItems,
    theme,
    toggleTheme,
  } = useContext(ShopContext);

  const logout = () => {
    navigate("/login");
    localStorage.removeItem("token");
    setToken("");
    setCartItems({});
  };

  return (
    <div className="flex items-center justify-between py-5 font-medium">
      <Link to={"/"}>
        <img
          src={theme === "dark" ? img4 : assets.logo}
          className="w-36"
          alt=""
        />
      </Link>
      <ul
        className={`hidden sm:flex gap-5 text-sm ${
          theme === "dark" ? "text-white" : "text-gray-700"
        }`}
      >
        <NavLink to="/" className="flex flex-col items-center gap-1">
          <p>HOME</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
        </NavLink>
        <NavLink to="/collection" className="flex flex-col items-center gap-1">
          <p>COLLECTION</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
        </NavLink>
        <NavLink to="/about" className="flex flex-col items-center gap-1">
          <p>ABOUT</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
        </NavLink>
        <NavLink to="/contact" className="flex flex-col items-center gap-1">
          <p>CONTACT</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
        </NavLink>
      </ul>
      <div className="flex items-center gap-6">
        <div className={theme}>
          <Switch toggleTheme={toggleTheme} theme={theme} />
        </div>
        <img
          src={theme === "dark" ? img3 : assets.search_icon}
          // src={assets.search_icon}
          className="w-5 cursor-pointer"
          onClick={() => setShowSearch(true)}
          alt=""
        />
        <div className="group relative">
          <img
            onClick={() => (token ? null : navigate("/login"))}
            src={theme === "dark" ? img2 : assets.profile_icon}
            className="w-5 cursor-pointer"
            alt=""
          />

          {token && (
            <div className="group-hover:block hidden absolute dropdown-menu right-0 pt-4 z-50">
              <div className="flex flex-col gap-2 w-36 py-3 px-5 bg-slate-100 text-gray-500 rounded">
                <p
                  onClick={() => navigate("/myprofile")}
                  className="cursor-pointer hover:text-black"
                >
                  My profile
                </p>
                <p
                  onClick={() => navigate("/orders")}
                  className="cursor-pointer hover:text-black"
                >
                  Orders
                </p>
                <p
                  onClick={() => navigate("/wishlist")}
                  className="cursor-pointer hover:text-black"
                >
                  Wishlist
                </p>
                <p onClick={logout} className="cursor-pointer hover:text-black">
                  Logout
                </p>
              </div>
            </div>
          )}
        </div>
        <Link to={"/cart"} className="relative">
          <img
            src={theme === "dark" ? img : assets.cart_icon}
            className="w-5 min-w-5 h-5"
            alt=""
          />
          <p className="absolute right-[-5px] bottom-[-5px] w-4 text-center leading-4 bg-black text-white aspect-square rounded-full text-[8px]">
            {getCartCount()}
          </p>
        </Link>
        <img
          src={theme === "dark" ? img5 : assets.menu_icon}
          className="w-5 cursor-pointer sm:hidden"
          onClick={() => setVisible(true)}
          alt=""
        />
      </div>
      {/*Sidebar menu for small screen */}
      <div
        className={`fixed top-0 right-0 bottom-0 overflow-hidden bg-white transition-all z-50 ${
          visible ? "w-full" : "w-0"
        }`}
      >
        <div className="flex flex-col text-gray-600 h-full">
          <div
            onClick={() => setVisible(false)}
            className="flex items-center gap-4 p-3 cursor-pointer border-b"
          >
            <img src={assets.dropdown_icon} className="h-4 rotate-180" alt="" />
            <p>Back</p>
          </div>
          <div className="flex-1 overflow-y-auto">
            <NavLink
              onClick={() => setVisible(false)}
              className="py-2 pl-6 border block"
              to={"/"}
            >
              HOME
            </NavLink>
            <NavLink
              onClick={() => setVisible(false)}
              className="py-2 pl-6 border block"
              to={"/collection"}
            >
              COLLECTION
            </NavLink>
            <NavLink
              onClick={() => setVisible(false)}
              className="py-2 pl-6 border block"
              to={"/about"}
            >
              ABOUT
            </NavLink>
            <NavLink
              onClick={() => setVisible(false)}
              className="py-2 pl-6 border block"
              to={"/contact"}
            >
              CONTACT
            </NavLink>
            <NavLink
              onClick={() => setVisible(false)}
              className="py-2 pl-6 border block"
              to={"/wishlist"}
            >
              WISHLIST
            </NavLink>
            {token ? (
              <>
                <div
                  onClick={() => {
                    navigate("/myprofile");
                    setVisible(false);
                  }}
                  className="py-2 pl-6 border block cursor-pointer hover:bg-gray-50"
                >
                  My Profile
                </div>
                <div
                  onClick={() => {
                    navigate("/orders");
                    setVisible(false);
                  }}
                  className="py-2 pl-6 border block cursor-pointer hover:bg-gray-50"
                >
                  Orders
                </div>
                <div
                  onClick={() => {
                    logout();
                    setVisible(false);
                  }}
                  className="py-2 pl-6 border block cursor-pointer hover:bg-gray-50"
                >
                  Logout
                </div>
              </>
            ) : (
              <div
                onClick={() => {
                  navigate("/login");
                  setVisible(false);
                }}
                className="py-2 pl-6 border block cursor-pointer hover:bg-gray-50"
              >
                Login
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
