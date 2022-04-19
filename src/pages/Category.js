import React from "react";
import { data } from "../component/dummy/Dummy";
import Navbar from "../component/Navbar";
import NavbarAdmin from "../component/NavbarAdmin";
import PropsCategory from "../component/PropsCategory";


const Category = () => {
  return (
    <div>
      <div>
        <NavbarAdmin />
      </div>
      {/* Awal Section  */}
      <div className="container" style={{ marginTop: "55px" }}>
        <h2 class="text-color">Category</h2>
        <table className="table table-dark table-striped mt-4">
          <thead>
            <tr>
              <th scope="col">No</th>
              <th scope="col">Category Name</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          {data.map((item) => {
            return (
              <>
                <PropsCategory id={item.id} category={item.category} />
              </>
            );
          })}
        </table>
      </div>
    </div>
  );
};

export default Category;
