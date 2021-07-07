import React from "react";
import { Link } from "react-router-dom";
import video from "../video/Plexus_Background_Loop.mp4";

const CartoonDetail = (props) => {
  return (
    <>
      <Link className="cartoon-link link-position" to="/">
        ← Volver
      </Link>
      <video className="video-background" autoPlay loop>
        <source src={video}></source>
      </video>
      <div className="cartoon-detail">
        <img
          className="cartoon-detail-img"
          src={props.cartoon.image}
          atl={props.cartoon.name}
        />
        <h1 className="cartoon-detail-name">{props.cartoon.name}</h1>
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
