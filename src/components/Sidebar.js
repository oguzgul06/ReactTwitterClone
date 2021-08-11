import React from "react";
import "./Sidebar.css";
import TwitterIcon from "@material-ui/icons/Twitter";
import SidebarOption from "./SidebarOption";

function Sidebar() {
  return (
    <div className="sidebar">
      {/* Twitter Icon */}
      <TwitterIcon />

      {/* SidebarOption */}
      <SidebarOption/>
      {/* SidebarOption */}
      <SidebarOption/>
      {/* SidebarOption */}
      <SidebarOption/>
      {/* SidebarOption */}
      <SidebarOption/>
      {/* SidebarOption */}
      <SidebarOption/>
      {/* SidebarOption */}
      <SidebarOption/>
      {/* SidebarOption */}
      <SidebarOption/>

      {/* Button -> Tweet */}
    </div>
  );
}

export default Sidebar;
