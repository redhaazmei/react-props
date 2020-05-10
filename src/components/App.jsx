import React from "react";
import Header from "./Header";
import { createCard } from "./Card";
import items from "../items";

const App = () => {
  return (
    <div className="container">
      <Header />
      <div className="cardbox">{items.map(createCard)}</div>
    </div>
  );
};

export default App;
