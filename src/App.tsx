import React from "react";
import { Button } from "./components/Button";
// import { CustomToolbarButton } from "./components/CustomToolbarButton";

const App: React.FC = () => {
  return (
    <div>
      <h1>plugin Website</h1>
      <h2>Button Component</h2>
      <Button />
      {/*
      <h2>Iframe Component</h2>
      <CustomToolbarButton />
      */}
    </div>
  );
};

export default App;
