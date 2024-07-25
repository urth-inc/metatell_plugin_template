import React from "react";
import Button from "./components/Button";
import { IframeModalContainer } from "./components/CustomToolbarButton/CustomToolbarButton";
const App: React.FC = () => {
  return (
    <div>
      <h1>plugin Website</h1>
      <h2>Custom Button</h2>
      <Button />
      <h2>Custom ToolbarButton</h2>
      {/*
        <IframeModalContainer />
      */}
    </div>
  );
};

export default App;
