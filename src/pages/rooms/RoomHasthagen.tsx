import React from "react";
import RoomPageComponent from "../../components/RoomPageComponent";
import sundHasthagenImage1 from "../../assets/sund-rum1.jpeg";
import sundHasthagenImage2 from "../../assets/sund-rum2.jpeg";
import sundHasthagenImage3 from "../../assets/sund-rum3.jpeg";

const RoomHasthagen = () => {
  const imagesHasthagen = [
    { id: 1, src: sundHasthagenImage1, alt: "Image 1" },
    { id: 2, src: sundHasthagenImage2, alt: "Image 2" },
    { id: 3, src: sundHasthagenImage3, alt: "Image 3" },
  ];
  const descriptionHasthagen = [
    {
      id: 1,
      desc: "Hästhagen är en av våra juniorsviter med sjöutsikt. Med hela 69m2, AC, en soffa och en dubbelsäng från Carpe Diem är det ultimat komfort. Värt ",
      kvm: "69 m2",
    },
  ];
  return (
    <>
      <RoomPageComponent
        images={imagesHasthagen}
        text="Hästhagen"
        description={descriptionHasthagen}
        kvm={descriptionHasthagen[0].kvm}
        interval={3000}
        btnText="Boka nu"
      />
    </>
  );
};

export default RoomHasthagen;
