import React from "react";
import "./Hero_Style.css";

function Hero({ text }) {
  return (
    <div>
      <div className="hero-container py-5 fluid hero_cont">
        <h1 className="text-center h1">{text}</h1>
      </div>
    </div>
  );
}

export default Hero;
