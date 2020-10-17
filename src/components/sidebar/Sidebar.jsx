import React from "react";
import { Link } from "react-router-dom";
import { BtnSidebar } from "../btn-sidebar/BtnSidebar";
import { AvatarSidebar } from "../avatar/AvatarSidebar";
import { BtnNtwSidebar } from "../btn-ntw-sidebar/BtnNtwSidebar";

import { ReactComponent as EditIcon } from "../../icons/edit.svg";
import { ReactComponent as GroupIcon } from "../../icons/group.svg";
import { ReactComponent as HomeIcon } from "../../icons/home.svg";
import { ReactComponent as MessageIcon } from "../../icons/message.svg";
import { ReactComponent as FacebookIcon } from "../../icons/facebook.svg";
import { ReactComponent as InstagramIcon } from "../../icons/instagram.svg";
import { ReactComponent as TwitterIcon } from "../../icons/twitter.svg";

import "./Sidebar.css";

export const Sidebar = () => {
  return (
    <div className="sidebar">
      <AvatarSidebar image="https://picsum.photos/100/100" user="AndyGeek" />
      <Link to="/" className="link">
        <BtnSidebar icon={<HomeIcon className="btn-icon"/>}>Blog Home</BtnSidebar>
      </Link>
      <Link to="/projects" className="link">
        <BtnSidebar icon={<EditIcon className="btn-icon"/>}>Projects</BtnSidebar>
      </Link>
      <Link to="/about" className="link">
        <BtnSidebar icon={<GroupIcon className="btn-icon"/>}>About us</BtnSidebar>
      </Link>
      <Link to="/contact" className="link">
        <BtnSidebar icon={<MessageIcon className="btn-icon"/>}>Contact Us</BtnSidebar>
      </Link>
      <div className="ntw-buttons">
        <BtnNtwSidebar icon={<FacebookIcon className="ntw-icon" />} />
        <BtnNtwSidebar icon={<InstagramIcon className="ntw-icon"/>} />
        <BtnNtwSidebar icon={<TwitterIcon className="ntw-icon"/>} />
      </div>
    </div>
  );
};
