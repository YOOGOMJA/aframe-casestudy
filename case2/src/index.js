import React from "react";
import ReactDOM from "react-dom";
import "aframe";
import App from "./App.jsx";

const Ammo = require("ammo.js/builds/ammo.wasm.js");
// const { defa } = require("ammo.js/builds/ammo.wasm.wasm");
import AmmoWasm from "ammo.js/builds/ammo.wasm.wasm";
window.Ammo = Ammo.bind(undefined, {
  locateFile(path) {
    // if (path.endsWith(".wasm")) {
    //   console.log("phase1");
    //   return AmmoWasm;
    // }
    console.log("phase2");
    return path;
  },
});

require("aframe-physics-system/dist/aframe-physics-system");

ReactDOM.render(
  // <React.StrictMode>
  <App />,
  // </React.StrictMode>
  document.getElementById("app")
);
