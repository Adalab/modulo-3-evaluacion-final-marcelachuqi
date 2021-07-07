import React from "react";

const FilterbyGender = (props) => {
  const handleGender = (ev) => {
    ev.preventDefault();
    props.handleChange({ value: ev.target.value, key: "gender" });
  };

  return (
    <select
      onChange={handleGender}
      name="gender"
      id="gender"
      className="selector"
    >
      <option value="all">Genre</option>
      <option value="Male">Male</option>
      <option value="Female">Female</option>
      <option value="unknown">Unknown</option>
    </select>
  );
};

export default FilterbyGender;
