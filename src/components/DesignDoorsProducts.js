import React from "react";
import DD1 from "../images/design1.jpeg";
import DD2 from "../images/design2.jpeg";

function DesignDoorsProducts() {
  return (
    <div>
      <div className="main-content">
        <div className="d-inline-flex px-4 my-5 mx-2 bd-highlight">
          <div className="card" style={{ width: 288 }}>
            <img src={DD2} className="card-img-top" alt="img" />
            <div className="card-body">
              <h2 className="card-title">
                <strong>Designs Vol - 1</strong>
              </h2>
              <p className="card-text lead">
                Applicable to both light and heavy quality
              </p>
              <h4 className="bestseller-heading">Bestseller</h4>
            </div>
          </div>
        </div>

        <div className="d-inline-flex px-4 my-5 mx-2 bd-highlight">
          <div className="card" style={{ width: 288 }}>
            <img src={DD1} className="card-img-top" alt="img" />
            <div className="card-body">
              <h2 className="card-title">
                <strong>Designs Vol - 2</strong>
              </h2>
              <p className="card-text lead">
                Applicable to both light and heavy quality
              </p>
              <h4 className="bestseller-heading">Bestseller</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DesignDoorsProducts;
