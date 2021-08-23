import React from "react";

function Chatbox() {
  return (
    <div>
      <div
        style={{
          width: 486 - 2 * 32,
          height: 636 - 2 * 32,
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
            color: "rgba(30, 31, 30, 1)",
          }}
        >
          Chatbox
        </span>
      </div>
    </div>
  );
}

export default Chatbox;
