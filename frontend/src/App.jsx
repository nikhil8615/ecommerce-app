import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Product from "./pages/Product";
import Cart from "./pages/Cart";
import Login from "./pages/Login";
import Placeorder from "./pages/PlaceOrder";
import Orders from "./pages/Orders";
import Navbar from "./components/Navbar";
import Collection from "./pages/Collection";
import Footer from "./components/Footer";
import SearchBar from "./components/SearchBar";

import { ToastContainer, toast } from "react-toastify";
import Whishlist from "./pages/Wishlist";
import MyProfile from "./pages/MyProfile";

const App = () => {
  return (
    <div className="px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]">
      <ToastContainer />
      <Navbar />
      <SearchBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/collection" element={<Collection />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/product/:productId" element={<Product />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<Login />} />
        <Route path="/placeorder" element={<Placeorder />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/wishlist" element={<Whishlist />} />
        <Route path="/myprofile" element={<MyProfile />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
