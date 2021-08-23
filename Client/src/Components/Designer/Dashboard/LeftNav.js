import React from "react";

function LeftNav() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        padding: 20,
        justifyContent: "center",
      }}
    >
      <div
        style={{
          flexGrow: 1,
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
          width: 16,
        }}
      >
        <img
          alt="haha"
          style={{
            transform: "rotate(-90deg)",
            width: 16,
            height: 24,
            borderRadius: 8,
          }}
          src="https://via.placeholder.com/16x24"
        />

        <img
          alt="haha"
          style={{ width: 24, height: 24, borderRadius: 8, marginTop: 88 }}
          src="https://via.placeholder.com/24x24"
        />

        <img
          alt="haha"
          style={{ width: 22, height: 24, borderRadius: 8, marginTop: 88 }}
          src="https://via.placeholder.com/22x24"
        />

        <img
          alt="haha"
          style={{ width: 14, height: 24, borderRadius: 8, marginTop: 88 }}
          src="https://via.placeholder.com/14x24"
        />

        <img
          alt="haha"
          style={{ width: 24, height: 24, borderRadius: 8, marginTop: 88 }}
          src="https://via.placeholder.com/24x24"
        />
      </div>
      <div>
        <div
          style={{
            width: 64,
            height: 64,
            position: "relative",
            marginBottom: 66,
          }}
        >
          <div
            style={{
              width: 64,
              height: 64,
              left: 0,
              top: 0,
              position: "absolute",
              backgroundColor: "rgba(0, 180, 179, 1)",
              borderRadius: 9999,
            }}
          />
          <img
            alt="haha"
            style={{
              width: 24,
              height: 20,
              left: 20,
              top: 22,
              position: "absolute",
              borderRadius: 8,
            }}
            src="https://via.placeholder.com/24x20"
          />
        </div>

        <img
          alt="haha"
          style={{ width: 24, height: 24, borderRadius: 8 }}
          src="https://via.placeholder.com/24x24"
        />
      </div>
    </div>
  );
}

export default LeftNav;
