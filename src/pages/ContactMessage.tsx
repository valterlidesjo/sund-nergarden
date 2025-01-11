import React from "react";
import TextSection from "../components/TextSection";
import "./scss/_contactMessage.scss";
import useIsDesktop from "../services/useIsDesktop";
import { useNavigate } from "react-router-dom";

const ContactMessage = () => {
    const isDesktop = useIsDesktop();
    const navigate = useNavigate();
    const handleX = () => {
        navigate("/");
    }
  return (
    <>
      <div className="contact-message-container">
        <div className="contact-x-container" onClick={handleX}>
          <div className="contact-x">&times;</div>
        </div>
        <div className="contact-bottom-container">
          <div className="contact-text-container">
            <div className="contact-header">
                {isDesktop ? (
                    <TextSection
                    text="Vi finns här för att hjälpa er!"
                    color="black"
                    fontSize="2.2rem"
                    padding="0"
                    margin="0 0 0.5rem 0"
                  />
                ) : (

              <TextSection
                text="Vi finns här för att hjälpa er!"
                color="black"
                fontSize="1.4rem"
                padding="0"
                margin="0 0 0.5rem 0"
              />
                )}
            </div>
            <div className="contact-text">
                {isDesktop ?  (
                    <TextSection
                      text="Låt oss veta hur vi kan på bästa möjliga sätt hjälpa er. Kontakta oss med formuläret så kommer vi återkomma till er så snart som möjligt."
                      color="black"
                      padding="0 "
                      lineHeight="3"
                      margin="0"
                    />
                ) : (
                    <TextSection
                    text="Låt oss veta hur vi kan på bästa möjliga sätt hjälpa er. Kontakta oss med formuläret så kommer vi återkomma till er så snart som möjligt."
                    color="black"
                    padding="0 "
                    lineHeight="2"
                    margin="0"
                  />
                )}
            </div>
          </div>
          <form className="contact-form">
            <input type="text" placeholder="Namn" className="contact-input" />
            <input type="email" placeholder="Mail" className="contact-input" />
            <textarea
              placeholder="Meddelande"
              className="contact-textarea"
            ></textarea>
            <button className="contact-button">Skicka</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default ContactMessage;
