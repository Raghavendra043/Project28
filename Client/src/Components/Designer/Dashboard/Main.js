import React from "react";
import Brief from "./Brief";
import Expt from "./Expt";
import LeftNav from "./LeftNav";
import Proj from "./Proj";
import TopNav from "./TopNav";
import CurrentState from "./CurrentState";
import Upload from "./Upload";
import Updates from "./Updates";
import Chatbox from "./Chatbox";

function Main() {
  return (
    <div
      style={{
        display: "flex",
      }}
    >
      <LeftNav />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        <TopNav />
        <div
          style={{
            display: "flex",
          }}
        >
          <div>
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
              <CurrentState />
            </div>
            <div>
              <CurrentState />
            </div>
            <div>
              <CurrentState />
            </div>
            <div>
              <CurrentState />
            </div>
          </div>
          <div>
            <div>
              <Updates />
            </div>
            <div>
              <Chatbox />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
