import React from "react";
import Brief from "./Brief";
import Expt from "./Expt";
import Proj from "./Proj";
import Updates from "./Updates";
import Upload from "./Upload";

function Main() {
  return (
    <div
      style={{
        display: "flex",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        <div>
          <Proj />
        </div>
        <div>
          <Expt />
        </div>
      </div>
      <div>
        <div>
          <Brief />
        </div>
        <div>
          <Upload />
        </div>
      </div>
      <div>
        <div>
          <Updates />
        </div>
        <div>
          <Updates />
        </div>
        <div>
          <Updates />
        </div>
        <div>
          <Updates />
        </div>
      </div>
      <div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
}

export default Main;
