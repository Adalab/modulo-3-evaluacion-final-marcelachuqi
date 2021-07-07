import React from "react";
import Logo from "../image/Logo.png";
import PropTypes from "prop-types";
import FilterbyGender from "./FilterbyGender";

const Filter = (props) => {
  console.log(props);
  const handleFilter = (ev) => {
    ev.preventDefault();
    props.handleChange({ value: ev.target.value, key: ev.target.id });
  };

  return (
    <form className="form">
      <label htmlFor="name">
        <img className="logo" src={Logo} alt="logo" />
      </label>
      <input
        id="name"
        className="filter"
        name="name"
        type="text"
        onChange={handleFilter}
        value={props.cartoonFilter}
        placeholder="Search a character"
      />

      <select
        name="status"
        id="status"
        className="selector"
        onClick={handleFilter}
      >
        <option value="all">Status</option>
        <option value="Alive">Alive</option>
        <option value="Dead">Dead</option>
        <option value="unknown">Unknown</option>
      </select>

      <FilterbyGender handleChange={props.handleChange} />
    </form>
  );
};
Filter.propTypes = {
  cartoonFilter: PropTypes.string,
};
export default Filter;
