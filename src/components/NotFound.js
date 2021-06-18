import React from "react";
import logo from "../image/pagenotfound.png";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <>
      <img className="not-found-img" src={logo} alt="notfound" />
      <p>⚠ Upss!...Parece que ésta página no existe ⚠</p>
      <Link className="link-router" to="/">
        <p className="cartoon-link-goback">←VOLVER</p>
      </Link>
    </>
  );
};

export default NotFound;
