import React from "react";

function AddProduct() {
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col">
            <h2 className="text-light mt-5 text-lg-start text-center mb-5">Add Product</h2>
            <div className="container">
              <div className="row">
                <div className="col">
                  <form>
                    <div className="d-flex py-3 justify-content-lg-start justify-content-center">
                      <button type="button" class="btn btn-danger px-5">
                        Upload Image
                      </button>
                      <a href="#" className="btn text-secondary text-decoration-none ms-5 fs-5">
                        photo.jpg
                      </a>
                    </div>
                    <div class="mb-3">
                      <label class="form-label"></label>
                      <input type="text" class="form-control bg-dark " placeholder="Product name" />
                    </div>
                    <div class="mb-3">
                      <label class="form-label"></label>
                      <textarea class="form-control bg-dark" placeholder="description"></textarea>
                    </div>
                    <div class="mb-3">
                      <label class="form-label"></label>
                      <input type="text" class="form-control bg-dark" placeholder="Price" />
                    </div>
                    <div class="mb-3">
                      <label class="form-label"></label>
                      <input type="text" class="form-control bg-dark" placeholder="Qty" />
                    </div>
                    <div class="d-grid gap-2 mt-5">
                      <button class="btn btn-success px-4" type="button">
                        Add Product
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddProduct;
