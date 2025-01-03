import sundVinImage from "../assets/sund-vin.jpeg";
import sundDesert4Image from "../assets/sund-desert4.jpg";
import sundJohanImage from "../assets/sund-johan.jpeg";
import "./scss/_matDryck.scss";
import MedBtn from "../components/ui/MedBtn/MedBtn";
import TextSection from "../components/TextSection";
import HorizontalScroll from "../components/HorizontalScroll";
import { MatDryckImages } from "./extra/MatDryckImages";
import { useNavigate } from "react-router-dom";
import BigBtn from "../components/ui/BigBtn/BigBtn";
import { ParallaxBanner } from "react-scroll-parallax";

const wineLink =
  "https://starwinelist.com/storage/wine_lists/371/sund-nergarden.pdf?1624028874";
const bookTableLink =
  "https://online.bookvisit.com/extras?channelid=918cee3d-0141-4e51-b886-ac9fcf09653c";

const MatDryck = () => {
  const navigate = useNavigate();

  const handleClickTre = () => {
    navigate("/mat-dryck/tre");
  };
  const handleClickFem = () => {
    navigate("/mat-dryck/Fem");
  };
  const handleClickWine = () => {
    window.location.href = wineLink;
  };
  const handleClickBoka = () => {
    window.location.href = bookTableLink;
  };

  return (
    <>
      <div className="matdryck-image-container">
        <img src={sundDesert4Image} alt="Efterrätt bild" />

        <div className="matdryck-start-text-container">
          <p>
            MAT <br />
            & <br />
            DRYCK
          </p>
        </div>
      </div>
      <div className="mat-container">
        <TextSection
          text="Vi använder svenska råvaror"
          textAlign="center"
          fontSize="2rem"
          margin="3rem 0 1rem 0"
        />
        <TextSection
          text="i största möjliga mån och gärna från de Sörmländska gårdarna med en meny som följer de vackra årstiderna.
                Vi serverar en trerättersmeny med tilltugg, bröd, smör och pålägg. Önskar ni utöka till en femrättersmeny ordnar vi gärna det, låt oss veta senast dagen innan. Det går även bra att äta lunch hos oss, men tänk då på att förboka.

                Restaurangen har öppet för lunch och middag de dagar som hotellet är öppet."
          fontSize="1rem"
          padding="0 1.5rem"
          textAlign="center"
          margin="0 0 3rem 0"
        />
      </div>
      <div className="mat-light-container">
        <MedBtn
          goToRoute={handleClickTre}
          text="Vår aktuella trerättersmeny"
          margin="2rem 0 2rem 0"
        />
        <MedBtn
          goToRoute={handleClickFem}
          text="Vår aktuella femrättersmeny"
          margin="0 0 2rem 0"
        />
        <BigBtn text="Boka bord" onClick={handleClickBoka} />
      <ParallaxBanner
          layers={[{ image: sundVinImage, speed: -15 }]}
          className="mat-wine-container"
        />
      {/* </div>
      <div className="mat-light-container"> */}
        <div className="dryck-container">
          <TextSection
            text="Till middagen"
            textAlign="center"
            fontSize="2.2rem"
            margin="0 0 1rem 0"
            color="black"
            fontWeight="bold"
          />
          <TextSection
            text="Har ni möjlighet att välja något utav de dryckespaket som vår sommelier Johan Asknergård noggrant valt ut, eller så väljer ni fritt från vår dryckesmeny. 

              Vår vinlista består huvudsakligen av småskaliga familjeägda producenter som arbetar enligt ett ekologiskt och biodynamiskt tänk. Vi har ca 100 olika viner varav de flesta serveras på glas."
            margin="0 0 2rem 0"
            textAlign="center"
            color="black"
            fontSize="1rem"
            padding="0 1.5rem"
          />
        </div>
        <BigBtn text="Vår vinlista" onClick={handleClickWine} height="5rem" width="18rem"/>
        <div className="sommelier-image-container">
          <img className="sommelier-image" src={sundJohanImage} alt="Sund Nergården Sommelier Johan" />
        </div>
      </div>
      <HorizontalScroll images={MatDryckImages} imageWidth="17.5rem" imageHeight="20rem" enableHoverEffect={false} backgroundCol="#D3E2D5" />
    </>
  );
};

export default MatDryck;
