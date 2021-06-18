import React from "react";
import { Link } from "react-router-dom";
import Logo from "../image/Logo.png";

const CartoonDetail = (props) => {
  return (
    <>
      <Link className="cartoon-link link-position" to="/">
        ← Volver
      </Link>
      <div className="cartoon-detail">
        <img className="logo" src={Logo} alt="logo" />
        <img
          className="cartoon-detail-img"
          src={props.cartoon.image}
          alt={props.cartoon.name}
        />
        <h1>{props.cartoon.name}</h1>
        <ul className="cartoon-detail-list">
          <li>
            <strong>Status:</strong> {props.cartoon.status}
          </li>
          <li>
            <strong>Specie:</strong> {props.cartoon.species}
          </li>
          <li>
            <strong>Planet:</strong>
            {props.cartoon.planet}
          </li>
          <li>
            <strong>Episodes:</strong> {props.cartoon.episodes}
          </li>
        </ul>
      </div>
    </>
  );
};

export default CartoonDetail;
