import React from "react";
import RoomPageComponent from "../../components/RoomPageComponent";
import sundBlombackaImage1 from "../../assets/sund-rum1.jpeg";
import sundBlombackaImage2 from "../../assets/sund-rum2.jpeg";
import sundBlombackaImage3 from "../../assets/sund-rum3.jpeg";

const RoomBlombacka = () => {
  const imagesBlombacka = [
    { id: 1, src: sundBlombackaImage1, alt: "Image 1" },
    { id: 2, src: sundBlombackaImage2, alt: "Image 2" },
    { id: 3, src: sundBlombackaImage3, alt: "Image 3" },
  ];
  const descriptionBlombacka = [
    {
      id: 1,
      desc: "Blombacka är en av våra juniorsviter med sjöutsikt. Med hela 42,0m2, AC, en soffa och en dubbelsäng från Carpe Diem är det ultimat komfort. Värt ",
      kvm: "42,0 m2",
    },
  ];
  return (
    <>
      <RoomPageComponent
        images={imagesBlombacka}
        text="Blombacka"
        description={descriptionBlombacka}
        kvm={descriptionBlombacka[0].kvm}
        interval={3000}
        btnText="Boka nu"
      />
    </>
  );
};

export default RoomBlombacka;
