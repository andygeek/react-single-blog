import React from "react";
import "./BtnSidebar.css";

export const BtnSidebar = (props) => {
  return (
    <div className="btn-sidebar">
      <span className="btn-sidebar-icon">{props.icon}</span>
      <div className="btn-sidebar-title">{props.children}</div>
    </div>
  );
};
