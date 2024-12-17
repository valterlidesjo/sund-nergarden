import React, { useEffect, useState } from "react";
import NavHamburger from "./ui/NavHamburger/NavHamburger";
import "./scss/_navMobile.scss";
import { useLocation, useNavigate } from "react-router";
import { NavLinks } from "../pages/extra/NavLinks";
import userScreenHeight from "../services/userWindowHeight";


const NavMobile = () => {
  const [isNavActive, setIsNavActive] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const screenHeight = userScreenHeight();

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

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY; // Hämta antal pixlar användaren scrollat
      const threshold =
        location.pathname === "/" ? screenHeight - 80 : 0;
      setIsScrolled(scrollTop > threshold); 
    };

    window.addEventListener("scroll", handleScroll); // Lägg till scroll-listener
    return () => {
      window.removeEventListener("scroll", handleScroll); // Ta bort listener vid unmount
    };
  },  [location.pathname]);

  useEffect(() => {
    if (isNavActive) {
      setIsScrolled(false);
    }
  }, [isNavActive]);

  return (
    <div className={`nav-container ${isNavActive ? "nav-active" : ""}`}>
      <div className="nav-logo-container"></div>
      <div className={`toggle-nav-header ${isScrolled ? "scrolled" : ""}`}>
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
