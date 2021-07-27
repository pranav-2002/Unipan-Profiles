import React from "react";
import { Link } from "react-router-dom";
import "./Navbar_Style.css";
import Logo from "../images/logo.jpeg";
import HomeIcon from "@material-ui/icons/Home";
import MeetingRoomIcon from "@material-ui/icons/MeetingRoom";
import InfoIcon from "@material-ui/icons/Info";
import PermPhoneMsgIcon from "@material-ui/icons/PermPhoneMsg";
import RateReviewIcon from "@material-ui/icons/RateReview";

export default function Navbar() {
  return (
    <nav className="nav-fix navbar navbar-expand-lg navbar-dark bg-dark py-2">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          <img className="fluid uni_logo" src={Logo} alt="Unipan Profiles" />
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
          <div className="navbar-nav px-5 navbar-text">
            <Link className="nav-link active px-4" aria-current="page" to="/">
              <HomeIcon className="navbar-icon" />
              HOME
            </Link>
            <li className="nav-item dropdown">
              <Link
                className="nav-link active dropdown-toggle"
                to="#"
                id="navbarDropdownMenuLink"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <MeetingRoomIcon style={{ color: "white" }} />
                PRODUCTS
              </Link>
              <ul
                className="dropdown-menu"
                aria-labelledby="navbarDropdownMenuLink"
              >
                <li>
                  <Link className="dropdown-item" to="/plain doors">
                    Plain Doors
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/designer doors">
                    Digital Printed Doors
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/cupboards">
                    Cupboards
                  </Link>
                </li>
              </ul>
            </li>
            <Link className="nav-link active px-4" to="/about">
              <InfoIcon className="navbar-icon" />
              ABOUT
            </Link>
            <Link className="nav-link active px-4" to="/reviews">
              <RateReviewIcon className="navbar-icon" />
              REVIEWS
            </Link>
            <Link className="nav-link active px-4" to="/contact">
              <PermPhoneMsgIcon className="navbar-icon" />
              CONTACT US
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
