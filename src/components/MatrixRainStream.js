import React, { useState } from "react";
import useInterval from "@use-it/interval";
import MatrixSingleStream from "./MatrixSingleStream";

const textsArray = [
  "FRONTEND",
  "STEFANMILIC017",
  "HTMLCSS",
  "WEBDEVELOPER",
  "JAVASCRIPT",
  "REACTJS",
  "RESPONSIVEDESIGN",
  "GITHUB-NPM",
  "NODEJSPROMPT",
];

const MatrixRainStream = () => {
  const [topPadding, setTopPadding] = useState(textsArray[0].length * -50);
  const [topPadding2, setTopPadding2] = useState(textsArray[1].length * -50);
  const [topPadding3, setTopPadding3] = useState(textsArray[2].length * -50);
  const [topPadding4, setTopPadding4] = useState(textsArray[3].length * -50);
  const [topPadding5, setTopPadding5] = useState(textsArray[4].length * -50);
  const [topPadding6, setTopPadding6] = useState(textsArray[5].length * -50);
  const [topPadding7, setTopPadding7] = useState(textsArray[6].length * -50);
  const [topPadding8, setTopPadding8] = useState(textsArray[7].length * -50);
  const [topPadding9, setTopPadding9] = useState(textsArray[8].length * -50);

  const handleInterval = (topPadding, setTopPadding, text) => {
    return () => {
      if (topPadding > window.innerHeight - 10) {
        setTopPadding(text.length * -50);
      } else {
        setTopPadding(topPadding + 4);
      }
    };
  };

  useInterval(handleInterval(topPadding, setTopPadding, textsArray[0]),   15);
  useInterval(handleInterval(topPadding2, setTopPadding2, textsArray[1]), 15);
  useInterval(handleInterval(topPadding3, setTopPadding3, textsArray[2]), 15);
  useInterval(handleInterval(topPadding4, setTopPadding4, textsArray[3]), 15);
  useInterval(handleInterval(topPadding5, setTopPadding5, textsArray[4]), 15);
  useInterval(handleInterval(topPadding6, setTopPadding6, textsArray[5]), 15);
  useInterval(handleInterval(topPadding7, setTopPadding7, textsArray[6]), 15);
  useInterval(handleInterval(topPadding8, setTopPadding8, textsArray[7]), 15);
  useInterval(handleInterval(topPadding9, setTopPadding9, textsArray[8]), 15);

  return (
    <div className="rain-stream">
      <MatrixSingleStream marginTop={topPadding} text={textsArray[0]} />
      <MatrixSingleStream marginTop={topPadding2} text={textsArray[1]} />
      <MatrixSingleStream marginTop={topPadding3} text={textsArray[2]} />
      <MatrixSingleStream marginTop={topPadding4} text={textsArray[3]} />
      <MatrixSingleStream marginTop={topPadding5} text={textsArray[4]} />
      <MatrixSingleStream marginTop={topPadding6} text={textsArray[5]} />
      <MatrixSingleStream marginTop={topPadding7} text={textsArray[6]} />
      <MatrixSingleStream marginTop={topPadding8} text={textsArray[7]} />
      <MatrixSingleStream marginTop={topPadding9} text={textsArray[8]} />
    </div>
  );
};

export default MatrixRainStream;
