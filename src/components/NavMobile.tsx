import { useEffect, useState } from "react";
import NavHamburger from "./ui/NavHamburger/NavHamburger";
import "./scss/_navMobile.scss";
import { useLocation, useNavigate } from "react-router";
import sundLogoWhite from "../assets/sund-logo-white.png";
import sundLogoWhiteW from "../assets/sund-logo-white.webp";
import NavigationLinks from "./extra/NavigationLinks";
import { throttle } from "lodash";

const NavMobile = () => {
  const [isNavActive, setIsNavActive] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const toggleNav = () => {
    setIsNavActive(!isNavActive);
    if (!isNavActive) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };
  useEffect(() => {
    setIsNavActive(false);
  }, [location.pathname]);

  const handleNavigation = (link: string) => {
    if (link.startsWith("http")) {
      window.location.href = link;
    } else if (link.startsWith("#")) {
      const targetId = link.substring(1);
      if (location.pathname === "/") {
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
          targetElement.scrollIntoView({ behavior: "smooth", block: "start" });
        }
        setIsNavActive(false);
      } else {
        navigate("/", { state: { targetId } });
      }
    } else {
      navigate(link);
    }
  };

  useEffect(() => {
    const handleScroll = throttle(() => {
      const scrollTop = window.scrollY;
      const threshold = 0;
      setIsScrolled(scrollTop > threshold);
    }, 200);

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [location.pathname]);

  useEffect(() => {
    if (isNavActive) {
      setIsScrolled(false);
    }
  }, [isNavActive]);

  return (
    <div className={`nav-container ${isNavActive ? "nav-active" : ""}`}>
      <div className={`toggle-nav-header ${isScrolled ? "scrolled" : ""}`}>
      <div className="nav-logo-container">
        <picture>
          <source srcSet={sundLogoWhiteW} type="image/webp" />
          <img src={sundLogoWhite} alt="Sund Nergården ritad bild" loading="lazy" decoding="async" />
        </picture>
      </div>
        <div className="toggle-nav-container" onClick={toggleNav}>
          <NavHamburger isOpen={isNavActive} toggleMenu={toggleNav} />
        </div>
      </div>

      {isNavActive && (
        <div className={`nav-active-container ${isNavActive ? "visible" : ""}`}>
          <NavigationLinks onClick={handleNavigation} />
        </div>
      )}
    </div>
  );
};

export default NavMobile;
