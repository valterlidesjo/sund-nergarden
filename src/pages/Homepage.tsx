import React from "react";
import HorizontalScroll from "../components/HorizontalScroll";
import sundStartImage from "../assets/sund-hus1.jpeg";
import sundVinImage from "../assets/sund-vin.jpeg";
import "./scss/_homepage.scss";
import SmaBtn from "../components/ui/SmaBtn/SmaBtn";
import { images } from "./extra/HomepageImages";
import TextSection from "../components/TextSection";



const HomePage = () => {
  const handleImageClick = (id: string) => {
    alert(`Image clicked: ${id}`);
  };
  const goToBooking = () => {
    window.location.href = "https://online.bookvisit.com/package?channelId=918cee3d-0141-4e51-b886-ac9fcf09653c";
};


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
       />
        <div className="homepage-wine-container">
          <img src={sundVinImage} alt="Vinflaskor" />
        </div>
        <TextSection
          text="Hotellet och restaurangen har en åldersgräns på 18år."
          textAlign="center"
          fontWeight="bold"
        />
        <TextSection
        text="Tre rätters meny och annat trevligt ingår alltid, Barnfritt hotell,
            Bastu och bad beroende på säsong, Laddning finns för elbil, Hunden
            får följa med."
        textAlign="center"
        />
        <TextSection text="Rum, Mat & Mera" fontSize="2rem" textAlign="center"/>
        <TextSection text="Allt detta ingår när du bokar rum eller glamping med oss!" textAlign="center" />

        
      </div>
      <HorizontalScroll images={images} />
      <div className="homepage-container">
      <div className="homepage-book-container">
        <p>För lediga rum samt aktuella priser se vår </p>
          <div className="homepage-book-text-container">
          <p>bokningskalender</p>
          <SmaBtn text="Bokningskalender" click={goToBooking}/>
          </div>
      </div>
      <TextSection text=" Vi älskar mat & dryck som serveras i en vacker och trevlig miljö, så varmt välkommen till oss!" textAlign="center" fontSize="1.6rem"/> 
      </div>
    </>
  );
};

export default HomePage;
