import React from "react";
import Navbar from "./Navbar";
import "./Home_Style.css";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div>
      <Navbar />
      <div className="bg"></div>
      <div className="bg bg2"></div>
      <div className="bg bg3"></div>
      <div className="container d-flex cont">
        <h1>UNIPAN PROFILES PRIVATE LIMITED</h1>
        <br />
        <h2>
          We are into the business of manufacturing and <br /> marketing of PVC
          doors and profiles since 2002.
        </h2>
        <br />
        <Link className="cat btn btn-success btn-lg item1" to="#">
          {" "}
          Check Out Our Catalogue
        </Link>
      </div>
    </div>
  );
}
