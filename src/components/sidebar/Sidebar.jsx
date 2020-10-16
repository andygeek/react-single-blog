import React from "react";
import { Link } from "react-router-dom";
import { BtnSidebar } from "../btn-sidebar/BtnSidebar";
import { AvatarSidebar } from "../avatar/AvatarSidebar";
import { ReactComponent as EditIcon } from "../../icons/edit.svg";
import { ReactComponent as GroupIcon } from "../../icons/group.svg";
import { ReactComponent as HomeIcon } from "../../icons/home.svg";
import { ReactComponent as MessageIcon } from "../../icons/message.svg";

import "./Sidebar.css";

export const Sidebar = () => {
  return (
    <div className="sidebar">
      <AvatarSidebar />
      <Link to="/" className="link">
        <BtnSidebar icon={<HomeIcon />}>Blog Home</BtnSidebar>
      </Link>
      <Link to="/projects" className="link">
        <BtnSidebar icon={<EditIcon />}>Projects</BtnSidebar>
      </Link>
      <Link to="/about" className="link">
        <BtnSidebar icon={<GroupIcon />}>About us</BtnSidebar>
      </Link>
      <Link to="/contact" className="link">
        <BtnSidebar icon={<MessageIcon />}>Contact Us</BtnSidebar>
      </Link>
    </div>
  );
};
