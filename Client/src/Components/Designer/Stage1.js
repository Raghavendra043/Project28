import React from "react";
import "./Stage1.css";

function stage1() {
  return (
    <div className="stage1">
      <div className="card">
        <div className="stage1TextA">Complete Your profile</div>
        <div className="stage1TextB">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
        </div>
        <div className="stage1Form">
          <div className="textA">Choose Specializations</div>
          <div className="textB">You can only choose 3 options</div>
          <input className="special" type="text" />
          <div className="textC">Are you a Student?</div>

          {/* design this part */}
          <label for="optionA">YES</label>
          <input type="checkbox" id="optionA" name="optionA" />
          <label for="optionB">YES</label>
          <input type="checkbox" id="optionB" name="optionB" />

          {/* work exprience */}
          <div className="textD">Work Experience</div>
          <div className="cls">
            <div className="clsA">
              <div className="clsAText">Your Designation</div>
            </div>
            <div className="clsB">
              <div className="clsAText">Your Experience in this Job</div>
            </div>
          </div>
          <div className="cls">
            <div className="clsA">
              <div className="clsAText">Your Designation</div>
            </div>
            <div className="clsB">
              <div className="clsAText">Your Experience in this Job</div>
            </div>
          </div>
          <div className="cls">
            <div className="clsA">
              <div className="clsAText">Your Designation</div>
            </div>
            <div className="clsB">
              <div className="clsAText">Your Experience in this Job</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default stage1;
