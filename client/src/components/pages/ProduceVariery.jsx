import { isValidInputTimeValue } from "@testing-library/user-event/dist/utils";
import React, { useState } from "react";

function ProduceVariety(props) {
  const [isClicked, setIsClicked] = useState(false);

  function handleClick(e) {
    setIsClicked(!isClicked);
  }

  const style = {
    display: isClicked ? "block" : "none",
  };

  const style2 = {
    position: isClicked && "absolute",
    height: isClicked && "100%",
    width: isClicked && "100%",
    backgroundColor: "red",
    top: "10%",

  };

  return (
    <div className="card-produce" onClick={handleClick} style={style2}>
      <div className="produceImg">
        <img src={props.imgSrc} />
      </div>
      <div className="produce-title" style={style}>
        <h2>{props.title}</h2>
      </div>
      <div className="produce-info" style={style}>
        {props.info}
      </div>
    </div>
  );
}

export default ProduceVariety;
