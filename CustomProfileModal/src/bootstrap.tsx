import React from "react";
import { render } from "react-dom";

import App from "./App";

const remoteElement = document.getElementById("ui-root");
render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  remoteElement,
);
