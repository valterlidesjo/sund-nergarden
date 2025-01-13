import RoomPageComponent from "../../components/RoomPageComponent";
import sundHasthagenImage1 from "../../assets/sund-rum1.jpeg";
import sundHasthagenImage2 from "../../assets/sund-rum2.jpeg";
import sundTest1 from "../../assets/sund-bastu.jpg";
import sundTest2 from "../../assets/sund-desert1.jpeg";
import sundTest3 from "../../assets/sund-drink.jpg";

import sundHasthagenImage1W from "../../assets/sund-rum1.webp";
import sundHasthagenImage2W from "../../assets/sund-rum2.webp";
import sundTest1W from "../../assets/sund-bastu.webp";
import sundTest2W from "../../assets/sund-desert1.webp";
import sundTest3W from "../../assets/sund-drink.webp";



const RoomHasthagen = () => {
  const imagesHasthagen = [
    { id: 1, src: sundHasthagenImage1, webpSrc: sundHasthagenImage1W, alt: "Image 1" },
    { id: 2, src: sundHasthagenImage2, webpSrc: sundHasthagenImage2W, alt: "Image 2" },
    { id: 3, src: sundTest1, webpSrc: sundTest1W, alt: "Image 3" },
    { id: 4, src: sundTest2, webpSrc: sundTest2W, alt: "Image 4" },
    { id: 5, src: sundTest3, webpSrc: sundTest3W, alt: "Image 5" },
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
      startImageWebp={imagesHasthagen[0].webpSrc}
      roomHeader="Hästhagen - En Juniorsvit med 
        Sjöutsikt"
        roomText="Upplev en omsorgsfullt designad juniorsvit där varje detalj är vald för att skapa en känsla av harmoni och avkoppling. Med sina generösa 37 kvadratmeter erbjuder sviten en rymlig atmosfär under ett charmigt snedtak, belägen en våning upp i en tidlös miljö utan hiss. 
        Här sover du gott i en exklusiv dubbelsäng från Carpe Diem, känd för sin överlägsna komfort, och låter dagens intryck sjunka in i den bekväma soffan. Oavsett om du söker svalka under varma sommardagar med luftkonditionering eller en golvfläkt, är detta en plats där komforten står i centrum. 
        Sviten är självklart helt rökfri, både inomhus och på de tillhörande uteplatserna, för att säkerställa en ren och frisk atmosfär. Här väntar en plats där lugnet från sjöutsikten smälter samman med omsorgsfull elegans - en tillflykt för den som söker något utöver det vanliga."
      startImage={imagesHasthagen[0].src}
      imageText="HÄST HAGEN"
      imageTextDesk="HÄSTHAGEN"
      roomHeaderDesk="Hästhagen - En Juniorsvit med Sjöutsikt"
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
