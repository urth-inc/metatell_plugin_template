import React from "react";
import { Container, createRoot } from 'react-dom/client';

import App from "./App";

const remoteElement = document.getElementById("ui-root");
const root = createRoot(remoteElement as Container);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
