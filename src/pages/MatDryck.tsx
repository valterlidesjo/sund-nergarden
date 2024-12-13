import React from "react";
import sundMatImage from "../assets/sund-mat.jpeg";
import "./scss/_matDryck.scss";
import MedBtn from "../components/ui/MedBtn/MedBtn";
import sundVinImage from "../assets/sund-vin.jpeg";

const MatDryck = () => {
  return (
    <>
      <div className="mat-container">
        <div className="mat-image-container">
          <img src={sundMatImage} alt="Mat bild" />
          <div className="mat-image-text-container">
            <p>Mat & Dryck</p>
          </div>
        </div>
        <div className="mat-text-container">
          <p>
            Vi serverar en trerättersmeny gjord i största möjliga mån på svenska
            råvaror och från Sörmländska gårdar som följer de vackra årstiderna.
            Önskar ni utöka till en femrättersmeny ordnar vi gärna det, låt oss
            veta senast dagen innan. Det går även bra att äta lunch hos oss, men
            tänk då på att förboka. Restaurangen har öppet för lunch och middag
            de dagar som hotellet är öppet.
          </p>
        </div>
      </div>
      <MedBtn goToRoute="/" text="Vår trerättersmeny" />
      <div className="spacing-container"></div>
      <MedBtn goToRoute="/" text="Vår femrättersmeny" />
      <div className="mat-container">
        <div className="mat-age-limit-container">
          <p>Hotellet och restaurangen har en åldersgräns på 18år.</p>
        </div>
        <div className="dryck-container">
          <div className="dryck-header-container">Till middagen</div>
          <div className="dryck-text-container">
            <p>
            Har ni möjlighet att välja något utav de dryckespaket som vår
            sommelier Johan Asknergård noggrant valt ut, eller så väljer ni
            fritt från vår dryckesmeny. Vår vinlista består huvudsakligen av
            småskaliga familjeägda producenter som arbetar enligt ett ekologiskt
            och biodynamiskt tänk. Vi har ca 100 olika viner varav de flesta
            serveras på glas.
            </p>
          </div>
        </div>
        <MedBtn goToRoute="/" text="Våra dryckespaket" />
      </div>
    </>
  );
};

export default MatDryck;
