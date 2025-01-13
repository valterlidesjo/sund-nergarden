import "./_snurrV2.scss";
import React, { useEffect, useState } from "react";

const SnurrV2: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isNavActive, setIsNavActive] = useState(false);

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

  const handleClick = () => {
    window.open(
      "https://online.bookvisit.com/package?channelid=918cee3d-0141-4e51-b886-ac9fcf09653c",
      "_blank",
      "noopener,noreferrer"
    );
  };

  useEffect(() => {
    const navContainer = document.querySelector(".nav-container");

    const observer = new MutationObserver(() => {
      if (navContainer?.classList.contains("nav-active")) {
        setIsNavActive(true);
      } else {
        setIsNavActive(false);
      }
    });

    if (navContainer) {
      observer.observe(navContainer, {
        attributes: true,
        attributeFilter: ["class"],
      });
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div
      className={`snurr-container ${isScrolled ? "scrolled" : ""} ${
        isNavActive ? "hidden" : ""
      }`}
      onClick={handleClick}
    >
      <div className="snurr"></div>
      <p className="boka-rum">BOKA</p>
    </div>
  );
};

export default SnurrV2;
