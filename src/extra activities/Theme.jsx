import React from "react";
import { useState } from "react";

const Theme = () => {
  const [mode, switchmode] = useState("white");
  return (
    <div
      style={{
        background: mode,
        width: "1600px",
        height: "1000px",
        alignContent: "center",
        alignItems: "center",
        textAlign: "center",
      }}
    >
      <center>
        {mode === "white" ? (
          <h1 style={{ color: "red", fontStyle: "oblique" }}>White Theme</h1>
        ) : (
          <h1 style={{ color: "greenyellow", fontFamily: "Italic" }}>
            Black Theme
          </h1>
        )}
        <button
          onClick={() =>
            mode === "white" ? switchmode("black") : switchmode("white")
          }
        >
          Switch Mode
        </button>
        <br></br>
      </center>
    </div>
  );
};

export default Theme;
