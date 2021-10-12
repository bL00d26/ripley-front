import React from "react";
import ReactDOM from "react-dom";

import "./application/assets/general.css";
import "react-toastify/dist/ReactToastify.css";

import { HomePage } from "./presentation/containers/home-page/HomePage";
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <HomePage />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
