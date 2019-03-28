import React from "react";
import { slide as Menu } from "react-burger-menu";

import "./styles.css";

export default props => {
  return (
    
    <Menu {...props}>
      <a className="menu-item" href="about-us">About Us</a>

      <a className="menu-item" href="/">
        Contact
      </a>

      <a className="menu-item" href="/">
        Departments
      </a>

      <a className="menu-item" href="/">
        Careers
      </a>
    </Menu>
  );
};