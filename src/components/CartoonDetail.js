import React from "react";

const CartoonDetail = (props) => {
  return (
    <>
      <li>
        <img src={props.cartoon.image} alt={props.cartoon.name} />
        <h1> {props.cartoon.name} </h1>
        <p> {props.cartoon.species}</p>
      </li>
    </>
  );
};

export default CartoonDetail;
