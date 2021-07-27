import React from "react";
import Hero from "./Hero";
import Navbar from "./Navbar";
import "./About_Style.css";

function About() {
  return (
    <div>
      <title>About-Unipan Profiles PVC Doors and Cupboards Manufacturer</title>
      <Navbar />
      <Hero text="ABOUT US" />
      <div className="container">
        <h2 className="text-center main-text">
          UNIPAN PVC (Poly Vinyl Chloride) doors are innovative & highly durable
          wood substitute products that promotes our mission to save Earth
          through usage of green products. Each UNIPAN PVC door you buy, saves a
          tree from axing and preserves your child's future. <br />
          <br />
          <hr />
          We are the first ever company to manufacture highly durable and
          elegant PVC doors in Hyderabad. Ours is a 20 years old company. UNIPAN
          PVC doors are manufactured with high quality standards to give you
          very long life and trouble free performance.
          <br />
          <br />
          <hr />
          We have our own Production Unit where we have latest Machinery.Our
          wide range of products involve Doors,Digital Printed Doors,Cupboards &
          Rajshri Doors.
        </h2>
      </div>
    </div>
  );
}

export default About;
