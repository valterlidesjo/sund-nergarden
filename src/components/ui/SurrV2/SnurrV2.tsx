import "./_snurrV2.scss";
import React, { useEffect, useState } from "react";
import svg from "../../../assets/snurr vit.svg";

export const SnurrV2: React.FC = () => {
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
  return (
    <div className={`snurr-container ${isScrolled ? "scrolled" : ""}`}>
      <div className="snurr"></div>
      <p className="boka-rum">BOKA</p>
    </div>
  );
};
