import React, { useEffect, useState } from "react";
import { Route, Switch } from "react-router-dom";
import "../stylesheets/style.css";
import getDataFromApi from "../services/api";
import CartoonList from "./CartoonList";
import Filter from "./Filter";
import CartoonDetail from "./CartoonDetail";
import storage from "../services/local-storage";
import logo from "../image/goback.png";

const App = (props) => {
  const [cartoons, setCartoons] = useState(storage.get("cartoons", []));
  const [cartoonFilter, setCartoonFilter] = useState(
    storage.get("cartoonFilter", "")
  );

  console.log(cartoonFilter);

  useEffect(() => {
    if (cartoons.length === 0) {
      getDataFromApi().then((cartoon) => {
        setCartoons(cartoon);
      });
    }
  }, []);

  useEffect(() => {
    storage.set("cartoons", cartoons);
  }, [cartoons]);

  useEffect(() => {
    storage.set("cartoons", cartoons);
    storage.set("cartoonFilter", cartoonFilter);
  }, [cartoons, cartoonFilter]);

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
        <>
          <p>
            {`Upss! Parece que "`}
            <strong>{cartoonFilter}</strong>
            {`" no existe, intenta con otro personaje`}
          </p>
          <a href="/">
            <img className="go-back-img" src={logo} alt="goback" />
          </a>
        </>
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
          <Filter cartoonFilter={cartoonFilter} handleChange={handleChange} />
          {listRender()}
        </Route>
        <Route path="/cartoon/:cartoonId" render={renderCartoonDetail} />
      </Switch>
    </>
  );
};

export default App;
