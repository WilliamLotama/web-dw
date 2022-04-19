import React from "react";
import PropsShop from "../component/PropsShop";
import Navbar from "../component/Navbar";
import { data } from "../component/dummy/Dummy";

function UserShop() {
  return (
    // Code Inside div
    <div className="container">
      <Navbar />
      <div className="d-flex justify-content-between mt-4">
        <h1 style={{ color: "#F74D4D" }}>Product</h1>
        <input
          class="me-2 text-center mb-2 p-2"
          type="search"
          placeholder="Search Product"
          aria-label="Search"
        />
      </div>
      <div className="row d-flex justify-content-center">
        {data.map((item) => {
          return (
            <>
              <PropsShop
                image={item.image}
                title={item.title}
                price={item.price}
                stock={item.stock}
              />
            </>
          );
        })}
      </div>
    </div>
  );
}

export default UserShop;
