import React, { Suspense, useEffect, useState } from "react";
const HorizontalScroll = React.lazy(
  () => import("../components/HorizontalScroll")
);
import sundStartImage from "../assets/sund-hus1.jpeg";
import sundStartImageW from "../assets/sund-hus1.webp";
import sundHus2 from "../assets/sund-hus2.jpeg";
import sundHus2W from "../assets/sund-hus2.webp";
import "./scss/_homepage.scss";
import { images } from "./extra/HomepageImages";
const TextSection = React.lazy(() => import("../components/TextSection"));
const Contact = React.lazy(() => import("../components/Contact"));
import { useLocation } from "react-router-dom";
const SearchBooking = React.lazy(() => import("../components/SearchBooking"));
const HomePicturesDesktop = React.lazy(
  () => import("../components/DesktopOnly/HomePicturesDesktop,")
);

const HomePage = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.state?.targetId) {
      const targetElement = document.getElementById(location.state.targetId);
      if (targetElement) {
        const offset = -80;
        const elementPosition = targetElement.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.scrollY + offset;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });
      }
    }
  }, [location.state]);

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
      <div className="homepage-pic-container">
        <picture>
          <source srcSet={sundStartImageW} type="image/webp" />
          <img src={sundStartImage} alt="Sund Start Image" />
        </picture>

        <div className="homepage-text-container">
          <p className="homepage-header-text">Sund Nergården</p>
          <span className="line-homepage"></span>
          <p className="homepage-text">Hideaway för vuxna</p>
        </div>
      </div>
      <div className="homepage-container">
        {isDesktop ? (
          <>
            <Suspense fallback={<div>Loading...</div>}>
              <TextSection
                text="Sund Nergården - Hideaway för vuxna"
                textAlign="center"
                margin="5rem 1rem 0 1rem"
                fontSize="2.5rem"
              />
              <TextSection
                text="Högt beläget vid sjön Sillen i vackra Sörmland hittar du Nergården.
            Våra elva rum fördelat på sju dubbelrum och fyra juniorsviter har
            varierande utsikt och planlösning men är inredda med samma
            faciliteter och med en gemensam känsla. Under sommarmånaderna
            erbjuder vi också tre populära Glamping."
                textAlign="center"
                margin="2rem 0 6rem 0"
              />
            </Suspense>
          </>
        ) : (
          <>
            <Suspense>
              <TextSection
                text="Sund Nergården - Hideaway för vuxna"
                textAlign="center"
                margin="4rem 1rem 3rem 1rem"
                fontSize="2rem"
              />
              <TextSection
                text="Högt beläget vid sjön Sillen i vackra Sörmland hittar du Nergården.
            Våra elva rum fördelat på sju dubbelrum och fyra juniorsviter har
            varierande utsikt och planlösning men är inredda med samma
            faciliteter och med en gemensam känsla. Under sommarmånaderna
            erbjuder vi också tre populära Glamping."
                textAlign="center"
                margin="0 1rem 4rem 1rem"
              />
            </Suspense>
          </>
        )}
        <div className="homepage-light-container">
          <Suspense fallback={<div>Loading...</div>}>
            <SearchBooking buttonText="Sök Lediga Rum" />
          </Suspense>
          {isDesktop ? (
            <>
              <div className="stay-at-container">
                <div className="stay-at-text-container">
                  <Suspense fallback={<div>Loading...</div>}>
                    <TextSection
                      text="Bo hos oss på Nergården"
                      color="#1C3620"
                      fontSize="2rem"
                      fontWeight="bold"
                    />
                    <TextSection
                      text="När du bokar en övernattning hos oss är det mesta inkluderat. Vi kallar det för Rum, Mat & Mera. 

                        På vårt hotell får du alltid en härlig vistelse med en trerättersmeny och andra trevliga upplevelser inkluderade. Här kan du njuta av bastu och uppfriskande bad – perfekt anpassat efter säsongen. För dig som reser med elbil finns möjlighet att ladda bilen, och vi välkomnar även gäster som reser med hund. Hör av dig till oss så hjälper vi dig gärna med din bokning.
                        Vänligen notera att hotellet och restaurangen är barnfria, vilket även gäller spädbarn, och att vi har en åldersgräns på 18 år. Varmt välkommen att njuta av en avkopplande och vuxen atmosfär hos oss!

                        För mer information om vad som ingår se lite längre ner på sidan."
                      color="#1C3620"
                      margin="1rem 0 4rem 0"
                    />
                  </Suspense>
                </div>
                <div className="stay-at-picture-container">
                  <picture>
                    <source srcSet={sundHus2W} type="image/webp" />
                    <img
                      src={sundHus2}
                      alt="Sund Nergården Växthus"
                      className="stay-at-picture"
                      loading="lazy"
                      decoding="async"
                    />
                  </picture>
                </div>
              </div>
            </>
          ) : (
            <>
              <p>UNDER DEVELOPMENT</p>
            </>
          )}
        </div>
        <div className="homepage-white-container">
          <Suspense fallback={<div>Loading...</div>}>
            <TextSection
              text="Rum, Mat & Mera"
              fontSize="2rem"
              textAlign="center"
              margin="4rem 0 0 0"
              color="#1C3620"
            />
            <TextSection
              text="Allt detta ingår när du bokar rum eller glamping med oss!"
              textAlign="center"
              margin="0 0 2rem 0"
              color="#1C3620"
            />
          </Suspense>
        </div>
      </div>
      {isDesktop ? (
        <Suspense fallback={<div>Loading...</div>}>
          <HomePicturesDesktop />
        </Suspense>
      ) : (
        <Suspense fallback={<div>Loading...</div>}>
          <HorizontalScroll
            images={images}
            backgroundCol="white"
            enableHoverEffect={false}
            padding="0 1rem 4rem 1rem"
          />
        </Suspense>
      )}
      <Suspense fallback={<div>Loading...</div>}>
        <Contact
          header="Kontakta oss"
          facebook="Sund Nergården"
          instagram="@sundnergarden"
          youtube="@sundnergarden9875"
        >
          <TextSection
            text="015 670 00 70"
            margin="0 0 1.5rem 0"
            padding="2rem 0 0 0"
            textAlign="center"
            fontSize="1.2rem"
          />
          <TextSection
            text="info@sundnergarden.se"
            margin="0 0 1.5rem 0"
            textAlign="center"
            fontSize="1.2rem"
          />
          <TextSection
            text="Sund Nergården"
            margin="0 0 1.5rem 0"
            textAlign="center"
            fontSize="1.2rem"
          />
          <TextSection
            text="619 94 Vagnhärad"
            margin="0 0 1.5rem 0"
            textAlign="center"
            fontSize="1.2rem"
          />
          <TextSection
            text="Sverige"
            margin="0 0 1.5rem 0"
            textAlign="center"
            fontSize="1.2rem"
          />
        </Contact>
      </Suspense>
    </>
  );
};

export default HomePage;
