import React from "react";
import Header from "./Header";
import Card from "./Card";
import items from "../items";

const App = () => {
  return (
    <div className="container">
      <Header />
      <div className="cardbox">
        <Card title="Package A" text="This is the text for package A" />
        <Card title="Package B" text="This is the text for package B" />
      </div>
    </div>
  );
};

export default App;
