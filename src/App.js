import React, { useState } from "react";
import Music from "./components/Layout/Music";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Cart from "./components/Cart/Cart";
import CartProvider from "./store/CartProvider";
import About from "./components/About/About";
import Home from "./components/Home/Home";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Contact from "./components/Contact/Contact";
import ProductDetails from "./components/Layout/ProductDetails";

const App = () => {
  const [cartIsShown, setCartIsShown] = useState(false);

  const showCartHandler = () => {
    setCartIsShown(true);
  };

  const hideCartHandler = () => {
    setCartIsShown(false);
  };

  return (
    <BrowserRouter>
      <CartProvider>
        <Header onShowCart={showCartHandler} />
        {cartIsShown && <Cart onClose={hideCartHandler} />}
        <Routes>
          <Route path="/" element={<Navigate to="/store" />} />
          <Route path="/about" element={<About />} />
          <Route
            path="/store"
            element={<Music onShowCart={showCartHandler} />}
          />
           <Route
            path="store/product-details/:id"
            element={<ProductDetails />}
          />
          <Route path="/Home" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </CartProvider>
    </BrowserRouter>
  );
};

export default App;
