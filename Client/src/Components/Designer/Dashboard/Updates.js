import React from "react";

function Updates() {
  return (
    <div>
      <div
        style={{
          width: 258 - 2 * 24,
          height: 220 - 2 * 24,
          backgroundColor: "white",
          boxShadow: "0px 4px 24px rgba(30, 31, 30, 0.08)",
          borderRadius: "32px",
          padding: "24px",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <span
          style={{
            fontSize: 48,
            fontWeight: "700",
            color: "rgba(0, 180, 179, 1)",
          }}
        >
          01
        </span>
        <span
          style={{
            fontSize: 24,
            fontWeight: "700",
            // textAlign: "center",
            color: "rgba(0, 180, 179, 1)",
            // marginTop: 16,
          }}
        >
          Design Brief
        </span>

        <div
          style={{
            width: 48,
            height: 0,
            borderStyle: "solid",
            // borderWidth: "4px",
            borderColor: "rgba(0, 180, 179, 1)",
            marginTop: 24,
          }}
        />
        <div
          style={{
            display: "flex",
            marginTop: 36,
          }}
        >
          <span
            style={{
              fontSize: 18,

              color: "rgba(0, 180, 179, 1)",
              marginRight: 12,
            }}
          >
            Done? Put an update
          </span>
          <img
            alt="haha"
            style={{ width: 22, height: 22, borderRadius: 8 }}
            src="https://via.placeholder.com/22x22"
          />
        </div>
      </div>
    </div>
  );
}

export default Updates;
