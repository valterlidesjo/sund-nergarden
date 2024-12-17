import React from "react";
import RoomPageComponent from "../../components/RoomPageComponent";
import sundSjolundaImage1 from "../../assets/sund-rum1.jpeg";
import sundSjolundaImage2 from "../../assets/sund-rum2.jpeg";
import sundSjolundaImage3 from "../../assets/sund-rum3.jpeg";

const RoomSjolunda = () => {
  const imagesSjolunda = [
    { id: 1, src: sundSjolundaImage1, alt: "Image 1" },
    { id: 2, src: sundSjolundaImage2, alt: "Image 2" },
    { id: 3, src: sundSjolundaImage3, alt: "Image 3" },
  ];
  const descriptionSjolunda = [
    {
      id: 1,
      desc: "Sjölunda är en av våra juniorsviter med sjöutsikt. Med hela 39m2, AC, en soffa och en dubbelsäng från Carpe Diem är det ultimat komfort. Värt ",
      kvm: "39 m2",
    },
  ];
  return (
    <>
      <RoomPageComponent
        images={imagesSjolunda}
        text="Sjölunda"
        description={descriptionSjolunda}
        kvm={descriptionSjolunda[0].kvm}
        interval={3000}
        btnText="Boka nu"
      />
    </>
  );
};

export default RoomSjolunda;
