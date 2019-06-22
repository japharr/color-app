import React from "react";
import ColorList from "./ui/ColorList";
import SortMenu from "./ui/SortMenu";
import AddColorForm from "./ui/AddColorForm";

const App = () => {
  return (
    <div className="app">
      <SortMenu />
      <AddColorForm />
      <ColorList />
    </div>
  );
};

export default App;
