import { useEffect, useState } from "react";
import { NavLinks } from "../../pages/extra/NavLinks";
import "../scss/_navDesktop.scss";

const NavDesktop = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
          if (window.scrollY > 50) {
            setIsScrolled(true); 
          } else {
            setIsScrolled(false); 
          }
        };
    
        window.addEventListener("scroll", handleScroll);

        return () => {
          window.removeEventListener("scroll", handleScroll);
        };
      }, []);

      const getLinkColorClass = () => {
        if (location.pathname === "/mat-dryck") return "link-white";
        if (location.pathname === "/") return "link-white";
        if (location.pathname === "/rummen") return "link-black";
        return "link-default";
      };

  return (
    <>
    <div className={`nav-desktop-container ${isScrolled ? "scrolled" : ""}`}>
    <ul className="nav-desktop-list">
        {NavLinks.map((navItem, index) => (
          <li key={index} className="nav-desktop-item">
            {navItem.link.startsWith("http") ? (
              <a href={navItem.link} target="_blank" rel="noopener noreferrer" className={`${isScrolled ? "scrolled" : ""} ${getLinkColorClass()}`}>
                {navItem.text}
              </a>
            ) : (
              <a href={navItem.link} className={`${isScrolled ? "scrolled" : ""} ${getLinkColorClass()}`}>{navItem.text}</a>
            )}
          </li>
        ))}
      </ul>
    </div>
    </>
  )
}

export default NavDesktop