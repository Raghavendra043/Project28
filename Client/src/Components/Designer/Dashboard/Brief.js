import React from "react";

function Brief() {
  return (
    <div>
      <div
        style={{
          width: 583 - 2 * 32,
          height: 480 - 2 * 32,
          backgroundColor: "white",
          boxShadow: "0px 4px 24px rgba(30, 31, 30, 0.08)",
          borderRadius: 32,
          padding: 32,
        }}
      >
        <span
          style={{
            fontSize: 24,
            fontWeight: "700",
            textAlign: "center",
            color: "rgba(30, 31, 30, 1)",
          }}
        >
          Project Brief
        </span>
      </div>
    </div>
  );
}

export default Brief;
