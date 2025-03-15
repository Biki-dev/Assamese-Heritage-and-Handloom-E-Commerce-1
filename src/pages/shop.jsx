import React from "react";
import Hero from "../components/Hero/Hero.jsx";
import Gamosha from "../components/Gamosha/Gamosha.jsx";
import Bamboo from "../components/Bamboo/Bamboo.jsx";
const Shop = () => {
  return (
    <div>
      <Hero/>
      <Gamosha extraClass=""/>
      <Bamboo extraClass=""/>
    </div>
  );
};

export default Shop;