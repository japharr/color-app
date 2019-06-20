import React from "react";
import "./App.css";
import StarRating from "./components/ui/StarRating";
import Color from "./components/ui/Color";
import ColorList from "./components/ui/ColorList";
import SortMenu from "./components/ui/SortMenu";
import AddColorForm from "./components/ui/AddColorForm";

const App = ({ store }) => {
  return (
    <div className="app">
      <SortMenu />
      <AddColorForm />
      <ColorList />
    </div>
  );
};

export default App;
