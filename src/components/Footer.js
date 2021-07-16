import React from "react";
import "./Footer_Style.css";
import BusinessIcon from "@material-ui/icons/Business";
import { Link } from "react-router-dom";
import InstagramIcon from "@material-ui/icons/Instagram";
import FacebookIcon from "@material-ui/icons/Facebook";

function Footer() {
  return (
    <div className="footer">
      <div className="footer__content">
        <div className="footer__heading">
          <h4>
            UNIPAN PROFILES INDIA PVT LTD <br />{" "}
            <em>"save the trees, save the planet"</em>{" "}
          </h4>
          <div className="footer__socials">
            <InstagramIcon style={{ color: "white" }} className="social-icon" />
            <a href="https://www.instagram.com/unipanprofiles/?hl=en">
              <p>Instagram</p>
            </a>
            <FacebookIcon
              style={{ color: "white" }}
              className="social-icon social-icon-right"
            />
            <a href="https://www.facebook.com/Unipan-Profiles-India-Private-Ltd-111448384546974">
              {" "}
              <p>Facebook</p>{" "}
            </a>
          </div>
        </div>
        <div className="footer__text">
          <Link to="/plain doors">
            <p>PLAIN DOORS</p>
          </Link>
          <Link to="/designer doors">
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
            1-7-150/1/A,Beside Captain Cook Lane, <br /> Bakaram, <br />{" "}
            Hyderabad-20
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
