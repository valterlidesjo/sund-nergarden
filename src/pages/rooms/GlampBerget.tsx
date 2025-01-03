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
      roomHeader="Berget - En Lyxig Naturupplevelse"
      roomText="Berget är inte bara ett tält - det är en upplevelse där naturens lugn möter exklusiv komfort. Med en golvyta på 20,5 m² och en noggrant utvald King size-säng, bjuder detta glampingtält in till en vistelse fylld av avkoppling och ro. 
      Vakna upp till en spektakulär utsikt över trädgården och den glittrande sjön och låt dagen börja med en varm dusch på den privata uteplatsen under bar himmel. Här finns utrymme att andas, tänka och bara vara. Toaletter finns endast ett stenkast bort, cirka 50 meter från tältet, och varje detalj är noggrant planerad för att säkerställa både funktion och komfort. 
      Berget är en rökfri miljö, och vi välkomnar inte husdjur, för att bevara lugnet och renheten i denna natursköna tillflyktsort. Här möts äventyr och elegans i en perfekt symbios, och varje ögonblick är en påminnelse om att de bästa stunderna ofta finns där naturen får tala sitt eget språk."
      imageText="BERGET"
      startImage={imagesBerget[0].src}
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
