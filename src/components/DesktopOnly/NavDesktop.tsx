import { useEffect, useState } from "react";
import { NavLinks } from "../../pages/extra/NavLinks";
import "../scss/_navDesktop.scss";
import { useLocation, useNavigate } from "react-router-dom";

const NavDesktop = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [location.pathname]);

  const handleNavigation = (link: string) => {
    if (link.startsWith("http")) {
      window.open(link, "_blank", "noopener,noreferrer");
    } else if (link.startsWith("#")) {
      const targetId = link.substring(1);
      if (location.pathname === "/") {
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
          const offset = -80; 
          const elementPosition = targetElement.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.scrollY + offset;

          window.scrollTo({
            top: offsetPosition,
            behavior: "smooth",
          });
        }
      } else {
        navigate("/", { state: { targetId } });
      }
    } else {
      navigate(link);
    }
  };

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
    if (location.pathname === "/oppetider") return "link-white";
    return "link-default";
  };

  return (
    <>
      <div className={`nav-desktop-container ${isScrolled ? "scrolled" : ""}`}>
        <ul className="nav-desktop-list">
        {NavLinks.map((navItem, index) => (
          <li key={index} className="nav-desktop-item">
            <a
              onClick={() => handleNavigation(navItem.link)}
              className={`nav-desktop-link ${isScrolled ? "scrolled" : ""} ${getLinkColorClass()}`}
            >
              {navItem.text}
            </a>
          </li>
        ))}
        </ul>
      </div>
    </>
  );
};

export default NavDesktop;
