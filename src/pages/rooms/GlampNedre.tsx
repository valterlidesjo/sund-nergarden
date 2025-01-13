import RoomPageComponent from "../../components/RoomPageComponent";
import sundNedreImage1 from "../../assets/sund-glamping.jpeg";
import sundNedreImage2 from "../../assets/sund-rum2.jpeg";
import sundTest1 from "../../assets/sund-bastu.jpg";
import sundTest2 from "../../assets/sund-desert1.jpeg";
import sundTest3 from "../../assets/sund-drink.jpg";

import sundNedreImage1W from "../../assets/sund-glamping.jpeg";
import sundNedreImage2W from "../../assets/sund-rum2.jpeg";
import sundTest1W from "../../assets/sund-bastu.jpg";
import sundTest2W from "../../assets/sund-desert1.jpeg";
import sundTest3W from "../../assets/sund-drink.jpg";

const GlampNedre = () => {
  const imagesNedre = [
    { id: 1, src: sundNedreImage1, webpSrc: sundNedreImage1W, alt: "Image 1" },
    { id: 2, src: sundNedreImage2, webpSrc: sundNedreImage2W, alt: "Image 2" },
    { id: 3, src: sundTest1, webpSrc: sundTest1W, alt: "Image 3" },
    { id: 4, src: sundTest2, webpSrc: sundTest2W, alt: "Image 4" },
    { id: 5, src: sundTest3, webpSrc: sundTest3W, alt: "Image 5" },
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
      startImageWebp={imagesNedre[0].webpSrc}
      roomHeader="Nedre - En Lyxig Naturupplevelse"
      roomText="Nedre är inte bara ett tält - det är en upplevelse där naturens lugn möter exklusiv komfort. Med en golvyta på 19,6 m² och en noggrant utvald Queen size-säng, bjuder detta glampingtält in till en vistelse fylld av avkoppling och ro. 
      Vakna upp till en spektakulär utsikt över trädgården och den glittrande sjön och låt dagen börja med en varm dusch på den privata uteplatsen under bar himmel. Här finns utrymme att andas, tänka och bara vara. Toaletter finns endast ett stenkast bort, cirka 50 meter från tältet, och varje detalj är noggrant planerad för att säkerställa både funktion och komfort. 
      Nedre är en rökfri miljö, och vi välkomnar inte husdjur, för att bevara lugnet och renheten i denna natursköna tillflyktsort. Här möts äventyr och elegans i en perfekt symbios, och varje ögonblick är en påminnelse om att de bästa stunderna ofta finns där naturen får tala sitt eget språk."
      imageText="NEDRE"
      startImage={imagesNedre[0].src}
        images={imagesNedre}
        roomHeaderDesk="NEDRE - En Lyxig Naturupplevelse"
        imageTextDesk="NEDRE"
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
