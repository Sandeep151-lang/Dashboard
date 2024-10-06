import React from "react";
import "./header.css";
import { GiHamburgerMenu } from "react-icons/gi";

const Header = ({isOpen,open}) => {
  return (
    <div className="navbar position-sticky">
      <div className="d-flex gap-2">
        <div className="d-lg-none ms-4">
        <GiHamburgerMenu size={30} className="GiHamburgerMenu" onClick={()=>isOpen(!open)}/>
        </div>
        <p className="nav-title my-auto mx-3">HELLO, PUNEET DHIMAN</p>
      </div>
      
    </div>
  );
};

export default Header;
