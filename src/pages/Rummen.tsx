import React from "react";
import "./scss/_rummen.scss";
import HorizontalScroll from "../components/HorizontalScroll";
import { roomImages } from "./extra/RummenImages";
import SmaBtn from "../components/ui/SmaBtn/SmaBtn";
import { glampingImages } from "./extra/GlampingImages";

const Rummen = () => {
    const goToBooking = () => {
        window.location.href = "https://online.bookvisit.com/package?channelId=918cee3d-0141-4e51-b886-ac9fcf09653c";
    };
    
  return (
    <>
      <div className="rummen-container">
        <div className="rummen-header-container-1">
          <p>Våra elva rum</p>
        </div>
        <div className="rummen-text-container-1">
          <p className="rummen-text-container-1">
            Med olika planlösning och personligt inredda. Sängarna kommer från
            Carpe Diem och är bäddade med fluffiga täcken, kuddar och sänglinne
            av ekologisk bomullssatin. Badrummen är utrustade med toalett och
            dusch och produkter från Björk and Berries. I minibaren ingår kaffe,
            te, alkoholfri dryck och snacks. Sommartid är samtliga rum utrustade
            med AC. Tillhörande uteplats/balkong är rökfria. Önskar du att ta
            med din hund vänligen kontakta oss innan du genomför din bokning.
          </p>
        </div>
        <div className="rummen-header-container-2">Rummen</div>
      </div>
      <HorizontalScroll images={roomImages} />
      <div className="rummen-container">
        <div className="homepage-book-container">
          <p>För lediga rum samt aktuella priser se vår </p>
          <div className="homepage-book-text-container">
            <p>bokningskalender</p>
            <SmaBtn text="Bokningskalender" click={goToBooking}/>
          </div>
        </div>
        <div className="rummen-header-container-3">
          <p>Våra tre Glamping tält</p>
        </div>
        <div className="rummen-text-container-2">
          <p className="rummen-text-container-2">
            Möblerade med riktiga sängar som är bäddade med fluffiga täcken och
            kuddar med sänglinne av ekologisk bomullssatin. Inredningen är så
            att du får känslan av att du bor i ett hotellrum fast du är mitt i
            naturen. På den tillhörande terrassen finner du en sittgrupp samt en
            varm & kall utomhusdusch med produkter från Björk and Berries.
            Toaletter hittar du ca 50m bort från Glampingen. Tälten är av 100%
            bomullscanvas som gör att tältens duk andas naturligt och är
            vädertåliga mot regn och blåst och håller fukten borta. Det finns
            ett elektriskt oljeelement för eventuellt kyliga nätter. Alla våra
            glamping är rökfria och husdjur är ej tillåtna.
          </p>
        </div>
      </div>
      <HorizontalScroll images={glampingImages} />
      <div className="rummen-container">
        <div className="rummen-text-container-3">
          <p className="rummen-text-container-3">
            Max 2 personer - Glampingsäsong: 1/6 -24 t.o.m 31/8 -24.
          </p>
        </div>
      </div>
    </>
  );
};

export default Rummen;
