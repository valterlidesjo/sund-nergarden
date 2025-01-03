import React from "react";
import RoomPageComponent from "../../components/RoomPageComponent";
import sundSjolundaImage1 from "../../assets/sund-rum1.jpeg";
import sundSjolundaImage2 from "../../assets/sund-rum2.jpeg";
import sundSjolundaImage3 from "../../assets/sund-rum3.jpeg";

const RoomSjolunda = () => {
  const imagesSjolunda = [
    { id: 1, src: sundSjolundaImage1, alt: "Image 1" },
    { id: 2, src: sundSjolundaImage2, alt: "Image 2" },
    { id: 3, src: sundSjolundaImage3, alt: "Image 3" },
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
        imageText="SJÖ- LUNDA"
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
