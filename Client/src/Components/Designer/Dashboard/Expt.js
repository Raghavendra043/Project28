import React from "react";

function Expt() {
  return (
    <div
      style={{
        marginRight: 16,
        marginLeft: 16,
        marginBottom: 40,
      }}
    >
      <div
        style={{
          width: 385,
          height: 443,
          backgroundColor: "white",
          boxShadow: "0px 4px 24px rgba(30, 31, 30, 0.08)",
          borderRadius: 32,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <span style={{ fontSize: 24, color: "rgba(30, 31, 30, 1)" }}>
          Experimenting Space
        </span>

        <span style={{ fontSize: 24, color: "rgba(30, 31, 30, 1)" }}>
          Buttons
        </span>
      </div>
    </div>
  );
}

export default Expt;
