import React from "react";
// import "./App.scss";
import Navbar from "./Components/Navbar";
import ThreeModels from "./Components/ThreeModels";
import "./index.css";

const App = () => {
  return (
    <>
      <Navbar />
      <div className="flex h-screen w-screen">
        <ThreeModels className="Three-models" />
      </div>
    </>
  );
};

export default App;
