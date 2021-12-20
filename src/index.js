import React from "react";
import ReactDOM from "react-dom";
import App from "./App";


let UserName = '';
if (localStorage.getItem("User") === null) {
   UserName = prompt("Ingrese su nombre");
}

ReactDOM.render(
  <React.StrictMode>
    <App UserName={UserName} />
  </React.StrictMode>,
  document.getElementById("root")
);
