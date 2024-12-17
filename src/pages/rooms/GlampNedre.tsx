import React from "react";
import RoomPageComponent from "../../components/RoomPageComponent";
import sundNedreImage1 from "../../assets/sund-glamping.jpeg";
import sundNedreImage2 from "../../assets/sund-rum2.jpeg";
import sundNedreImage3 from "../../assets/sund-hus2.jpeg";

const GlampNedre = () => {
  const imagesNedre = [
    { id: 1, src: sundNedreImage1, alt: "Image 1" },
    { id: 2, src: sundNedreImage2, alt: "Image 2" },
    { id: 3, src: sundNedreImage3, alt: "Image 3" },
  ];
  const descriptionNedre = [
    {
      id: 1,
      desc: "Nedre är ett av våra glampingtält. Möblerade för att få en känsla att du är hemma och ute i naturen samtidigt. Med en golvyta på 19,6 m2, Queen size säng, sjöutsikt och en varm utedusch får du riktig lyx.",
      kvm: "19,6 m2",
    },
  ];
  return (
    <>
      <RoomPageComponent
        images={imagesNedre}
        text="Nedre"
        description={descriptionNedre}
        kvm={descriptionNedre[0].kvm}
        interval={3000}
        btnText="Boka nu"
      />
    </>
  );
};

export default GlampNedre;
