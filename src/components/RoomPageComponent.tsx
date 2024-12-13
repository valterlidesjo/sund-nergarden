import React from "react";
import SlideShow from "./SlideShow";
import sundCharkImage from "../assets/sund-chark.jpeg";
import sundDrink from "../assets/sund-drink.jpg";
import "./scss/_roomPageComponent.scss";
import IconBox from "./ui/IconBox/IconBox";
import { FaShower } from "react-icons/fa6";

const RoomPageComponent = () => {
  const images = [
    { id: "1", src: sundCharkImage, alt: "Image 1" },
    { id: "2", src: sundDrink, alt: "Image 2" },
  ];

  const description = [
    {
      id: "1",
      desc: "Med 19,6 m2, en queen size säng och en otrolig sjöutsikt har du Glamping - Övre.  En egen uteplats med varmdusch och toaletter 50m bort. Rök och husdjursfritt.",
    },
  ];

  return (
    <div className="container">
      <div className="upper">
        <SlideShow images={images} interval={3000} text={"Mat"} />
        <div className="description-container">
          {description.map((item) => (
            <p className="description-text">{item.desc}</p>
          ))}
        </div>
      </div>
      <div className="lower">
        <div className="icon-container">
          <IconBox>
            <FaShower />
          </IconBox>
        </div>
      </div>
    </div>
  );
};

export default RoomPageComponent;
