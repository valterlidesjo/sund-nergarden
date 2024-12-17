import React from "react";
import RoomPageComponent from "../../components/RoomPageComponent";
import sundOvreImage1 from "../../assets/sund-glamping.jpeg";
import sundOvreImage2 from "../../assets/sund-rum2.jpeg";
import sundOvreImage3 from "../../assets/sund-hus2.jpeg";

const GlampOvre = () => {
  const imagesOvre = [
    { id: 1, src: sundOvreImage1, alt: "Image 1" },
    { id: 2, src: sundOvreImage2, alt: "Image 2" },
    { id: 3, src: sundOvreImage3, alt: "Image 3" },
  ];
  const descriptionOvre = [
    {
      id: 1,
      desc: "Övre är ett av våra glampingtält. Möblerade för att få en känsla att du är hemma och ute i naturen samtidigt. Med en golvyta på 19,6 m2, Queen size säng, sjöutsikt och en varm utedusch får du riktig lyx.",
      kvm: "19,6 m2",
    },
  ];
  return (
    <>
      <RoomPageComponent
        images={imagesOvre}
        text="Övre"
        description={descriptionOvre}
        kvm={descriptionOvre[0].kvm}
        interval={3000}
        btnText="Boka nu"
      />
    </>
  );
};

export default GlampOvre;
