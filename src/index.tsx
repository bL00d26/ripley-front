import React from "react";
import ReactDOM from "react-dom";

import "./application/assets/general.css";
import "react-toastify/dist/ReactToastify.css";

import { HomePage } from "./presentation/containers/home-page/HomePage";

ReactDOM.render(
  <React.StrictMode>
    <HomePage />
  </React.StrictMode>,
  document.getElementById("root")
);
