import React from "react";
import "./Stage2.css";

function Stage2() {
  return (
    <div className="stage1">
      <div className="stage1TextA">Complete Your profile</div>
      <div className="stage1TextB">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
      </div>
      <div className="stage1Form">
        <div className="textA">Estimated Price Range</div>
        <div className="textB">Hourly Payment</div>

        <div className="multiRangeSlider">
          <input type="range" min="0" max="1000" id="inputLeft" />
          <input type="range" min="0" max="1000" id="inputRight" />

          <div className="slider">
            <div className="track"></div>
            <div className="range"></div>
            <div className="thumb left"></div>
            <div className="thumb right"></div>
          </div>
        </div>
        <div className="textC">Portfolio</div>
        <input
          type="text"
          id="linking"
          placeholder="Link to your website / behance / dribbble etc."
        />
        {/* design this part */}
        <div id="options">
          <input type="checkbox" id="optionA" name="optionA" />
          <label for="optionA" id="optionAtext">
            By selecting this box, you are providing us consent to share your
            portfolio with potential clients in order to provide you with
            opportunities.
          </label>
        </div>
      </div>
    </div>
  );
}

export default Stage2;
