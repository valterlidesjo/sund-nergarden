import { useEffect, useState } from "react";
import { NavLinks } from "../../pages/extra/NavLinks";
import "../scss/_navDesktop.scss";

const NavDesktop = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
          if (window.scrollY > 50) {
            setIsScrolled(true); // Lägg till scrolled-klass om scrollen är mer än 50px
          } else {
            setIsScrolled(false); // Ta bort scrolled-klass om scrollen är mindre än 50px
          }
        };
    
        window.addEventListener("scroll", handleScroll);
    
        // Rensa event listener när komponenten avmonteras
        return () => {
          window.removeEventListener("scroll", handleScroll);
        };
      }, []);

  return (
    <>
    <div className={`nav-desktop-container ${isScrolled ? "scrolled" : ""}`}>
    <ul className="nav-desktop-list">
        {NavLinks.map((navItem, index) => (
          <li key={index} className="nav-desktop-item">
            {navItem.link.startsWith("http") ? (
              <a href={navItem.link} target="_blank" rel="noopener noreferrer" className={`${isScrolled ? "scrolled" : ""}`}>
                {navItem.text}
              </a>
            ) : (
              <a href={navItem.link} className={`${isScrolled ? "scrolled" : ""}`}>{navItem.text}</a>
            )}
          </li>
        ))}
      </ul>
    </div>
    </>
  )
}

export default NavDesktop