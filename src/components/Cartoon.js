import React from "react";

const Cartoon = (props) => {
  return (
    <li>
      <img src="" alt="" />
      <h1> Nombre: {props.cartoon.name} </h1>
      <p>Especie: {props.cartoon.species}</p>
    </li>
  );
};

export default Cartoon;
