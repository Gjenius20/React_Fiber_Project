import React from "react";
import "./App.scss";
import Header from "./Components/header";
import ThreeModels from "./Components/ThreeModels";
import "./index.css";

const App = () => {
  return (
    <>
      <Header />
      <div className="container">
        <ThreeModels />
      </div>
    </>
  );
};

export default App;
