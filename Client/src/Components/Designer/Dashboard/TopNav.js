import React from "react";

function TopNav() {
  return (
    <div style={{ display: "flex", paddingTop: 20, paddingBottom: 20 }}>
      <div style={{ display: "flex", flexGrow: 1 }}>
        <img
          alt="haha"
          style={{ width: 179, height: 49 }}
          src="https://via.placeholder.com/179x49"
        />
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <img
          alt="haha"
          style={{ width: 20, height: 24, borderRadius: 8, marginRight: 56 }}
          src="https://via.placeholder.com/20x24"
        />

        <span
          style={{
            fontSize: 24,
            fontWeight: "700",
            color: "rgba(30, 31, 30, 1)",
            marginRight: 16,
          }}
        >
          Hey, Yatharth!
        </span>

        <img
          alt="haha"
          style={{ width: 48, height: 48, borderRadius: 9999, marginRight: 40 }}
          src="https://via.placeholder.com/48x48"
        />
      </div>
    </div>
  );
}

export default TopNav;
