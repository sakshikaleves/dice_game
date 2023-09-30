// import React from "react";
// import ReactDom from "react-dom";

// const name = ["gargi", "sakshi", "mummy", "baba"];
// const num = 6;
// ReactDom.render(
//   <div>
//     <h1>my name is {name[Math.floor(Math.random() * name.length)]}</h1>
//     <p>
//       <b>dice value is {Math.floor(Math.random() * 10)}</b>
//     </p>
//   </div>,
//   document.getElementById("root")
// );

import React from "react";
import ReactDOM from "react-dom";
var num = 6;
const names = ["gargi", "sakshi", "mummy", "baba"];
let currentIndex = -1; // Initialize to -1 to start with the first name (index 0).

const getNextName = () => {
  currentIndex = (currentIndex + 1) % names.length; // Increment index and wrap around if necessary.
  return names[currentIndex];
};

ReactDOM.render(
  <div>
    <h1>My name is {getNextName()}</h1>
    <p>
      <b>Lucky number is {Math.floor(Math.random() * 6) + 1}</b>
    </p>
  </div>,
  document.getElementById("root")
);
