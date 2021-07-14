import React from "react";
import { Link } from "react-router-dom";
import Heavy from "../images/heavy.png";
import Heavy2 from "../images/heavy_2.jpg";
import Heavy4 from "../images/heavy_4.jpg";
import Heavy5 from "../images/heavy_5.jpg";
import Heavy6 from "../images/heavy_6.jpg";
import Heavy7 from "../images/heavy_7.jpg";
import Heavy8 from "../images/heavy_8.jpg";
import "./Products_Style.css";

function Products() {
  return (
    <div className="main-content">
      <div className="d-inline-flex px-4 my-5 mx-2 bd-highlight">
        <div className="card" style={{ width: 288 }}>
          <img src={Heavy6} className="card-img-top" alt="img" />
          <div className="card-body">
            <h2 className="card-title">
              <strong>Model-1</strong>
            </h2>
            <p className="card-text lead">Light Quality</p>
            <Link to="#" className="btn btn-info">
              More Details
            </Link>
          </div>
        </div>
      </div>

      <div className="d-inline-flex px-4 my-5 mx-2 bd-highlight">
        <div className="card" style={{ width: 288 }}>
          <img src={Heavy7} className="card-img-top" alt="img" />
          <div className="card-body">
            <h2 className="card-title">
              <strong>Model-2</strong>
            </h2>
            <p className="card-text lead">Light Quality</p>
            <Link to="#" className="btn btn-info">
              More Details
            </Link>
          </div>
        </div>
      </div>

      <div className="d-inline-flex px-4 my-5 mx-2 bd-highlight">
        <div className="card" style={{ width: 288 }}>
          <img src={Heavy5} className="card-img-top" alt="img" />
          <div className="card-body">
            <h2 className="card-title">
              <strong>Model-3</strong>
            </h2>
            <p className="card-text lead">Light Quality</p>
            <Link to="#" className="btn btn-info">
              More Details
            </Link>
          </div>
        </div>
      </div>

      <div className="d-inline-flex px-4 my-5 mx-2 bd-highlight">
        <div className="card" style={{ width: 288 }}>
          <img src={Heavy} className="card-img-top" alt="img" />
          <div className="card-body">
            <h2 className="card-title">
              <strong>Model-4</strong>
            </h2>
            <p className="card-text lead">Heavy Quality</p>
            <Link to="#" className="btn btn-info">
              More Details
            </Link>
          </div>
        </div>
      </div>
      <div className="d-inline-flex px-4 my-5 mx-2 bd-highlight">
        <div className="card" style={{ width: 288 }}>
          <img src={Heavy2} className="card-img-top" alt="img" />
          <div className="card-body">
            <h2 className="card-title">
              <strong>Model-5</strong>
            </h2>
            <p className="card-text lead">Heavy Quality</p>
            <Link to="#" className="btn btn-info">
              More Details
            </Link>
          </div>
        </div>
      </div>
      <div className="d-inline-flex px-4 my-5 mx-2 bd-highlight">
        <div className="card" style={{ width: 288 }}>
          <img src={Heavy4} className="card-img-top" alt="img" />
          <div className="card-body">
            <h2 className="card-title">
              <strong>Model-7</strong>
            </h2>
            <p className="card-text lead">Heavy Quality</p>
            <Link to="#" className="btn btn-info">
              More Details
            </Link>
          </div>
        </div>
      </div>

      <div className="d-inline-flex px-4 my-5 mx-2 bd-highlight">
        <div className="card" style={{ width: 288 }}>
          <img src={Heavy8} className="card-img-top" alt="img" />
          <div className="card-body">
            <h2 className="card-title">
              <strong>Model-8</strong>
            </h2>
            <p className="card-text lead">Heavy Quality</p>
            <Link to="#" className="btn btn-info">
              More Details
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Products;
