import React, { useEffect, useState } from "react";
import "./scss/_rummen.scss";
import HorizontalScroll from "../components/HorizontalScroll";
import { roomImages } from "./extra/RummenImages";
import { glampingImages } from "./extra/GlampingImages";
import TextSection from "../components/TextSection";
import { useNavigate } from "react-router-dom";
import sundRitad from "../assets/sund-ritad.jpeg";
import SearchBooking from "../components/SearchBooking";
import RoomPicturesDesktop from "../components/DesktopOnly/RoomPicturesDesktop";
import GlampingPicturesDesktop from "../components/DesktopOnly/GlampingPicturesDesktop";

const Rummen = () => {
  const navigate = useNavigate();

  const goToRoom = (alt: string) => {
    navigate(`/rummen/${alt}`);
    window.scrollTo({ top: 0, behavior: "smooth" });
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
      <div className="rummen-image-container">
        <img src={sundRitad} alt="Sund Nergården ritad bild" />

        <div className="rummen-start-text-container">
          {isDesktop ? (
            <p>RUM & GLAMPING</p>
          ) : (
            <p>
              RUM <br /> & <br /> GLAMPING
            </p>
          )}
        </div>
      </div>


      {isDesktop ? (
        <>
          <div className="rummen-container">
            <TextSection
              text="Våra elva rum"
              textAlign="center"
              fontSize="3.5rem"
              margin="5rem 0 2rem 0"
            />
            <TextSection
              text="Med olika planlösning och personligt inredda. Sängarna kommer från Carpe Diem och är bäddade med fluffiga täcken, kuddar och sänglinne av ekologisk bomullssatin. Badrummen är utrustade med toalett och dusch och produkter från Björk and Berries. I minibaren ingår kaffe, te, alkoholfri dryck och snacks. Sommartid är samtliga rum utrustade med AC. Tillhörande uteplats/balkong är rökfria. Önskar du att ta med din hund vänligen kontakta oss innan du genomför din bokning."
              fontSize="1.2rem"
              padding="0 3rem"
              textAlign="center"
              margin="0 0 3rem 0"
              lineHeight="2"
            />
          </div>
          <RoomPicturesDesktop />
          <div className="rummen-light-container">
            <SearchBooking buttonText="Sök Lediga Rum"/>
          </div>
          <div className="rummen-container">
            <TextSection
              text="Våra tre Glamping tält"
              fontSize="2rem"
              margin="3rem 0 2rem 0"
            />
            <TextSection
              text="Möblerade med riktiga sängar som är bäddade med fluffiga täcken och kuddar med sänglinne av ekologisk bomullssatin. 
        Inredningen är så att du får känslan av att du bor i ett hotellrum fast du är mitt i naturen. På den tillhörande terrassen finner du en sittgrupp samt en varm & kall utomhusdusch med produkter från Björk and Berries. Toaletter hittar du ca 50m bort från Glampingen. Tälten är av 100% bomullscanvas som gör att tältens duk andas naturligt och är vädertåliga mot regn och blåst och håller fukten borta. Det finns ett elektriskt oljeelement för eventuellt kyliga nätter. 
        Alla våra glamping är rökfria och husdjur är ej tillåtna."
              fontSize="1.2rem"
              padding="0 1.5rem"
              textAlign="center"
              margin="0 0 3rem 0"
            />
          </div>
          <GlampingPicturesDesktop />
        </>
      ) : (
        <>
          <div className="rummen-container">
            <TextSection
              text="Våra elva rum"
              textAlign="center"
              fontSize="2rem"
              margin="3rem 0 2rem 0"
            />
            <TextSection
              text="Med olika planlösning och personligt inredda. Sängarna kommer från Carpe Diem och är bäddade med fluffiga täcken, kuddar och sänglinne av ekologisk bomullssatin.
          Badrummen är utrustade med toalett och dusch och produkter från Björk and Berries. I minibaren ingår kaffe, te, alkoholfri dryck och snacks. Sommartid är samtliga rum utrustade med AC. Tillhörande uteplats/balkong är rökfria. Önskar du att ta med din hund vänligen kontakta oss innan du genomför din bokning."
              fontSize="1rem"
              padding="0 2rem"
              textAlign="center"
              margin="0 0 3rem 0"
            />
          </div>
          <div className="rummen-light-container">
            <SearchBooking buttonText="Sök Lediga Rum"/>
          </div>
          <HorizontalScroll
            images={roomImages}
            onImageClick={(image) => goToRoom(image.alt)}
            backgroundCol="#D3E2D5"
          />
          <div className="rummen-container">
            <TextSection
              text="Våra tre Glamping tält"
              fontSize="2rem"
              margin="3rem 0 2rem 0"
            />
            <TextSection
              text="Möblerade med riktiga sängar som är bäddade med fluffiga täcken och kuddar med sänglinne av ekologisk bomullssatin. 
        Inredningen är så att du får känslan av att du bor i ett hotellrum fast du är mitt i naturen. På den tillhörande terrassen finner du en sittgrupp samt en varm & kall utomhusdusch med produkter från Björk and Berries. Toaletter hittar du ca 50m bort från Glampingen. Tälten är av 100% bomullscanvas som gör att tältens duk andas naturligt och är vädertåliga mot regn och blåst och håller fukten borta. Det finns ett elektriskt oljeelement för eventuellt kyliga nätter. 
        Alla våra glamping är rökfria och husdjur är ej tillåtna."
              fontSize="1rem"
              padding="0 1.5rem"
              textAlign="center"
              margin="0 0 3rem 0"
            />
          </div>
          <HorizontalScroll
            images={glampingImages}
            onImageClick={(image) => goToRoom(image.alt)}
          />
          <div className="rummen-container">
            <TextSection
              text="Max 2 personer - Glampingsäsong: 1/6 -24 t.o.m 31/8 -24."
              fontSize="1rem"
              padding="0 1rem"
              textAlign="center"
            />
          </div>
        </>
      )}
      <SearchBooking buttonText="Sök Lediga Tält"/>

      <div className="rummen-light-container">
        <TextSection
          text="Tips! Eventuella avbokningar läggs även ut på vår Instagram Story @Sundnergarden, så följ oss gärna där."
          padding="0 2rem"
          textAlign="center"
          color="black"
        />
        <TextSection
          text="Vill du boka din vistelse med ett presentkort, kontakta oss så hjälper vi er!"
          fontSize="1rem"
          padding="0 2rem"
          textAlign="center"
          color="black"
        />
      </div>
    </>
  );
};

export default Rummen;
