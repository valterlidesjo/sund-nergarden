import { useState } from "react";
import "./_NavHamburger.scss";

const NavHamburger = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <nav className={`hamburger-nav ${isOpen ? "open" : ""}`} onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
    </nav>
  )
}

export default NavHamburger;