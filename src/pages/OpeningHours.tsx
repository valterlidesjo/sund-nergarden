import "./scss/_openingHours.scss";
import sundSunset from "../assets/sund-sunset.jpeg";
import TextSection from "../components/TextSection";

const OpeningHours = () => {
  return (
    <>
      <div className="open-container">
        <div className="open-pic-container">
          <picture>
            <source srcSet={sundSunset} type="image/webp" />
            <img src={sundSunset} alt="Sund Start Image" />
          </picture>

          <div className="open-header-container">
            <p className="open-header">Våra Öppetider!</p>
          </div>
        </div>
        <TextSection text="Öppetider" fontSize="2.5rem" textAlign="center" color="black" margin="0" padding="4rem 2rem 0.5rem 2rem" />

        <TextSection text="Med reservation för ändringar. Vänligen besök vår bokningskalender för aktuell status." fontSize="0.8rem" textAlign="center" color="black" margin="0" padding="0.5rem 2rem" />

        <TextSection text="Januari: Fre & Lör" fontSize="1rem" textAlign="center" color="black" margin="0" padding="0.5rem 2rem" />

        <TextSection text="Februari-Maj: Tor, Fre, Lör & Sön" fontSize="1rem" textAlign="center" color="black" margin="0" padding="0.5rem 2rem" />

        <TextSection text="Juni-Aug: Alla dagar" fontSize="1rem" textAlign="center" color="black" margin="0" padding="0.5rem 2rem" />

        <TextSection text="September-December: Tor, Fre, Lör & Sön" fontSize="1rem" textAlign="center" color="black" margin="0" padding="0.5rem 2rem 1.5rem 2rem" />

        <TextSection text="Vill ni boka oss för en konferens eller annan bokning om minst 5 rum har vi öppet efter förfrågan!" fontSize="1rem" textAlign="center" color="black" margin="0" padding="0.5rem 2rem" />

        <TextSection text="När du inte bor hos oss men vill boka bord för middag..." textAlign="center" color="black" margin="0" padding="0.5rem 2rem 0rem 2rem" />

        <TextSection text="...behöver du förboka." fontSize="1rem" textAlign="center" color="black" margin="0" padding="0.5rem 2rem 1.5rem 2rem" />

        <TextSection text="Restaurangen öppnar 17.00 dom dagar hotellet är öppet." textAlign="center" color="black" margin="0" padding="0.5rem 2rem" />

        <TextSection text="Sund Nergården har en åldersgräns på 18 år och detta gäller även spädbarn." fontSize="1rem" textAlign="center" color="black" margin="0" padding="0.5rem 2rem 4rem 2rem" />
      </div>
    </>
  );
};

export default OpeningHours;
