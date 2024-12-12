import React, { useState } from "react";
import NavHamburger from "./ui/NavHamburger/NavHamburger";

const NavMobile = () => {
  const [isNavActive, setIsNavActive] = useState(false);

  const toggleNav = () => {
    setIsNavActive(!isNavActive);
  };
  return (
    <div className="nav-container">
      <div className="nav-head-container">
        <div className="toggle-nav-container" onClick={toggleNav}>
          <NavHamburger />
        </div>
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
