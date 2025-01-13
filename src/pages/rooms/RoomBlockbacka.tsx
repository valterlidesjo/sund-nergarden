import RoomPageComponent from "../../components/RoomPageComponent";
import sundBlombackaImage1 from "../../assets/sund-rum1.jpeg";
import sundBlombackaImage2 from "../../assets/sund-rum2.jpeg";
import sundTest1 from "../../assets/sund-bastu.jpg";
import sundTest2 from "../../assets/sund-desert1.jpeg";
import sundTest3 from "../../assets/sund-drink.jpg";

import sundBlombackaImage1W from "../../assets/sund-rum1.jpeg";
import sundBlombackaImage2W from "../../assets/sund-rum2.jpeg";
import sundTest1W from "../../assets/sund-bastu.jpg";
import sundTest2W from "../../assets/sund-desert1.jpeg";
import sundTest3W from "../../assets/sund-drink.jpg";

const RoomBlombacka = () => {
  const imagesBlombacka = [
    { id: 1, src: sundBlombackaImage1, webpSrc: sundBlombackaImage1W, alt: "Image 1" },
    { id: 2, src: sundBlombackaImage2, webpSrc: sundBlombackaImage2W, alt: "Image 2" },
    { id: 3, src: sundTest1, webpSrc: sundTest1W, alt: "Image 3" },
    { id: 4, src: sundTest2, webpSrc: sundTest2W, alt: "Image 4" },
    { id: 5, src: sundTest3, webpSrc: sundTest3W, alt: "Image 5" },
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
      startImageWebp={imagesBlombacka[0].webpSrc}
        roomHeader="Blombacka - En Oas av Elegans och 
      Stillhet"
        roomText="Blombacka är mer än bara ett rum - det är en tillflyktsort där varje detalj är omsorgsfullt utvald för att skapa en harmonisk balans mellan komfort och elegans. Med en golvyta på cirka 23 m² och ett charmigt snedtak, bjuder detta dubbelrum in till en känsla av tidlös lyx. 
      Här väntar en generös dubbelsäng från Carpe Diem, klädd i de mjukaste ekologiska textilier, och bekväma fåtöljer som bjuder in till långa stunder av avkoppling. Ljuset flödar in genom fönstren och öppnar upp för en rogivande utsikt över trädgården och den glittrande sjön. 
      Rummet är beläget en trappa upp utan hiss, och erbjuder en känsla av avskildhet och lugn. Med AC och golvfläkt säkerställs en behaglig temperatur under alla årstider. Varje ögonblick på Blombacka är en inbjudan att sakta ner, andas djupt och låta själen landa i det vackra. Här möts du av en atmosfär där varje detalj berättar en historia av omsorg och kvalitet."
        startImage={imagesBlombacka[0].src}
        imageText="BLOM BACKA"
        imageTextDesk="BLOMBACKA"
        roomHeaderDesk="Blombacka - En Oas av Elegans och Stillhet"
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
