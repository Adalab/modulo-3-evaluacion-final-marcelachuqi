import React from "react";
import { Link } from "react-router-dom";

const Cartoon = (props) => {
  return (
    <Link className="cartoon-link" to={`/cartoon/${props.cartoon.id}`}>
      <li>
        <img src={props.cartoon.image} alt={props.cartoon.name} />
        <h1> {props.cartoon.name} </h1>
        <p> {props.cartoon.species}</p>
      </li>
    </Link>
  );
};

export default Cartoon;
