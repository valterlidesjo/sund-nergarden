import React from "react";
import "./scss/_footer.scss";
import TextSection from "./TextSection";
import sundWineStarList from "../assets/sund-star-wine-list.jpg";
import sundTripAdvisor from "../assets/sund-trip-advisor.png";
import sundLogoWhite from "../assets/sund-logo-white.png";
import sundLogoBlack from "../assets/sund-logo1.png";
import { matchPath, useLocation, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import useIsDesktop from "../services/useIsDesktop";

interface FooterProps {
  backgroundColor?: string;
  color?: string;
}

const Footer: React.FC<FooterProps> = ({
  backgroundColor = "#1C3620",
  color = "white",
}) => {
  const location = useLocation();
  const navigate = useNavigate();

  const bookUrl =
    "https://online.bookvisit.com/package?channelId=918cee3d-0141-4e51-b886-ac9fcf09653c";
  const youtubeUrl = "https://www.youtube.com/channel/UC8NbQ8ImK1SYKTbsEKKov1Q";
  const facebookUrl = "https://www.facebook.com/sundnergarden";
  const instaUrl = "https://www.instagram.com/sundnergarden/";
  const wineUrl = "https://starwinelist.com/sv/vinstallen/sund-nergarden";
  const tripAdvisorUrl =
    "https://www.tripadvisor.se/Hotel_Review-g2554479-d6882309-Reviews-Sund_Nergarden-Vagnharad_Sodermanland_County.html";
  const giftCard =
    "https://online.bookvisit.com/voucher?channelId=918cee3d-0141-4e51-b886-ac9fcf09653c";

  // Dynamiska stilar baserat på URL
  const getFooterStyles = () => {
    if (location.pathname === "/") {
      return {
        backgroundColor: "#1C3620",
        color: "white",
        logo: sundLogoWhite,
      }; // Startsidan
    } else if (location.pathname === "/rummen") {
      return {
        backgroundColor: "#1C3620",
        color: "white",
        logo: sundLogoWhite,
      }; // Rummen
    } else if (location.pathname === "/mat-dryck") {
      return {
        backgroundColor: "#D3E2D5",
        color: "black",
        logo: sundLogoBlack,
      }; // Mat & Dryck
    } else if (matchPath("/rummen/*", location.pathname)) {
      return {
        backgroundColor: "#D3E2D5",
        color: "black",
        logo: sundLogoBlack,
      }; // Alla sidor under /rummen
    } else {
      return { backgroundColor, color, logo: sundLogoWhite }; // Standardvärden
    }
  };

  const {
    backgroundColor: dynamicBackground,
    color: dynamicColor,
    logo,
  } = getFooterStyles();

  const isDesktop = useIsDesktop();

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

  return (
    <>
      <div
        className="footer-container"
        style={{ backgroundColor: dynamicBackground }}
      >
        {isDesktop ? (
          <>
            <div className="footer-text-container">
              <div className="sund-logo-container">
                <img src={logo} alt="Sund Nergården Logo" />
              </div>
              <div className="left-text">
                <TextSection
                  text="Hantera Bokning"
                  margin="1px 0"
                  color={dynamicColor}
                  onClick={() => handleNavigation(bookUrl)}
                />
                <TextSection
                  text="Mat & Dryck"
                  margin="1px 0"
                  color={dynamicColor}
                  onClick={() => handleNavigation("/mat-dryck")}
                />
                <TextSection
                  text="Kontakt"
                  margin="1px 0"
                  color={dynamicColor}
                  onClick={() => handleNavigation("#contact-container")}
                />
                <TextSection
                  text="Villkor & Regler"
                  margin="1px 0"
                  color={dynamicColor}
                  onClick={() => handleNavigation("/villkor-regler")}
                />
                <TextSection
                  text="Presentkort"
                  margin="1px 0"
                  color={dynamicColor}
                  onClick={() => handleNavigation(giftCard)}
                />
              </div>

              <div className="contact-footer-container">
                <TextSection
                  text="015 670 00 70"
                  color={dynamicColor}
                  margin="1px 0"
                />
                <TextSection
                  text="info@sundnergarden.se"
                  color={dynamicColor}
                  margin="1px 0"
                />
                <TextSection
                  text="Sund Nergården"
                  color={dynamicColor}
                  margin="1px 0"
                />
                <TextSection
                  text="619 94 Vagnhärad"
                  color={dynamicColor}
                  margin="1px 0"
                />
                <TextSection
                  text="Sverige"
                  color={dynamicColor}
                  margin="1px 0"
                />
              </div>

              <div className="right-text">
                <TextSection
                  text="Facebook"
                  color={dynamicColor}
                  padding="0 2rem 0 0"
                  margin="1px 0 1rem 0"
                  onClick={() => handleNavigation(facebookUrl)}
                />
                <TextSection
                  text="Instagram"
                  color={dynamicColor}
                  padding="0 2rem 0 0"
                  onClick={() => handleNavigation(instaUrl)}
                />
                <TextSection
                  text="Youtube"
                  color={dynamicColor}
                  padding="0 2rem 0 0"
                  onClick={() => handleNavigation(youtubeUrl)}
                />
                <div className="picture-container">
                  <div className="recommend-pictures">
                    <img
                      src={sundWineStarList}
                      alt="Wine Star List"
                      onClick={() => handleNavigation(wineUrl)}
                    />
                    <img
                      src={sundTripAdvisor}
                      alt="Trip Advisor"
                      onClick={() => handleNavigation(tripAdvisorUrl)}
                    />
                  </div>
                </div>
              </div>
            </div>
            <TextSection
              text="Copyright © 2024 Sund Nergården"
              textAlign="center"
              fontSize="1rem"
              margin="1rem 0 0 0"
              padding="0 0 11rem 0"
              color={dynamicColor}
            />
          </>
        ) : (
          <>
            <div className="footer-text-container">
              <div className="left-text">
                <TextSection
                  text="Hantera Bokning"
                  margin="1px 0"
                  color={dynamicColor}
                  onClick={() => handleNavigation(bookUrl)}
                />
                <TextSection
                  text="Mat & Dryck"
                  margin="1px 0"
                  color={dynamicColor}
                  onClick={() => handleNavigation("/mat-dryck")}
                />
                <TextSection
                  text="Kontakt"
                  margin="1px 0"
                  color={dynamicColor}
                  onClick={() => handleNavigation(bookUrl)}
                />
              </div>

              <div className="right-text">
                <TextSection
                  text="Villkor & Regler"
                  margin="1px 0"
                  color={dynamicColor}
                  onClick={() => handleNavigation(bookUrl)}
                  textAlign="right"
                />
                <TextSection
                  text="Presentkort"
                  margin="1px 0"
                  color={dynamicColor}
                  onClick={() => handleNavigation(bookUrl)}
                  textAlign="right"
                />
                <div className="icon-container">
                  <span>
                    <FontAwesomeIcon icon={faFacebook} onClick={() => handleNavigation(facebookUrl)} />
                  </span>
                  <span>
                    <FontAwesomeIcon icon={faInstagram} onClick={() => handleNavigation(instaUrl)} />
                  </span>
                  <span>
                    <FontAwesomeIcon icon={faYoutube} onClick={() => handleNavigation(youtubeUrl)} />
                  </span>
                </div>
              </div>
            </div>
            <TextSection
              text="Copyright © 2024 Sund Nergården"
              textAlign="center"
              fontSize="1rem"
              margin="0 0 0 0"
              padding="2rem 0 10rem 0"
              color={dynamicColor}
            />
          </>
        )}
      </div>
    </>
  );
};

export default Footer;
