import React, { useEffect, useState } from "react";
import "./scss/_contact.scss";
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";
import MenuBtn from "./ui/MenuBtn/MenuBtn";
import sundHus2 from "../assets/sund-hus2.jpeg";

interface ContactProps {
  header: string;
  children: React.ReactNode;
  facebook: string;
  instagram: string;
  youtube: string;
}

const Contact: React.FC<ContactProps> = ({
  header,
  children,
  facebook,
  instagram,
  youtube,
}) => {
  const handleClick = () => {
    console.log("BananKontakt");
  };

  const [isDesktop, setIsDesktop] = useState(window.innerWidth > 600);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth > 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <div className="contact-container" id="contact-container">
        <img
          className="contact-image"
          src={sundHus2}
          alt="Sund Nergården Växthus"
        />
        <div className="header-container">
          <p className="header">{header}</p>
        </div>
        {isDesktop ? (
          <>
            <div className="content-container">
              <div className="content-left-container">
                {children}
                <MenuBtn text="ÖPPETIDER" onClick={handleClick} />
              </div>
              <div className="content-right-container">
                <div className="social-media-container">
                  <div className="facebook">
                    <FaFacebook />
                    {facebook}
                  </div>
                  <div className="instagram">
                    <FaInstagram /> {instagram}
                  </div>
                  <div className="youtube">
                    <FaYoutube /> {youtube}
                  </div>
                </div>
                <MenuBtn text="KONTAKTA OSS" onClick={handleClick} margin="5rem 0 0 0"/>
              </div>
            </div>
          </>
        ) : (
          <>
            <div className="content-container">
              {children}
              <div className="social-media-container">
                <div className="facebook">
                  <FaFacebook />
                  {facebook}
                </div>
                <div className="instagram">
                  <FaInstagram /> {instagram}
                </div>
                <div className="youtube">
                  <FaYoutube /> {youtube}
                </div>
              </div>
              <MenuBtn text="KONTAKTA OSS" onClick={handleClick} />
              <MenuBtn text="ÖPPETIDER" onClick={handleClick} />
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default Contact;
