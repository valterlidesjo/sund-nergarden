import React, { Suspense } from "react";
import { useNavigate } from "react-router-dom";
import { ParallaxBanner } from "react-scroll-parallax";
import "./scss/_matDryck.scss";
import sundVinImage from "../assets/sund-vin.jpeg";
import sundDesert4Image from "../assets/sund-desert4.jpg";
import sundJohanImage from "../assets/sund-johan.jpeg";
import { MatDryckImages } from "./extra/MatDryckImages";
import sundDesert4ImageW from "../assets/sund-desert4.webp";
import sundJohanImageW from "../assets/sund-johan.jpeg";
import HorizontalScroll from "../components/HorizontalScroll";
import LongInfiniteSlider from "../components/LongInfiniteSlider";
import useIsDesktop from "../services/useIsDesktop";

const MedBtn = React.lazy(() => import("../components/ui/MedBtn/MedBtn"));
const TextSection = React.lazy(() => import("../components/TextSection"));
const BigBtn = React.lazy(() => import("../components/ui/BigBtn/BigBtn"));

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

  const isDesktop = useIsDesktop();

  return (
    <>
      <div className="matdryck-image-container">
        <picture>
        <source srcSet={sundDesert4ImageW} type="image/webp" />

        <img src={sundDesert4Image} alt="Efterrätt bild" />
        </picture>
        <div className="matdryck-start-text-container">
          {isDesktop ? (
            <p>MAT & DRYCK</p>
          ) : (
            <p>
              MAT <br /> & <br /> DRYCK
            </p>
          )}
        </div>
      </div>
      <div className="mat-container">
        {isDesktop ? (
          <>
            <Suspense fallback={<div>Loading...</div>}>
              <TextSection
                text="Vi använder svenska råvaror"
                textAlign="center"
                fontSize="3.5rem"
                margin="5rem 0 2rem 0"
              />
              <TextSection
                text="i största möjliga mån och gärna från de Sörmländska gårdarna med en meny som följer de vackra årstiderna.
        Vi serverar en trerättersmeny med tilltugg, bröd, smör och pålägg. Önskar ni utöka till en femrättersmeny ordnar vi gärna det, 
        låt oss veta senast dagen innan. Det går även bra att äta lunch hos oss, men tänk då på att förboka.
        
        Restaurangen har öppet för lunch och middag de dagar som hotellet är öppet."
                fontSize="1.2rem"
                padding="0 3rem"
                textAlign="center"
                margin="0 0 3rem 0"
                lineHeight="2"
              />
            </Suspense>
          </>
        ) : (
          <>
            <Suspense fallback={<div>Loading...</div>}>
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
            </Suspense>
          </>
        )}
      </div>
      <div className="mat-light-container">
        {isDesktop ? (
          <>
            <div className="mat-button-container">
              <Suspense fallback={<div>Loading...</div>}>
                <BigBtn
                  text="Boka bord"
                  onClick={handleClickBoka}
                  height="8.7rem"
                  width="24rem"
                  fontSize="3.2rem"
                />
                <div className="menu-button-container">
                  <MedBtn
                    goToRoute={handleClickTre}
                    text="Vår aktuella trerättersmeny"
                    margin="2rem 0 2rem 0"
                    width="32rem"
                    height="5.5rem"
                    fontSize="1.8rem"
                  />
                  <MedBtn
                    goToRoute={handleClickFem}
                    text="Vår aktuella femrättersmeny"
                    margin="0 0 2rem 0"
                    width="32rem"
                    height="5.5rem"
                    fontSize="1.8rem"
                  />
                </div>
              </Suspense>
            </div>
          </>
        ) : (
          <>
            <Suspense fallback={<div>Loading...</div>}>
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
            </Suspense>
          </>
        )}
        <ParallaxBanner
          layers={[{ image: sundVinImage, speed: -15 }]}
          className="mat-wine-container"
        />
        {isDesktop ? (
          <>
            <div className="dryck-picture-container">
              <div className="dryck-container">
                <Suspense fallback={<div>Loading...</div>}>
                  <TextSection
                    text="Till middagen"
                    textAlign="left"
                    fontSize="2.6rem"
                    margin="0 0 1rem 0"
                    padding="0 6rem"
                    color="black"
                    fontWeight="bold"
                  />
                  <TextSection
                    text="Har ni möjlighet att välja något utav de dryckespaket som vår sommelier Johan Asknergård noggrant valt ut, eller så väljer ni fritt från vår dryckesmeny. 
                  Vår vinlista består huvudsakligen av småskaliga familjeägda producenter som arbetar enligt ett ekologiskt och biodynamiskt tänk. Vi har ca 100 olika viner varav de flesta serveras på glas."
                    margin="0 0 2rem 0"
                    textAlign="left"
                    color="black"
                    fontSize="1rem"
                    padding="0 6rem"
                    lineHeight="2"
                    fontWeight="bold"
                  />
                  <BigBtn
                    text="Vår vinlista"
                    onClick={handleClickWine}
                    height="5rem"
                    width="18rem"
                  />
                </Suspense>
              </div>
              <div className="sommelier-image-container">
                <picture>
                <source srcSet={sundJohanImageW} type="image/webp" />

                <img
                  className="sommelier-image"
                  src={sundJohanImage}
                  alt="Sund Nergården Sommelier Johan"
                  loading="lazy"
                  decoding="async"
                />
                </picture>
              </div>
            </div>
          </>
        ) : (
          <>
            <div className="dryck-container">
              <Suspense fallback={<div>Loading...</div>}>
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
              </Suspense>
            </div>
            <Suspense fallback={<div>Loading...</div>}>
              <BigBtn
                text="Vår vinlista"
                onClick={handleClickWine}
                height="5rem"
                width="18rem"
              />
            </Suspense>
            <div className="sommelier-image-container">

              <picture>
                <source srcSet={sundJohanImageW} type="image/webp" />

                <img
                  className="sommelier-image"
                  src={sundJohanImage}
                  alt="Sund Nergården Sommelier Johan"
                  loading="lazy"
                  decoding="async"
                />
                </picture>
            </div>
          </>
        )}
      </div>
      <Suspense fallback={<div>Loading...</div>}>
      {isDesktop ? (
        <>
          <LongInfiniteSlider images={MatDryckImages} />
          </>
      ) : (
        <>
        <HorizontalScroll
          images={MatDryckImages}
          imageWidth="17.5rem"
          imageHeight="20rem"
          enableHoverEffect={false}
          backgroundCol="#D3E2D5"
        />
        </>
      )}
      </Suspense>
    </>
  );
};

export default MatDryck;
