import React from "react";
import { render } from "react-dom";

import App from "./App";
import "./styles/global.module.scss";

const remoteElement = document.getElementById("root");
render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  remoteElement,
);
