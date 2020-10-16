import React from "react";
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
      <BtnSidebar icon={<HomeIcon />}>Blog Home</BtnSidebar>
      <BtnSidebar icon={<EditIcon />}>Single Post</BtnSidebar>
      <BtnSidebar icon={<GroupIcon />}>About Xtra</BtnSidebar>
      <BtnSidebar icon={<MessageIcon />}>Contact Us</BtnSidebar>
    </div>
  );
};
