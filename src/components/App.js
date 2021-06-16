import React, { useEffect, useState } from "react";
import getDataFromApi from "../services/api";
import CartoonList from "./CartoonList";
import Filter from "./Filter";

const App = (props) => {
  const [cartoons, setCartoons] = useState([]);
  const [cartoonFilter, setCartoonFilter] = useState("");

  useEffect(() => {
    getDataFromApi().then((cartoon) => {
      setCartoons(cartoon);
    });
  }, []);

  const handleChange = (userSearch) => {
    console.log(userSearch);
    if (userSearch.key === "name") {
      setCartoonFilter(userSearch.value);
    }
  };
  console.log("name:", cartoonFilter);

  const filteredCartoon = cartoons.filter((cartoon) => {
    return cartoon.name.toUpperCase().includes(cartoonFilter.toUpperCase());
  });

  return (
    <>
      <Filter handleChange={handleChange} />
      <CartoonList cartoons={filteredCartoon} />
    </>
  );
};

export default App;
