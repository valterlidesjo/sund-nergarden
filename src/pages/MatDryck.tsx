import sundMatImage from "../assets/sund-mat.jpeg";
import "./scss/_matDryck.scss";
import MedBtn from "../components/ui/MedBtn/MedBtn";
import BigBtn from "../components/ui/BigBtn/BigBtn";
import TextSection from "../components/TextSection";

const wineLink =
  "https://starwinelist.com/storage/wine_lists/371/sund-nergarden.pdf?1624028874";

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
        <TextSection
          text="Vi serverar en trerättersmeny gjord i största möjliga mån på svenska
            råvaror och från Sörmländska gårdar som följer de vackra årstiderna.
            Önskar ni utöka till en femrättersmeny ordnar vi gärna det, låt oss
            veta senast dagen innan. Det går även bra att äta lunch hos oss, men
            tänk då på att förboka. Restaurangen har öppet för lunch och middag
            de dagar som hotellet är öppet."
          fontSize="1.2rem"
        
        />
      </div>
      <MedBtn goToRoute="/mat-dryck/tre" text="Vår trerättersmeny" />
      <div className="spacing-container"></div>
      <MedBtn goToRoute="/mat-dryck/fem" text="Vår femrättersmeny" />
      <div className="mat-container">
        <TextSection
          text="Hotellet och restaurangen har en åldersgräns på 18år."
          textAlign="center"
          fontWeight="bold"
          margin="2rem 1rem"
        />
        <div className="dryck-container">
          <TextSection
            text="Till middagen"
            textAlign="center"
            fontSize="2rem"
            margin="0 0 1rem 0"
          />
          <TextSection
          text="Har ni möjlighet att välja något utav de dryckespaket som vår
              sommelier Johan Asknergård noggrant valt ut, eller så väljer ni
              fritt från vår dryckesmeny. Vår vinlista består huvudsakligen av
              småskaliga familjeägda producenter som arbetar enligt ett
              ekologiskt och biodynamiskt tänk. Vi har ca 100 olika viner varav
              de flesta serveras på glas."
              margin="0 0 2rem 0"
              
        />
        </div>
        <MedBtn goToRoute={wineLink} text="Våra dryckespaket" />
      </div>
    </>
  );
};

export default MatDryck;
