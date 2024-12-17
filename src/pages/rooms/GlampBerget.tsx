import React from "react";
import RoomPageComponent from "../../components/RoomPageComponent";
import sundBergetImage1 from "../../assets/sund-glamping.jpeg";
import sundBergetImage2 from "../../assets/sund-rum2.jpeg";
import sundBergetImage3 from "../../assets/sund-hus2.jpeg";

const GlampBerget = () => {
  const imagesBerget = [
    { id: 1, src: sundBergetImage1, alt: "Image 1" },
    { id: 2, src: sundBergetImage2, alt: "Image 2" },
    { id: 3, src: sundBergetImage3, alt: "Image 3" },
  ];
  const descriptionBerget = [
    {
      id: 1,
      desc: "Berget är ett av våra glampingtält. Möblerade för att få en känsla att du är hemma och ute i naturen samtidigt. Med en golvyta på 20,5 m2, King size säng, sjöutsikt och en varm utedusch får du riktig lyx.",
      kvm: "20,5 m2",
    },
  ];
  return (
    <>
      <RoomPageComponent
        images={imagesBerget}
        text="Berget"
        description={descriptionBerget}
        kvm={descriptionBerget[0].kvm}
        interval={3000}
        btnText="Boka nu"
      />
    </>
  );
};

export default GlampBerget;
