import React from "react";
import sundCharkImage from "../assets/sund-chark.jpeg";
import sundDrink from "../assets/sund-drink.jpg";
import RoomPageComponent from "../components/RoomPageComponent";

const Test = () => {
  const images = [
    { id: "1", src: sundCharkImage, alt: "Image 1" },
    { id: "2", src: sundDrink, alt: "Image 2" },
    { id: "1", src: sundCharkImage, alt: "Image 1" },
    { id: "2", src: sundDrink, alt: "Image 2" },
  ];

  const description = [
    {
      id: "1",
      desc: "Med 19,6 m2, en queen size säng och en otrolig sjöutsikt har du Glamping - Övre.  En egen uteplats med varmdusch och toaletter 50m bort. Rök och husdjursfritt.",
      kvm: "19,6 m2",
    },
  ];

  return (
    <RoomPageComponent
      images={images}
      text="Test"
      description={description}
      kvm={description[0].kvm}
      interval={3000}
      btnText="test"
    />
  );
};

export default Test;
