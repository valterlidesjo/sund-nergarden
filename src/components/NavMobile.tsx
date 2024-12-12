import React, { useState } from "react";
import NavHamburger from "./ui/NavHamburger/NavHamburger";
import "./scss/_navMobile.scss";

const NavMobile = () => {
  const [isNavActive, setIsNavActive] = useState(false);

  const toggleNav = () => {
    setIsNavActive(!isNavActive);
  };
  return (
    <div className="nav-container" >
      
        <div className="toggle-nav-container" onClick={toggleNav}>
          <NavHamburger />
        </div>
      
      {isNavActive && (
        <div className="nav-active-container">
          <p>HEM</p>
          <p>MAT & DRYCK</p>
          <p>RUM & GLAMPING</p>
          <p>BAD & BASTU</p>
          <p>BOKA RUM</p>
          <p>KONTAKTA OSS</p>
        </div>
      )}
    </div>
  );
};

export default NavMobile;
