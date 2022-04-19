import React from "react";
import EditProductProps from "../component/EditProductProps";

function EditProduct() {
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col">
            <h2 className="text-light mt-5 text-lg-start text-center mb-5">Edit Product</h2>
            <EditProductProps />
          </div>
        </div>
      </div>
    </div>
  );
}

export default EditProduct;
