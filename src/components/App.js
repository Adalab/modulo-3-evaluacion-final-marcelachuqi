import React, { useEffect, useState } from "react";
import { Route, Switch } from "react-router-dom";
import "../stylesheets/style.css";
import getDataFromApi from "../services/api";
import CartoonList from "./CartoonList";
import Filter from "./Filter";
import CartoonDetail from "./CartoonDetail";

const App = (props) => {
  const [cartoons, setCartoons] = useState([]);
  const [cartoonFilter, setCartoonFilter] = useState("");

  useEffect(() => {
    getDataFromApi().then((cartoon) => {
      setCartoons(cartoon);
    });
  }, []);

  const handleChange = (userSearch) => {
    if (userSearch.key === "name") {
      setCartoonFilter(userSearch.value);
    }
  };

  const filteredCartoon = cartoons.filter((cartoon) => {
    return cartoon.name.toUpperCase().includes(cartoonFilter.toUpperCase());
  });

  const listRender = () => {
    if (filteredCartoon.length === 0) {
      return (
        <p> Upss! Parece que no existe este personaje, intenta de nuevo </p>
      );
    } else {
      return <CartoonList cartoons={filteredCartoon} />;
    }
  };

  const renderCartoonDetail = (props) => {
    const RouteCartoonId = parseInt(props.match.params.cartoonId);
    const findCartoon = cartoons.find((cartoon) => {
      return cartoon.id === RouteCartoonId;
    });
    if (findCartoon !== undefined) {
      return <CartoonDetail cartoon={findCartoon} />;
    } else {
      <p> NOT FOUND </p>;
    }
  };

  return (
    <>
      <Switch>
        <Route exact path="/" component={App}>
          <Filter handleChange={handleChange} />
          {listRender()}
        </Route>
        <Route path="/cartoon/:cartoonId" render={renderCartoonDetail} />
      </Switch>
    </>
  );
};

export default App;
