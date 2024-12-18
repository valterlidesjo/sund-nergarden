import SlideShow from "./SlideShow";
import "./scss/_roomPageComponent.scss";
import { FaShower, FaBed } from "react-icons/fa6";
import { PiWaves } from "react-icons/pi";
import BigBtn from "./ui/BigBtn/BigBtn";
import IconContainer from "./IconContainer";

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
  interval?: number; // Valfritt
  btnText?: string; // Valfritt
}

const RoomPageComponent = ({
  images,
  description,
  kvm,
  interval,
  btnText,
  text,
}: RoomPageProps) => {
  const iconItems = [
    { icon: <FaBed className="i" /> },
    { icon: <PiWaves className="i" /> },
    { icon: <FaShower className="i" /> },
    { icon: <p className="kvm-text">{description[0].kvm}</p> },
  ];

  const goToBooking = () => {
    window.location.href =
      "https://online.bookvisit.com/package?channelId=918cee3d-0141-4e51-b886-ac9fcf09653c";
  };

  return (
    <div className="container">
      <div className="slideshow">
        <SlideShow images={images} interval={interval} text={text} />
      </div>

      <div className="content">
        <div className="description-container">
          {description.map((item, index) => (
            <p key={index} className="description-text">
              {item.desc}
            </p>
          ))}
        </div>
        <IconContainer items={iconItems} />
        <BigBtn text={btnText || "Boka Nu"} onClick={goToBooking} />
      </div>
    </div>
  );
};

export default RoomPageComponent;
