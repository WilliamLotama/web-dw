import React from "react";
import { Link } from "react-router-dom";
import AlertDelete from "./AlertDelete";

function PropsProduct(props) {
  return (
    <tr>
      <td>{props.id}</td>
      <td>{props.image}</td>
      <td>{props.name}</td>
      <td>{props.desc}</td>
      <td>{props.price}</td>
      <td>{props.qty}</td>
      <td>
        <Link to="/edit-Product">
          <button type="button" className="btn btn-success btn-sm me-1">
            Edit
          </button>
        </Link>
      
          <AlertDelete />
      
      </td>
    </tr>
  );
}

export default PropsProduct;
