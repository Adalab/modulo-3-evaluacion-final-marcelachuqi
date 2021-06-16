import React from "react";
import { Link } from "react-router-dom";

const CartoonDetail = (props) => {
  return (
    <div className="cartoon-detail">
      <Link to="/">Volver</Link>
      <li>
        <img src={props.cartoon.image} alt={props.cartoon.name} />
        <h1> {props.cartoon.name} </h1>
        <p> {props.cartoon.species}</p>
      </li>
    </div>
  );
};

export default CartoonDetail;
