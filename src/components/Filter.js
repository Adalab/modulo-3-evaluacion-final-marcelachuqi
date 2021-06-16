import React from "react";
import Logo from "../image/Logo.png";

const Filter = (props) => {
  const handleFilter = (ev) => {
    ev.preventDefault();
    props.handleChange({ value: ev.target.value, key: "name" });
  };

  return (
    <form className="form">
      <label htmlFor="name">
        <img className="logo" src={Logo} alt="logo" />
      </label>
      <input
        className="filter"
        name="name"
        type="text"
        onChange={handleFilter}
      />
    </form>
  );
};

export default Filter;
