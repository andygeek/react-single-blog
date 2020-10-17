import React from "react";
import "./BtnNtwSidebar.css";

export const BtnNtwSidebar = (props) => {
  return (
    <div className="container-ntw-button">
      <div className="ntw-icon">{props.icon}</div>
    </div>
  );
};
