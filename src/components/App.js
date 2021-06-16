import React, { useEffect, useState } from "react";
import getDataFromApi from "../services/api";
import CartoonList from "./CartoonList";

const App = () => {
  const [cartoons, setCartoons] = useState([]);

  useEffect(() => {
    getDataFromApi().then((cartoon) => {
      setCartoons(cartoon);
    });
  }, []);
  console.log(cartoons);
  return (
    <>
      <CartoonList cartoons={cartoons} />
    </>
  );
};

export default App;
