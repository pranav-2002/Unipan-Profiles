import React from "react";
import { Link } from "react-router-dom";
import "./Navbar_Style.css";
import Unipan_Logo from "../images/Unipan_Logo.png";

export default function Navbar() {
  return (
    <nav className="nav-fix navbar navbar-expand-lg navbar-dark bg-dark py-2">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          <img className="fluid uni_logo" src={Unipan_Logo} alt="..." />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav px-5">
            <Link className="nav-link active px-4" aria-current="page" to="/">
              HOME
            </Link>
            <Link className="nav-link active px-4" to="/products">
              PRODUCTS
            </Link>
            <Link className="nav-link active px-4" to="/about">
              ABOUT US
            </Link>
            <Link className="nav-link active px-4" to="/contact">
              CONTACT US
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
