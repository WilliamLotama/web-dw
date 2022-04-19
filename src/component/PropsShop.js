import React from "react";

const PropsShop = (props) => {
  return (
    <div className="card text-white bg-dark container m-3 p-0 col-md-2 me-1">
      <img
        src={props.image}
        alt=""
        className="card-img-top mb-2"
        style={{ width: "100%", height: "140px" }}
      />
      <form className="card-body d-grid">
        <h4 style={{ color: "#F74D4D" }}> {props.title} </h4>
        <p className="mb-1">Price : {props.price}</p>
        <p className="mt-0">Stock : {props.stock}</p>
      </form>
    </div>
  );
};

export default PropsShop;
