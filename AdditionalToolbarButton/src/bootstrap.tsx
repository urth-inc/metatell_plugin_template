import React from "react";
import { Container, createRoot } from 'react-dom/client';

import App from "./App";
import "./styles/global.module.scss";

const remoteElement = document.getElementById("root");
const root = createRoot(remoteElement as Container);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);