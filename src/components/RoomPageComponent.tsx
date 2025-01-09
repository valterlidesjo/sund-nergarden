import React, { Suspense, useEffect, useState } from "react";
import "./scss/_roomPageComponent.scss";
import TextSection from "./TextSection";
const SearchBooking = React.lazy(() => import("../components/SearchBooking"));
const InfiniteSlider = React.lazy(() => import("../components/InfiniteSlider"));
const SlideShow = React.lazy(() => import("../components/SlideShow"));

interface Image {
  id: number;
  src: string;
  alt: string;
}

interface Description {
  id: number;
  desc: string;
  kvm: string;
}

interface RoomPageProps {
  images: Image[];
  text: string;
  description: Description[];
  kvm: string;
  startImage: string;
  startImageWebp: string;
  imageText: string;
  imageTextDesk: string;
  roomHeaderDesk: string;
  roomHeader: string;
  roomText: string;
  interval?: number;
  btnText?: string;
}

const RoomPageComponent = ({
  images,
  interval,
  text,
  startImage,
  startImageWebp,
  imageText,
  roomHeader,
  roomHeaderDesk,
  roomText,
  imageTextDesk,
}: RoomPageProps) => {
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
      <div className="room-image-container">
        <img
          className="room-start-image"
          src={startImageWebp}
          alt="Bild rummet"
        />
        <div className="room-start-text-container">
          {isDesktop ? <p>{imageTextDesk}</p> : <p>{imageText}</p>}
        </div>
      </div>
      <div className="room-page-light-container">
        {isDesktop ? (
          <>
            <TextSection
              text={roomHeaderDesk}
              textAlign="center"
              fontSize="1.8rem"
              padding="0"
              margin="4rem 0 1.5rem 0"
              fontFamily="Satisfy"
              color="black"
            />
            <TextSection
              text={roomText}
              textAlign="center"
              fontSize="1rem"
              padding="0 6rem"
              margin="0 0 3rem 0"
              color="black"
              lineHeight="2"
            />
          </>
        ) : (
          <>
            <TextSection
              text={roomHeader}
              textAlign="center"
              fontSize="1.5rem"
              padding="0"
              margin="4rem 0 1.5rem 0"
              fontFamily="Satisfy"
              color="black"
            />
            <TextSection
              text={roomText}
              textAlign="center"
              fontSize="1rem"
              padding="0 2rem"
              margin="0 0 2rem 0"
              color="black"
            />
          </>
        )}
      </div>
      {isDesktop ? (
        <>
          <Suspense fallback={<div>Loading...</div>}>
            <InfiniteSlider images={images} />
          </Suspense>
        </>
      ) : (
        <>
          <Suspense fallback={<div>Loading...</div>}>
            <div className="slideshow">
              <SlideShow images={images} interval={interval} text={text} />
            </div>
          </Suspense>
        </>
      )}
      <Suspense fallback={<div>Loading...</div>}>
        <SearchBooking buttonText="Sök Lediga Rum" />
      </Suspense>
    </>
  );
};

export default RoomPageComponent;
