import React from "react";
import Hero from "./Hero";
import Navbar from "./Navbar";
import "./About_Style.css";

function About() {
  return (
    <div>
      <Navbar />
      <Hero text="ABOUT US" />
      <div className="container">
        <h2 className="text-center">Some description about this page</h2>
      </div>
    </div>
  );
}

export default About;
