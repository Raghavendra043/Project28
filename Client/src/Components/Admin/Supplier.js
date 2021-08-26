/* eslint-disable no-cond-assign */
import React from "react";

function Supplier(props) {
  console.log(props.data);
  return (
    <div>
      {(() => {
        // eslint-disable-next-line no-cond-assign
        if (props.data === "Dashboard") {
          return <div>someCase</div>;
        } else if (props.data === "Projects") {
          return <div>Projects</div>;
        } else if (props.data === "Meetings") {
          return <div>Meetings</div>;
        } else if (props.data === "Email") {
          return <div>Email</div>;
        } else if (props.data === "Client") {
          return <div>Client</div>;
        } else if (props.data === "Designer") {
          return <div>Designer</div>;
        } else if (props.data === "Misc") {
          return <div>Misc</div>;
        }
      })()}
    </div>
  );
}

export default Supplier;
