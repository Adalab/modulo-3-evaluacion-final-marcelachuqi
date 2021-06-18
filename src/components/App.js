import React, { useEffect, useState } from "react";
import { Route, Switch } from "react-router-dom";
import "../stylesheets/style.css";
import getDataFromApi from "../services/api";
import storage from "../services/local-storage";
import CartoonList from "./CartoonList";
import Filter from "./Filter";
import CartoonDetail from "./CartoonDetail";
import logo from "../image/goback.png";
import NotFound from "./NotFound";

const App = (props) => {
  const [cartoons, setCartoons] = useState(storage.get("cartoons", []));
  const [cartoonFilter, setCartoonFilter] = useState(
    storage.get("cartoonFilter", "")
  );
  const [cartoonStatus, setCartoonStatus] = useState(
    storage.get("cartoonStatus", "all")
  );

  useEffect(() => {
    if (cartoons.length === 0) {
      getDataFromApi().then((cartoon) => {
        setCartoons(cartoon);
      });
    }
  });

  useEffect(() => {
    storage.set("cartoons", cartoons);
  }, [cartoons]);

  useEffect(() => {
    storage.set("cartoons", cartoons);
    storage.set("cartoonFilter", cartoonFilter);
  }, [cartoons, cartoonFilter]);

  useEffect(() => {
    storage.set("cartoons", cartoons);
    storage.set("cartoonStatus", cartoonStatus);
  }, [cartoons, cartoonStatus]);

  const handleChange = (userSearch) => {
    if (userSearch.key === "name") {
      setCartoonFilter(userSearch.value);
    } else if (userSearch.key === "status") {
      setCartoonStatus(userSearch.value);
    }
  };

  const filteredCartoon = cartoons
    .filter((cartoon) => {
      return cartoon.name.toUpperCase().includes(cartoonFilter.toUpperCase());
    })
    .filter((cartoon) => {
      if (cartoonStatus === "all") {
        return true;
      } else {
        return cartoon.status === cartoonStatus;
      }
    });

  const handleReset = () => {
    setCartoonFilter("");
    setCartoonStatus("all");
  };

  const listRender = () => {
    if (filteredCartoon.length === undefined) {
      return (
        <>
          <p>
            {`Upss! Parece que "`}
            <strong>{cartoonFilter}</strong>
            {`" no existe, intenta con otro personaje`}
          </p>

          <img
            onClick={handleReset}
            className="go-back-img"
            src={logo}
            alt="goback"
          />
          <p onClick={handleReset} className="cartoon-link-goback">
            ←go Back!
          </p>
        </>
      );
    } else {
      return (
        <>
          <CartoonList cartoons={filteredCartoon} />
        </>
      );
    }
  };

  const renderCartoonDetail = (props) => {
    const RouteCartoonId = parseInt(props.match.params.cartoonId);
    const findCartoon = cartoons.find((cartoon) => {
      return cartoon.id === RouteCartoonId;
    });
    if (findCartoon !== undefined) {
      return <CartoonDetail cartoon={findCartoon} />;
    }
  };

  return (
    <>
      <Switch>
        <Route exact path="/" component={App}>
          <Filter
            cartoonStatus={cartoonStatus}
            cartoonFilter={cartoonFilter}
            handleChange={handleChange}
          />
          {listRender()}
        </Route>
        <Route path="/cartoon/:cartoonId" render={renderCartoonDetail} />
        <Route>
          <NotFound />
        </Route>
      </Switch>
    </>
  );
};

export default App;
