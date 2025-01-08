import SlideShow from "./SlideShow";
import "./scss/_roomPageComponent.scss";
import TextSection from "./TextSection";
import SearchBooking from "./SearchBooking";

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
  imageText: string;
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
  imageText,
  roomHeader,
  roomText,
}: RoomPageProps) => {

  return (
    <>
    <div className="room-image-container">
      <img className="room-start-image" src={startImage} alt="Bild rummet" />
      <div className="room-start-text-container">
        <p>{imageText}</p>
      </div>
    </div>
    <div className="room-page-light-container">

    <TextSection text={roomHeader} textAlign="center" fontSize="1.5rem" padding="0" margin="4rem 0 1.5rem 0" fontFamily="Satisfy" color="black"/>
    <TextSection text={roomText} textAlign="center" fontSize="1rem" padding="0 2rem" margin="0 0 2rem 0" color="black" />
    


      </div>
      <div className="slideshow">
        <SlideShow images={images} interval={interval} text={text} />
      </div>
      <SearchBooking buttonText="Sök Lediga Rum"/>
    </>
  );
};

export default RoomPageComponent;
