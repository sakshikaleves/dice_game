import React from "react";
import ReactDom from "react-dom";

const name = ["gargi", "sakshi", "mummy", "baba"];
const num = 6;
ReactDom.render(
  <div>
    <h1>my name is {name[Math.floor(Math.random() * name.length)]}</h1>
    <p>
      <b>dice value is {Math.floor(Math.random() * 10)}</b>
    </p>
  </div>,
  document.getElementById("root")
);
