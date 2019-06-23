import React, { Component } from "react";
import ColorList from "./ui/ColorList";
import SortMenu from "./ui/SortMenu";
import { NewColor, Colors, Menu } from "./containers";

const App = () => {
  return (
    <div className="app">
      <Menu />
      <NewColor />
      <Colors />
    </div>
  );
};

export default App;
