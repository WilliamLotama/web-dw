import React from "react";
import Navbar from "../component/Navbar";
import "./style.css";
import { Container, Row, Col } from "react-bootstrap";

const Profile = () => {
  return (
    <>
      <Navbar />
      <div className="container mt-5">
        <div className="row">
          <div className="row">
            <div className="col-md-3">
              <h2 style={{ color: "#F74D4D" }}>My Profile</h2>
              <img src="./images/Profile.jpg" className="rounded" width={"100%"} alt="" />
            </div>
            <div className="col-md-4" style={{ marginTop: "40px" }}>
              <h4>Name</h4>
              <p>William Kurniawan</p>
              <h4>Email</h4>
              <p>WilliamKurn@gmail.com</p>
              <h4>Phone</h4>
              <p>+62892367754</p>
              <h4>Gender</h4>
              <p>Male</p>
              <h4>Addres</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque repellendus
                alias ad ipsam vel aliquam temporibus facere itaque quia unde minima pariatur
              </p>
            </div>
            <div className="col-md-5">
              <h2 style={{ color: "#F74D4D" }}>My Transaction</h2>
              <div class="card mb-3 text-black" style={{ backgroundColor: "#181818" }}>
                <div class="row g-0">
                  <div class="col-md-4 m1-2">
                    <img src="/images/mouse.jpg" class="img-fluid p-auto mt-4 rounded" alt="..." />
                  </div>
                  <div class="col-md-6">
                    <div class="card-body" style={{ color: "#F74D4D" }}>
                      <h5>Mouse</h5>
                      <h5 className="fs-6 mb-1" style={{ color: "#F74D4D" }}>
                        Saturday 14 Juli 2021
                      </h5>
                      <p>Price Rp.500.000</p>
                      <p className="mt-2">Sub Total : 500.000</p>
                    </div>
                  </div>
                  <div className="align-item-center col-md-2 text-black">
                    <img src="/images/logo.png" className="md img-fluid rounded mt-4" alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
