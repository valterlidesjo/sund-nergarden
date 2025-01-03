import React, { useEffect } from "react";
import HorizontalScroll from "../components/HorizontalScroll";
import sundStartImage from "../assets/sund-hus1.jpeg";
import sundVinImage from "../assets/sund-vin.jpeg";
import "./scss/_homepage.scss";
import SmaBtn from "../components/ui/SmaBtn/SmaBtn";
import { images } from "./extra/HomepageImages";
import RoomPageComponent from "../components/RoomPageComponent";
import Test from "./Test";
import TextSection from "../components/TextSection";
import { Parallax, ParallaxBanner } from "react-scroll-parallax";
import FoodMenu from "../components/FoodMenu";
import Contact from "../components/Contact";
import { useLocation } from "react-router-dom";

const HomePage = () => {
  const location = useLocation();
  const handleImageClick = (id: string) => {
    alert(`Image clicked: ${id}`);
  };
  const goToBooking = () => {
    window.location.href =
      "https://online.bookvisit.com/package?channelId=918cee3d-0141-4e51-b886-ac9fcf09653c";
  };

  useEffect(() => {
    if (location.state?.targetId) {
      const targetElement = document.getElementById(location.state.targetId);
      if (targetElement) {
        const offset = -80; // Justera scrollpositionen
        const elementPosition = targetElement.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.scrollY + offset;
  
        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });
      }
    }
  }, [location.state]);

  return (
    <>
      <div className="homepage-pic-container">
        <img src={sundStartImage} alt="Sund Start Image" />

        <div className="homepage-text-container">
          <p>Sund Nergården</p>
        </div>
      </div>
      <div className="homepage-container">
        <TextSection
          
          text="Högt beläget vid sjön Sillen i vackra Sörmland hittar du Nergården.
            Våra elva rum fördelat på sju dubbelrum och fyra juniorsviter har
            varierande utsikt och planlösning men är inredda med samma
            faciliteter och med en gemensam känsla. Under sommarmånaderna
            erbjuder vi också tre populära Glamping."
          textAlign="center"
          margin="2rem 1rem"
        />
        <ParallaxBanner
          layers={[{ image: sundVinImage, speed: -15 }]}
          className="homepage-wine-container"
        />
        <TextSection
          text="Hotellet och restaurangen har en åldersgräns på 18år."
          textAlign="center"
          fontWeight="bold"
          margin="2rem 1rem"
        />
        <TextSection
          text="Tre rätters meny och annat trevligt ingår alltid, Barnfritt hotell,
            Bastu och bad beroende på säsong, Laddning finns för elbil, Hunden
            får följa med."
          textAlign="center"
          margin="0"
        />
        <TextSection
          text="Rum, Mat & Mera"
          fontSize="2rem"
          textAlign="center"
          margin="2rem 0 0 0"
        />
        <TextSection
          text="Allt detta ingår när du bokar rum eller glamping med oss!"
          textAlign="center"
          margin="0 0 0.5rem 0"
        />
      </div>
      <HorizontalScroll images={images} />
      <div className="homepage-container">
        <div className="homepage-book-container">
          <p>För lediga rum samt aktuella priser se vår </p>
          <div className="homepage-book-text-container">
            <p>bokningskalender</p>
            <SmaBtn text="Bokningskalender" click={goToBooking} />
          </div>
        </div>
        <TextSection
          text=" Vi älskar mat & dryck som serveras i en vacker och trevlig miljö, så varmt välkommen till oss!"
          textAlign="center"
          fontSize="1.6rem"
        />
         
        <TextSection
          text=" Vi älskar mat & dryck som serveras i en vacker och trevlig miljö, så varmt välkommen till oss!"
          textAlign="center"
          fontSize="1.6rem"
        />
      </div>
      <Contact header="KONTAKT" facebook="Sund Nergården" instagram="@sundnergarden" youtube="@sundnergarden9875">
        <TextSection text="015 670 00 70" margin="0 0 1.5rem 0" padding="2rem 0 0 0"/>
        <TextSection text="info@sundnergarden.se" margin="1.5rem 0"/>
        <TextSection text="Sund Nergården" margin="1.5rem 0"/>
        <TextSection text="619 94 Vagnhärad" margin="1.5rem 0"/>
        <TextSection text="Sverige" margin="1.5rem 0"/>
      </Contact>
    </>
  );
};

export default HomePage;
