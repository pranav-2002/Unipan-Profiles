import React from "react";
import DesignDoorsProducts from "./DesignDoorsProducts";
import DesignDoorsServices from "./DesignDoorsServices";
import Hero from "./Hero";
import Navbar from "./Navbar";

function DesignerDoors() {
  return (
    <div>
      <Navbar />
      <Hero text="OUR PRODUCTS" />
      <DesignDoorsServices />
      <DesignDoorsProducts />
    </div>
  );
}

export default DesignerDoors;
