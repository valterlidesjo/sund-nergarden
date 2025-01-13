import RoomPageComponent from "../../components/RoomPageComponent";
import sundOvreImage1 from "../../assets/sund-glamping.jpeg";
import sundOvreImage2 from "../../assets/sund-rum2.jpeg";
import sundTest1 from "../../assets/sund-bastu.jpg";
import sundTest2 from "../../assets/sund-desert1.jpeg";
import sundTest3 from "../../assets/sund-drink.jpg";

import sundOvreImage1W from "../../assets/sund-glamping.jpeg";
import sundOvreImage2W from "../../assets/sund-rum2.jpeg";
import sundTest1W from "../../assets/sund-bastu.jpg";
import sundTest2W from "../../assets/sund-desert1.jpeg";
import sundTest3W from "../../assets/sund-drink.jpg";

const GlampOvre = () => {
  const imagesOvre = [
    { id: 1, src: sundOvreImage1, webpSrc: sundOvreImage1W, alt: "Image 1" },
    { id: 2, src: sundOvreImage2, webpSrc: sundOvreImage2W, alt: "Image 2" },
    { id: 3, src: sundTest1, webpSrc: sundTest1W, alt: "Image 3" },
    { id: 4, src: sundTest2, webpSrc: sundTest2W, alt: "Image 4" },
    { id: 5, src: sundTest3, webpSrc: sundTest3W, alt: "Image 5" },
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
      startImageWebp={imagesOvre[0].webpSrc}
      roomHeader="Övre - En Lyxig Naturupplevelse"
      roomText="Övre är inte bara ett tält - det är en upplevelse där naturens lugn möter exklusiv komfort. Med en golvyta på 19,6 m² och en noggrant utvald Queen size-säng, bjuder detta glampingtält in till en vistelse fylld av avkoppling och ro. 
      Vakna upp till en spektakulär utsikt över trädgården och den glittrande sjön och låt dagen börja med en varm dusch på den privata uteplatsen under bar himmel. Här finns utrymme att andas, tänka och bara vara. Toaletter finns endast ett stenkast bort, cirka 50 meter från tältet, och varje detalj är noggrant planerad för att säkerställa både funktion och komfort. 
      Övre är en rökfri miljö, och vi välkomnar inte husdjur, för att bevara lugnet och renheten i denna natursköna tillflyktsort. Här möts äventyr och elegans i en perfekt symbios, och varje ögonblick är en påminnelse om att de bästa stunderna ofta finns där naturen får tala sitt eget språk."
      imageText="ÖVRE"
      startImage={imagesOvre[0].src}
        images={imagesOvre}
        imageTextDesk="ÖVRE"
        roomHeaderDesk="Övre - En Lyxig Naturupplevelse"
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
