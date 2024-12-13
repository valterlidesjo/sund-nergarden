import React from "react";
import HorizontalScroll from "../components/HorizontalScroll";
import sundStartImage from "../assets/sund-hus1.jpeg";
import sundVinImage from "../assets/sund-vin.jpeg";
import "./scss/_homepage.scss";
import SmaBtn from "../components/ui/SmaBtn/SmaBtn";
import { images } from "./extra/HomepageImages";



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
        <div className="homepage-text-container-1">
          <p className="homepage-text-container-1">
            Högt beläget vid sjön Sillen i vackra Sörmland hittar du Nergården.
            Våra elva rum fördelat på sju dubbelrum och fyra juniorsviter har
            varierande utsikt och planlösning men är inredda med samma
            faciliteter och med en gemensam känsla. Under sommarmånaderna
            erbjuder vi också tre populära Glamping.
          </p>
        </div>
        <div className="homepage-wine-container">
          <img src={sundVinImage} alt="Vinflaskor" />
        </div>
        <div className="homepage-age-limit-container">
          <p>Hotellet och restaurangen har en åldersgräns på 18år.</p>
        </div>
        <div className="homepage-text-container-2">
          <p className="homepage-text-container-2">
            Tre rätters meny och annat trevligt ingår alltid, Barnfritt hotell,
            Bastu och bad beroende på säsong, Laddning finns för elbil, Hunden
            får följa med.
          </p>
        </div>
        <div className="homepage-scroll-header">
          <h1>Rum, Mat & Mera</h1>
          <p>Allt detta ingår när du bokar rum eller glamping med oss!</p>
        </div>
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
      <div className="homepage-text-container-3">
        <p className="homepage-text-container-3">
        Vi älskar mat & dryck som serveras i en vacker och trevlig miljö, så varmt välkommen till oss!
        </p>
        
      </div>
      </div>
    </>
  );
};

export default HomePage;
