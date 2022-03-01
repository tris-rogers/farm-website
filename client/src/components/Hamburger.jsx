import React, { useState } from "react";

function Hamburger(props) {
  const [isExpanded, setIsExpanded] = useState(false);

  function handleClick() {
    setIsExpanded(!isExpanded);
    props.displayLinks(isExpanded);
  }

  return (
    <div>
      <div className="hamburger-container" onClick={handleClick}>
        <div
          className={isExpanded ? "hamburger-bar topBar" : "hamburger-bar"}
        ></div>
        <div
          className={isExpanded ? "hamburger-bar middleBar" : "hamburger-bar"}
        ></div>
        <div
          className={isExpanded ? "hamburger-bar bottomBar" : "hamburger-bar"}
        ></div>
      </div>
    </div>
  );
}

export default Hamburger;
