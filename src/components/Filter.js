import React from "react";
import Logo from "../image/Logo.png";

const Filter = (props) => {
  const handleFilter = (ev) => {
    props.handleChange({ value: ev.target.value, key: "name" });
  };

  return (
    <form>
      <label htmlFor="name">
        <img src={Logo} alt="logo" />
      </label>
      <input name="name" type="text" onChange={handleFilter} />
    </form>
  );
};

export default Filter;
