import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const Cartoon = (props) => {
  return (
    <Link className="cartoon-link" to={`/cartoon/${props.cartoon.id}`}>
      <li className="cartoon-list-each">
        <img
          className="cartoon-img"
          src={props.cartoon.image}
          alt={props.cartoon.name}
        />
        <div className="cartoon-info">
          <h1> {props.cartoon.name} </h1>
          <p> {props.cartoon.species}</p>
        </div>
      </li>
    </Link>
  );
};

Cartoon.propTypes = {
  label: PropTypes.string,
};

export default Cartoon;
