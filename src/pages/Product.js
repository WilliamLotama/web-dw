import React from "react";
import { tableProduct } from "../component/dummy/Dummy";
import {Link} from "react-router-dom"
import PropsProduct from "../component/PropsProduct";
import Navbar from "../component/Navbar";
import "./style.css";
import NavbarAdmin from "../component/NavbarAdmin";

const Product = () => {
  return (
    <>
      <NavbarAdmin />
      <div className="container mt-5">
        <div className="d-flex justify-content-between">
          <h2 style={{ color: "white", marginBottom: "20px" }}>List Product</h2>
          <div className="ButtonAdd text-center" type="button">
            <Link to="/add-product">
              <p style={{ marginBottom: "0", color: "white" }}>Add</p>
            </Link>
          </div>
        </div>

        <table className="table table-dark table-striped">
          <thead>
            <tr>
              <th scope="col">No</th>
              <th scope="col">Photo</th>
              <th scope="col">Product Name</th>
              <th scope="col">Product Desc</th>
              <th scope="col">Price</th>
              <th scope="col">Qty</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {tableProduct.map((item) => {
              return (
                <>
                  <PropsProduct
                    id={item.id}
                    image={item.image}
                    name={item.name}
                    desc={item.desc}
                    price={item.price}
                    qty={item.qty}
                  />
                </>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Product;
