import React from "react";
import { slide as Menu } from "react-burger-menu";

import "./styles.css";

export default props => {
  return (
    
    <Menu {...props}>
      
      
      <a className="menu-item" href="about-us">about us</a>

      <a className="menu-item" href="/">
        contact
      </a>

      <a className="menu-item" href="/">
        departments
      </a>

      <a className="menu-item" href="/">
        careers
      </a>


      
    </Menu>
  );
};