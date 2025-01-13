import { useEffect, useState } from "react";
import FoodMenu from "../components/FoodMenu";
import TextSection from "../components/TextSection";
import TextSectionSeparated from "../components/TextSectionSeparated";
import MenuBtn from "../components/ui/MenuBtn/MenuBtn";

const FiveCourseMenu = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    // Hämta Y-koordinaten när sidan laddas
    const currentScrollY = window.scrollY;
    setScrollY(currentScrollY);
  }, []);

  if (scrollY > 0) {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  const handleClick = () => {
    window.location.href =
      "https://online.bookvisit.com/package?channelId=918cee3d-0141-4e51-b886-ac9fcf09653c";
  };
  return (
    <>
      <FoodMenu
        header="Femrättersmeny"
        expires="Gäller till den 5/1 med reservation för ändringar"
      >
        <TextSection text="Tilltugg" textAlign="center" margin="1rem 0 0 0" />
        <TextSection
          text="Amuse-Bouche"
          textAlign="center"
          margin="0 0 2rem 0"
          fontSize="1rem"
        />
        <TextSection
          text="Hembakt Bröd - Pålägg"
          textAlign="center"
          margin="1rem 0 0 0"
        />
        <TextSection
          text="Homemade Bread - Spreads"
          textAlign="center"
          margin="0 0 2rem 0"
          fontSize="1rem"
        />
        <TextSection
          text="Variation på Jordärtskocka - Stenbitsrom - Friterad Rosenkål - Brynt Smör"
          textAlign="center"
          margin="1rem 0 0 0"
        />
        <TextSection
          text="Variation of Jerusalem Artichoke - Roe - Fried Brussel Sprouts - Browned Butter"
          textAlign="center"
          margin="0 0 2rem 0"
          fontSize="1rem"
        />
        <TextSection
          text="Skaldjursravioli - Hummerskum - Smörkokt Purjolök"
          textAlign="center"
          margin="1rem 0 0 0"
        />
        <TextSection
          text="Shellfishravioli - Lobsterfoam - Buttery Leek"
          textAlign="center"
          margin="0 0 2rem 0"
          fontSize="1rem"
        />
        <TextSection
          text="Dovhjort - Kryddsky - Dukkahbakad Rotselleri - Mandelpotatis & Sellericréme"
          textAlign="center"
          margin="1rem 0 0 0"
        />
        <TextSection
          text="Deer - Herb Sauce - Dukkah infused Root Celery - Almondpotato & Celery Créme"
          textAlign="center"
          margin="0 0 2rem 0"
          fontSize="1rem"
        />
        <TextSection
          text="Friterad Kittost - Hjortron-& Äpplekompott - Friterat Grönkålsskott"
          textAlign="center"
          margin="1rem 0 0 0"
        />
        <TextSection
          text="Fried Cheese - Cloudberry-& Apple Compote - Fried Green Cabbage"
          textAlign="center"
          margin="0 0 2rem 0"
          fontSize="1rem"
        />
        <TextSection
          text="Blåbärscheesecake - Rostad Choklad - Blåbärskompott"
          textAlign="center"
          margin="1rem 0 0 0"
        />
        <TextSection
          text="Blueberrycheesecake - Roasted Chocolate - Blueberry Compote"
          textAlign="center"
          margin="0 0 2rem 0"
          fontSize="1rem"
        />
        <TextSection
          text="Meddela oss om ni har några allergier eller andra önskemål angående er kost."
          fontSize="0.8rem"
          textAlign="center"
          margin="0"
        />
        <TextSectionSeparated
          textLeft="Paketpris för ovan meny"
          textRight="Sek 1050"
          margin="1rem 0 0 0"
        />
        <TextSectionSeparated
          textLeft=""
          textRight="/person"
          margin="0 0 2rem 0"
          fontSize="0.8rem"
        />
        <TextSectionSeparated
          textLeft="Vinpaket"
          textRight="Från Sek 550"
          margin="1rem 0 0 0"
        />
        <TextSectionSeparated
          textLeft="Vin serveras till varje rätt"
          textRight="/person"
          margin="0 0 2rem 0"
          fontSize="0.8rem"
        />
        <TextSectionSeparated
          textLeft="Vinresan"
          textRight="Från Sek 1050"
          margin="1rem 0 0 0"
        />
        <TextSectionSeparated
          textLeft="Vin serveras till varje rätt"
          textRight="/person"
          margin="0 0 2rem 0"
          fontSize="0.8rem"
        />
        <MenuBtn text="Boka Middag" onClick={handleClick} />
      </FoodMenu>
    </>
  );
};

export default FiveCourseMenu;
