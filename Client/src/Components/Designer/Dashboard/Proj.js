import React from "react";

function Proj() {
  return (
    <div
      style={{
        // position: "absolute",
        margin: 16,
      }}
    >
      <div
        style={{
          width: 385,
          height: 40,
          backgroundColor: "rgba(0, 180, 179, 1)",
          borderTopLeftRadius: 32,
          borderTopRightRadius: 32,
          position: "absolute",
          //   position: "relative",
        }}
      >
        {/* write the heading here */}
      </div>
      <div
        style={{
          width: 385,
          height: 480,
          backgroundColor: "white",
          boxShadow: "0px 4px 24px rgba(30, 31, 30, 0.08)",
          borderRadius: 32,
        }}
      >
        {/* write the body here */}
        <div
          style={{
            paddingTop: 40,
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              paddingTop: 42,
            }}
          >
            <span
              style={{
                fontSize: 24,
                fontWeight: "700",
                color: "rgba(30, 31, 30, 1)",
                margin: 0,
              }}
            >
              Company Name
            </span>
            <span
              style={{
                fontSize: 20,
                fontWeight: "500",
                marginTop: 48,
                color: "rgba(30, 31, 30, 1)",
              }}
            >
              Project Objective
            </span>
            <span
              style={{
                width: 338,
                fontSize: 18,
                textAlign: "center",
                color: "rgba(30, 31, 30, 1)",
                marginTop: 16,
              }}
            >
              Lorem ipsum dolor sit amet. Vivamus ra felis bibendum ut tristique
              et.
            </span>

            {/* create the date display  */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Proj;
