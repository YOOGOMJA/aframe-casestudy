import React from "react";
import Sample from "./components/Sample";
import Camera from "./components/Camera";
import Floor from "./components/Floor";

const App = () => {
  return (
    <a-scene stats>
      <Camera />
      <Sample />
      <Floor />
    </a-scene>
  );
};

export default App;
