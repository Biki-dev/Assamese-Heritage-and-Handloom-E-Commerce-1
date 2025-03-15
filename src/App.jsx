import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar/navbar.jsx"; 
import Footer from "./components/footer/Footer.jsx";
// ✅ Corrected path
import Hero from "./components/Hero/Hero.jsx"; // ✅ Corrected path
import Gamosha from "./components/Gamosha/Gamosha.jsx";
import GamoshaPage from "./pages/GamoshaPage.jsx";
import BambooPage from "./pages/BambooPage.jsx";
// ✅ Corrected path
import Shop from "./pages/shop.jsx"; // ✅ Corrected path
import Cart from "./pages/cart.jsx"; // ✅ Corrected path
import Login from "./pages/login.jsx"; // ✅ Corrected path
import Signup from "./pages/signup.jsx";
import ShopCategory from "./pages/shopcategory.jsx"; // ✅ Corrected path
import "./App.css"; // ✅ Corrected path

const App = () => {
  return (
    <Router>
      <Navbar />

      <Routes>
         <Route path="/" element={<Hero />,<Shop/>} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/shopcategory" element={<ShopCategory />} />
        <Route path="/gamosha" element={<GamoshaPage extraClass="main-top"/>} />
        <Route path="/Bamboo" element={<BambooPage />} />

        
      </Routes>
      <Footer/>
    </Router>
  );
};

export default App;