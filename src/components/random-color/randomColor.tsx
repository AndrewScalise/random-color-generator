import React, { useState } from "react";

const RandomColor = () => {
  const [type, setType] = useState("hex");
  const [color, setColor] = useState("#ffffff");

  const random255 = () => Math.floor(Math.random() * 255);
  const randomHex = () =>
    `#${Math.floor(Math.random() * 16777215).toString(16)}`;

  const handleChangeColor = () => {
    let color;
    switch (type) {
      case "hex":
        color = randomHex();
        break;
      case "rgb":
        color = `rgb(${random255()}, ${random255()}, ${random255()})`;
        break;
      case "rgba":
        color = `rgba(${random255()}, ${random255()}, ${random255()}, ${Math.random().toFixed(
          1
        )})`;
        break;
      default:
        color = randomHex();
        break;
    }
    setColor(color);
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
