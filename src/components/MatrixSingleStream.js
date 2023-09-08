import React from "react";

const MatrixSingleStream = ({marginTop, text}) => {
  return (
    <div>
      <div style={{ marginTop: marginTop }}>
        {text.split("").map((char, index) => (
          <span
          key={index}
            className="char"
            style={{
              color: index === text.length - 1 ? "#fff" : undefined,
              opacity: index < 6 ? 0.25 + index * 0.15 : 1,
              textShadow:
                index === text.length - 1
                  ? "0px 0px 20px rgba(255,255,255,1)"
                  : undefined,
            }}
          >
            {char}
          </span>
        ))}
      </div>
    </div>
  );
};

export default MatrixSingleStream;
