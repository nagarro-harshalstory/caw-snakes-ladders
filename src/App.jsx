import React from "react";
import ReactDOM from "react-dom";
import SnakesLaddersGame from "./components/SnakesLaddersGame"
import "./index.css";

const App = () => (
  <div className="container">
    <SnakesLaddersGame />
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
