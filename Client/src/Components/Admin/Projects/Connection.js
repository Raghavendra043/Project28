import React from "react";
import CreateProjects from "./CreateProjects";
import ListofProjects from "./ListofProjects";

function Connection(props) {
  return (
    <div>
      {(() => {
        // eslint-disable-next-line no-cond-assign
        if (props.data === 0) {
          return (
            <div>
              <ListofProjects />{" "}
            </div>
          );
        } else if (props.data === 1) {
          return (
            <div>
              <CreateProjects />
            </div>
          );
        }
      })()}
    </div>
  );
}

export default Connection;
