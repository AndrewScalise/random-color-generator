import React, { useState } from "react";

const RandomColor = () => {
  const [type, setType] = useState("hex");
  const [color, setColor] = useState("#ffffff");

  const handleChangeColor = () => {
    switch (type) {
      case "hex":
        const randomHexColor = `#${Math.floor(
          Math.random() * 16777215
        ).toString(16)}`;
        setColor(randomHexColor);
        break;
      case "rgb":
        const randomRGBColor = `rgb(${Math.floor(
          Math.random() * 255
        )}, ${Math.floor(Math.random() * 255)}, ${Math.floor(
          Math.random() * 255
        )})`;
        setColor(randomRGBColor);
        break;
      case "rgba":
        const randomRGBAColor = `rgba(${Math.floor(
          Math.random() * 255
        )}, ${Math.floor(Math.random() * 255)}, ${Math.floor(
          Math.random() * 255
        )}, ${Math.random().toFixed(1)})`;
        setColor(randomRGBAColor);
        break;
      default:
        const randomColor = `#${Math.floor(Math.random() * 16777215).toString(
          16
        )}`;
        setColor(randomColor);
        break;
    }
  };

  return (
    <div
      style={{
        backgroundColor: color,
        width: "100vw",
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      <h1 style={{ color: "white" }}>{color}</h1>
      <select
        value={type}
        onChange={(e) => setType(e.target.value)}
        style={{ padding: "10px", margin: "10px" }}
      >
        <option value="hex">Hex</option>
        <option value="rgb">RGB</option>
        <option value="rgba">RGBA</option>
      </select>
        <button onClick={handleChangeColor}>Random Color</button>
    </div>
  );
};

export default RandomColor;
