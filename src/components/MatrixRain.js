import React, { useEffect, useState } from "react";
import "../styles/MatrixRain.css";
import MatrixRainStream from "./MatrixRainStream";

const MatrixRain = () => {
  const [streamCount, setStreamCount] = useState(4);
  
  useEffect(() => {  
    const handleResize = () => {
    if (window.innerWidth > 1920) {
      setStreamCount(8);
    }
    if (window.innerWidth <= 1920) {
      setStreamCount(4);
    }
    if (window.innerWidth <= 1000) {
      setStreamCount(2);
    } 
    if (window.innerWidth < 520) {
      setStreamCount(1);
    }
  };
    // Add the event listener when the component mounts
    window.addEventListener("resize", handleResize);

    // Remove the event listener when the component unmounts
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const matrixStreams = new Array(streamCount)
    .fill()
    .map((_, index) => <MatrixRainStream key={index} />);
  return <div className="matrix" id="hero">{matrixStreams}</div>;
};

export default MatrixRain;
