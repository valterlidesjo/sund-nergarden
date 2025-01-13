import "./_NavHamburger.scss";

interface NavHamburgerProps {
  isOpen: boolean;
  toggleMenu: () => void;
}

const NavHamburger: React.FC<NavHamburgerProps> = ({isOpen, toggleMenu, }) => {
  
  return (
    <nav className={`hamburger-nav ${isOpen ? "open" : ""}`} onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
    </nav>
  )
}

export default NavHamburger;