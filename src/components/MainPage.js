import React from "react";
import "../styles/MainPage.css";
import Projects from "./Projects";
import About from "./About";
import Contact from "./Contact";

const MainPage = () => {
  return (
    <div className="containersHolder">
      <div className="containers">
        <Projects />
        <About />
        <Contact />
      </div>
    </div>
  );
};

export default MainPage;
