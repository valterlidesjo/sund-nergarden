import "./_snurrV2.scss";
import React, { useEffect, useState } from "react";

const SnurrV2: React.FC = () => {
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

  const handleClick = () => {
    window.open("https://online.bookvisit.com/package?channelid=918cee3d-0141-4e51-b886-ac9fcf09653c", "_blank", "noopener,noreferrer");
  };

  return (
    <div className={`snurr-container ${isScrolled ? "scrolled" : ""}`} onClick={handleClick}>
      <div className="snurr"></div>
      <p className="boka-rum">BOKA</p>
    </div>
  );
};

export default SnurrV2;
