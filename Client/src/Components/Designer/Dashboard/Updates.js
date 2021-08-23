import React from "react";

function Updates() {
  return (
    <div style={{ marginTop: 16, marginBottom: 16 }}>
      <div
        style={{
          width: 486 - 2 * 32,
          height: 288 - 2 * 32,
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
          Updates
        </span>
        <div style={{ marginTop: 8 }}>
          {[...Array(3)].map((x, i) => {
            return (
              <div
                style={{ display: "flex", alignItems: "center", marginTop: 24 }}
              >
                <img
                  alt="haha"
                  style={{ width: 39, height: 40, borderRadius: 9999 }}
                  src="https://via.placeholder.com/39x40"
                />
                <span
                  style={{
                    width: 368,
                    fontSize: 18,
                    color: "rgba(30, 31, 30, 1)",
                  }}
                >
                  Lorem Ipsum dolor sit amet. Vivamus ra feli
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Updates;
