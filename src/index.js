import React from "react"; //importar la librería de react
import ReactDOM from "react-dom"; //importar react-dom para que react genere el html
import App from "./components/App";
import { HashRouter } from "react-router-dom";
import "./stylesheets/style.css";

ReactDOM.render(
  <React.StrictMode>
    <HashRouter>
      <App />
    </HashRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
