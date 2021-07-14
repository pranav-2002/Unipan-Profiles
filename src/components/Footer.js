import React from "react";
import "./Footer_Style.css";
import BusinessIcon from "@material-ui/icons/Business";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="footer">
      <div className="footer__content">
        <div className="footer__heading">
          <h4>
            UNIPAN PROFILES INDIA PVT LTD <br />{" "}
            <em>"save the trees, save the planet"</em>{" "}
          </h4>
        </div>
        <div className="footer__text">
          <Link to="/plain doors">
            <p>PlAIN DOORS</p>
          </Link>
          <Link to="/digital printed doors">
            <p>DIGITAL PRINTED DOORS</p>
          </Link>
          <Link to="/about">
            <p>ABOUT</p>
          </Link>
          <Link to="/contact">
            <p>CONTACT-US</p>
          </Link>
        </div>
        <div className="footer__address">
          <BusinessIcon className="f-add" />
          <p>
            1-7-150/1/A,beside Captain Cook lane, <br /> Bakaram, <br />{" "}
            Hyderabad-20
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
