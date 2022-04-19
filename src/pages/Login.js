import React from "react";
import { Link } from "react-router-dom";

// import Navbar from "../component/Navbar";
const Login = () => {
  return (
    <div>
      {/* <div>
        <Navbar />
      </div> */}
      <div className="container fs-3 mt-5" style={{ marginTop: "120px" }}>
        <div className="row md-5">
          {/* Bagian Kiri */}
          <div className="col-md-6">
            <img src="images/Frame.png" className="text-md-center mt-5" alt="" />
            <h1 className="mt-5">Easy, Fast and Reliable</h1>
            <p className="fs-5">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
              has been the industry's standard dummy text ever since the 1500s
            </p>
            <div className="d-flex py-3 justify-content-start justify-content-center row md-3 ms-auto ">
              <div className="col">
                <Link to="/">
                  <button type="button" className="btn btn-danger btn-sm me-2">
                    Login
                  </button>
                </Link>
                <Link to="/register">
                  <button type="button" className="btn btn-dark btn-sm">
                    Register
                  </button>
                </Link>
              </div>
            </div>
          </div>
          {/* Bagian Kiri Akhir */}

          {/* Bagian Kanan */}
          <div className="col-md-4 mb-4 sm">
            <div className="row row-cols-1 row-cols-md-2 justify-content-center mt-5">
              <div className="col md-2 sm-2 ">
                <div
                  className="container md rounded"
                  style={{
                    background: "#181818",
                    width: "355px",
                    height: "382px",
                    margin: "20px auto",
                  }}
                >
                  <div className="row-mt-4">
                    <div className="col-mt-3 pt-4">
                      <h1 style={{ color: "white" }}>Login</h1>
                      <form className="pt-3">
                        <div className="mb-3">
                          <input
                            type="email"
                            className="form-control"
                            placeholder="Email Addres"
                            id="exampleInputEmail1"
                            aria-describedby="emailHelp"
                          />
                        </div>
                        <div className="mb-3">
                          <input
                            type="password"
                            className="form-control"
                            placeholder="Password"
                            id="exampleInputPassword1"
                          />
                        </div>
                        <div className="d-grid gap-2">
                          <Link to="/profile">
                            <button className="btn btn-danger" type="button">
                              Login
                            </button>
                          </Link>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Akhir Bagian Kanan */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
