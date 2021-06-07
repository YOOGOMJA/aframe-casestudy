import React from "react";
import ReactDOM from "react-dom";
import "aframe";
import App from "./App.jsx";

// const Ammo = require("ammo.js/builds/ammo.wasm.js");
// const { defa } = require("ammo.js/builds/ammo.wasm.wasm");
const Ammo = require("ammo.js/builds/ammo.js");
const AmmoWasm = require("ammo.js/builds/ammo.wasm.wasm");
window.Ammo = Ammo.bind(undefined, {
  locateFile(path) {
    if (path.endsWith(".wasm")) {
      return AmmoWasm;
    }
    return path;
  },
});

require("aframe-physics-system/dist/aframe-physics-system");

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("app")
);
