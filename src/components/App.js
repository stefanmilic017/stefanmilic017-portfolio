import React from "react";
import Menu from "./Menu";
import MainPage from "./MainPage";
import "../styles/Styles.css";
import MatrixRain from "./MatrixRain";

const App = () => {
  return (
    <div className="holder">
      <div className="hero">
        <MatrixRain />
        <Menu />
      </div>
      <MainPage />
    </div>
  );
};

export default App;
