import React from "react";
import Navbar from "./Components/Navbar";
import ThreeModels from "./Components/ThreeModels";
import "./index.css";

const App = () => {
  return (
    <header className="w-screen h-screen overflow-hidden">
      <Navbar />
      <ThreeModels />
    </header>
  );
};

export default App;
