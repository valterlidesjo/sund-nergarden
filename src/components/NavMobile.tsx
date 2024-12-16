import React, { useEffect, useState } from "react";
import NavHamburger from "./ui/NavHamburger/NavHamburger";
import "./scss/_navMobile.scss";
import { useLocation, useNavigate } from "react-router";
import { NavLinks } from "../pages/extra/NavLinks";


const NavMobile = () => {
  const [isNavActive, setIsNavActive] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const toggleNav = () => {
    setIsNavActive(!isNavActive);
  };
  useEffect(() => {
    setIsNavActive(false);
  }, [location.pathname]);

  const handleNavigation = (link: string) => {
    if (link.startsWith("http")) {
      window.location.href = link;
    } else {
      navigate(link); 
    }
  };

  return (
    <div className={`nav-container ${isNavActive ? "nav-active" : ""}`}>
      <div className="nav-logo-container"></div>
      <div className="toggle-nav-header">
        <div className="toggle-nav-container" onClick={toggleNav}>
          <NavHamburger isOpen={isNavActive} toggleMenu={toggleNav}/>
        </div>
      </div>

      {isNavActive && (
        <div className={`nav-active-container ${isNavActive ? "visible" : ""}`}>
          {NavLinks.map((item, index) => (
            <p key={index} onClick={() => handleNavigation(item.link)}>
              {item.text}
            </p>
          ))}
        </div>
      )}
    </div>
  );
};

export default NavMobile;
