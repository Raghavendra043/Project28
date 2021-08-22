import React from "react";

function Upload() {
  return (
    <div>
      <div
        style={{
          width: 583 - 2 * 32,
          height: 428 - 2 * 32,
          backgroundColor: "white",
          boxShadow: "0px 4px 24px rgba(30, 31, 30, 0.08)",
          borderRadius: 32,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: 32,
        }}
      >
        <div
          style={{
            width: 164,
            height: 156,
            backgroundColor: "rgba(0, 221, 219.77, 0.13)",
            borderRadius: 64,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img
            alt="btn-up"
            style={{ width: 70.29, height: 62.48, borderRadius: 8 }}
            src="https://via.placeholder.com/70.28571319580078x62.47566223144531"
          />
        </div>
      </div>
    </div>
  );
}

export default Upload;
