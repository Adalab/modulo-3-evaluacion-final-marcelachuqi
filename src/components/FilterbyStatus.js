import React from "react";

const FilterbyStatus = (props) => {
  const handleFilter = (ev) => {
    ev.preventDefault();
    props.handleChange({ value: ev.target.value, key: "status" });
  };

  return (
    <select name="status" id="id" className="selector" onClick={handleFilter}>
      <option value="all">All</option>
      <option value="alive">Alive</option>
      <option value="dead">Dead</option>
      <option value="unknown">Unknown</option>
    </select>
  );
};

export default FilterbyStatus;
