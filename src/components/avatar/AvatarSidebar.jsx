import React from "react";
import "./AvatarSidebar.css";

export const AvatarSidebar = (props) => {
  return (
    <div className="avatar">
      <div className="avatar-img">
        <img src={props.image} alt="user" />
      </div>
      <div className="avatar-username">
        {props.user}
      </div>
      <div className="avatar-description">
        {props.description}
      </div>

    </div>
  );
};
