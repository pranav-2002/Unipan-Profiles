import React from "react";
import "./Home_Style.css";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import PDF from "../images/unipan-catalogue.pdf";

export default function Home() {
  function scroll() {
    window.scrollTo(0, 600);
  }

  return (
    <div>
      <title>Unipan Profiles PVC Doors and Cupboards Manufacturer</title>
      <div className="bg"></div>
      <div className="bg bg2"></div>
      <div className="bg bg3"></div>
      <div className="container d-flex cont">
        <h1>UNIPAN PROFILES INDIA PRIVATE LIMITED</h1>
        <br />
        <h2>
          We are into the business of manufacturing and <br /> marketing of PVC
          doors and profiles since 2002
        </h2>
        <br />
        <a
          className="cat btn btn-info btn-lg item1 cat-link"
          href={PDF}
          download
        >
          Download Our Catalogue
        </a>
      </div>
      <div className="scroll">
        <button className="scroll-button" onClick={scroll}>
          <KeyboardArrowDownIcon className="scroll-icon" />
        </button>
      </div>
    </div>
  );
}
