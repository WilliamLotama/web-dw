import React from "react";
import { Link } from "react-router-dom";

function NavbarAdmin() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark" style={{ backgroundColor: "black" }}>
        <div className="container-fluid mx-5">
          <a className="navbar-brand" href="#">
            <img src="/images/logo.png" width={"50px"} alt="" />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link className="nav-link" to="/complain">
                  Complain
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/category">
                  Category
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/product">
                  Product
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  Logout
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavbarAdmin;
