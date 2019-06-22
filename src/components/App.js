import React from "react";
import ColorList from "./ui/ColorList";
import SortMenu from "./ui/SortMenu";
import AddColorForm from "./ui/AddColorForm";

const App = ({ store }) => {
  return (
    <div className="app">
      <SortMenu store={store} />
      <AddColorForm store={store} />
      <ColorList store={store} />
    </div>
  );
};

export default App;
