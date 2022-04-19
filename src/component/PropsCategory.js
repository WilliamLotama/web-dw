import React from "react";
import { Link } from "react-router-dom";
import AlertDelete from "./AlertDelete";

function PropsCategory(props) {
  return (
    <>
      <tbody>
        <tr>
          <th scope="row">{props.id}</th>
          <td>{props.category}</td>
          <td>
            <div>
              <Link to="/edit-category">
                <button type="button" class="btn btn-success btn-sm me-2">
                  Edit
                </button>
              </Link>
              <AlertDelete />
            </div>
          </td>
        </tr>
      </tbody>
    </>
  );
}

export default PropsCategory;
