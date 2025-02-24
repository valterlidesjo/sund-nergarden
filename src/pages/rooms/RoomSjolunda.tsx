import React from "react";
const RoomPageComponent = React.lazy(() => import("../../components/RoomPageComponent"));
import sundSjolundaImage1 from "../../assets/sund-rum1.jpeg";
import sundSjolundaImage2 from "../../assets/sund-rum2.jpeg";
import sundTest1 from "../../assets/sund-bastu.jpg";
import sundTest2 from "../../assets/sund-desert1.jpeg";
import sundTest3 from "../../assets/sund-drink.jpg";

import sundSjolundaImage1W from "../../assets/sund-rum1.webp";
import sundSjolundaImage2W from "../../assets/sund-rum2.webp";
import sundTest1W from "../../assets/sund-bastu.webp";
import sundTest2W from "../../assets/sund-desert1.webp";
import sundTest3W from "../../assets/sund-drink.webp";

const RoomSjolunda = () => {
  const imagesSjolunda = [
    { id: 1, src: sundSjolundaImage1, webpSrc: sundSjolundaImage1W, alt: "Image 1" },
    { id: 2, src: sundSjolundaImage2, webpSrc: sundSjolundaImage2W, alt: "Image 2" },
    { id: 3, src: sundTest1, webpSrc: sundTest1W, alt: "Image 3" },
    { id: 4, src: sundTest2, webpSrc: sundTest2W, alt: "Image 4" },
    { id: 5, src: sundTest3, webpSrc: sundTest3W, alt: "Image 5" },
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
        roomHeader="Sjölunda - En Juniorsvit med 
        Sjöutsikt"
        roomText="Upplev en omsorgsfullt designad juniorsvit där varje detalj är vald för att skapa en känsla av harmoni och avkoppling. Med sina generösa 39 kvadratmeter erbjuder sviten en rymlig atmosfär under ett charmigt snedtak, belägen en våning upp i en tidlös miljö utan hiss. 
        Här sover du gott i en exklusiv dubbelsäng från Carpe Diem, känd för sin överlägsna komfort, och låter dagens intryck sjunka in i den bekväma soffan. Oavsett om du söker svalka under varma sommardagar med luftkonditionering eller en golvfläkt, är detta en plats där komforten står i centrum. 
        Sviten är självklart helt rökfri, både inomhus och på de tillhörande uteplatserna, för att säkerställa en ren och frisk atmosfär. Här väntar en plats där lugnet från sjöutsikten smälter samman med omsorgsfull elegans - en tillflykt för den som söker något utöver det vanliga."
        startImage={imagesSjolunda[0].src}
        startImageWebp={imagesSjolunda[0].webpSrc}
        imageText="SJÖ- LUNDA"
        imageTextDesk="SJÖLUNDA"
        roomHeaderDesk="Sjölunda - En Juniorsvit med Sjöutsikt"
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
