import React from "react";
import "./scss/_footer.scss";
import TextSection from "./TextSection";
import sundWineStarList from "../assets/sund-star-wine-list.jpg";
import sundTripAdvisor from "../assets/sund-trip-advisor.png";

// interface FooterProps{
//     children: React.ReactNode;
// }

const Footer = () => {
  return (
    <>
      <div className="footer-container">
        <div className="footer-text-container">
          <div className="left-text">
            <TextSection text="Hantera Bokning" margin="1px 0" />
            <TextSection text="Mat & Dryck" margin="1px 0" />
            <TextSection text="Kontakt" margin="1px 0" />
            <TextSection text="Villkor & Regler" margin="1px 0" />
            <TextSection text="Presentkort" margin="1px 0" />
          </div>

          <div className="right-text">
            <TextSection text="Facebook" />
            <TextSection text="Instagram" />
            <TextSection text="Youtube" />
          </div>

          <div className="contact-container">
            <TextSection text="015 670 00 70" />
            <TextSection text="info@sundnergarden.se" />
            <TextSection text="619 94 Vagnhärad Sweden" />
          </div>

          <div className="picture-container">
            <TextSection text="Rekommenderas av" />
            <div className="recommend-pictures">
              <img src={sundWineStarList} alt="Wine Star List" />
              <img src={sundTripAdvisor} alt="Trip Advisor" />
            </div>
          </div>
        </div>
        <TextSection
          text="Copyright © 2024 Sund Nergården"
          textAlign="center"
          fontSize="1rem"
          margin="1rem 0 0 0"
          padding="0 0 2rem 0"
        />
      </div>
    </>
  );
};

export default Footer;
