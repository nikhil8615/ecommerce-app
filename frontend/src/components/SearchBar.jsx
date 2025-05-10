import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import { assets } from "../assets/assets";
import { useLocation } from "react-router-dom";
import VoiceSearch from "./VoiceSearch";

const SearchBar = () => {
  const [visible, setVisible] = useState(false);
  const { search, setSearch, showSearch, setShowSearch, theme } =
    useContext(ShopContext);
  const location = useLocation();

  useEffect(() => {
    if (location.pathname.includes("collection")) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  }, [location]);

  const handleVoiceSearch = (transcript) => {
    setSearch(transcript);
  };

  return showSearch && visible ? (
    <div
      className={`${
        theme === "dark" ? "bg-black text-white" : "bg-gray-50 text-black"
      }border-t border-b bg-gray-50 text-center`}
    >
      <div className="inline-flex items-center justify-center border border-gray-400 px-5 py-2 my-5 mx-3 rounded-full w-3/4 sm:w-1/2">
        <input
          type="text"
          placeholder="search"
          className={`flex-1 outline-none bg-inherit text-sm ${
            theme === "dark" ? "text-white" : "text-black"
          }`}
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <VoiceSearch onSearch={handleVoiceSearch} />
        <img src={assets.search_icon} className="w-4 ml-2" alt="" />
      </div>
      <img
        src={assets.cross_icon}
        className="inline w-3 cursor-pointer"
        onClick={() => setShowSearch(false)}
        alt=""
      />
    </div>
  ) : null;
};

export default SearchBar;
