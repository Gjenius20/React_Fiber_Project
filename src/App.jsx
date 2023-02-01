import React from "react";
// import "./App.scss";
import "./App.scss";
import Navbar from "./Components/Navbar";
import ThreeModels from "./Components/ThreeModels";
import "./index.css";

const App = () => {
  return (
    <>
      <Navbar />
      <div className="canvas">
        <ThreeModels />
      </div>
    </>
  );
};

export default App;
