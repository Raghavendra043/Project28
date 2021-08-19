import React from "react";
import Brief from "./Brief";
import Expt from "./Expt";
import Proj from "./Proj";
import Upload from "./Upload";

function Main() {
  return (
    <div>
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
        <div></div>
        <div></div>
      </div>
      <div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
}

export default Main;
