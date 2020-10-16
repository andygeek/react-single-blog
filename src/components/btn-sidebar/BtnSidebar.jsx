import React, { useState } from "react";
import "./BtnSidebar.css";

export const BtnSidebar = (props) => {
  
  const [over, setOver] = useState(false);

  const handleMouseOver = () => {
    setOver(true);
  };
  const handleMouseOut = () => {
    setOver(false);
  };

  return (
    <div
      className="btn-sidebar"
      onMouseEnter={handleMouseOver}
      onMouseLeave={handleMouseOut}
    >
      <span className={over ? "btn-sidebar-icon active" : "btn-sidebar-icon"}>
        {props.icon}
      </span>
      <div className={over ? "btn-sidebar-title active" : "btn-sidebar-title"}>{props.children}</div>
    </div>
  );
};


