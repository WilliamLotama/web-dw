import React from "react";
import Navbar from "../component/Navbar";
import "./style.css";

function Detail() {
  return (
    <>
      <Navbar />
      <div className="Container mt-4">
        <div className="row">
          <div className="col-5">
            <img src="./images/mouse.jpg" className="img-fluid rounded" alt="" />
          </div>
          <div className="col-md-5">
            <h2 className="header-text md-4">Mouse</h2>
            <p className="text-item">Stock : 600</p>
            <ul className="list-item">
              <li>Wireles Mouse</li>
              <li>Konektivitas Mouse 2.4 GHz</li>
              <li>Jarak Wireles Hingga 10m</li>
              <li>Plug And Play</li>
              <li>Baterai Hingga 12 Bulan</li>
            </ul>
            <p className="text-item" style={{ textAlign: "justify" }}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem quas labore vero minus
              repellendus! Ab voluptas, blanditiis voluptatibus eveniet iure facilis quo nesciunt,
              recusandae velit nulla aliquid harum quam ad.
            </p>
            <h3 className="header-text d-flex justify-content-end">Rp 300.900</h3>
            <div className="d-grid text-align-center">
              <button type="button" className="btn btn-danger m-1 mt-4">
              Buy
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Detail;
