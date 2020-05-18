import React from "react";
import Header from "./Header";
import { createCard } from "./Card";
import data from "../data.json";

const App = () => {
  return (
    <div className="container">
      <Header />
      <div className="cardbox">{data.map(createCard)}</div>
    </div>
  );
};

export default App;
