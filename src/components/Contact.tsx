import React, { useEffect, useState } from "react";
import "./scss/_contact.scss";
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";
import MenuBtn from "./ui/MenuBtn/MenuBtn";
import sundHus2 from "../assets/sund-hus2.jpeg";
import sundHus2W from "../assets/sund-hus2.webp";
import { useNavigate } from "react-router-dom";
import useIsDesktop from "../services/useIsDesktop";


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
  const navigate = useNavigate();

  const handleClickContact = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    navigate("/kontakt");
  };
  const handleClickOpen = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    navigate("/oppetider");
  };

  const isDesktop = useIsDesktop();

  return (
    <>
      <div className="contact-container" id="contact-container">
        <picture>
        <source srcSet={sundHus2W} type="image/webp" />
        <img
          className="contact-image"
          src={sundHus2}
          alt="Sund Nergården Växthus"
          loading="lazy"
          decoding="async"
        />
        </picture>
        <div className="header-container">
          <p className="header">{header}</p>
        </div>
        {isDesktop ? (
          <>
            <div className="content-container">
              <div className="content-left-container">
                {children}
                <MenuBtn text="ÖPPETIDER" onClick={handleClickOpen} />
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
                <MenuBtn text="KONTAKTA OSS" onClick={handleClickContact} margin="5rem 0 0 0"/>
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
              <MenuBtn text="KONTAKTA OSS" onClick={handleClickContact} />
              <MenuBtn text="ÖPPETIDER" onClick={handleClickOpen} />
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default Contact;
