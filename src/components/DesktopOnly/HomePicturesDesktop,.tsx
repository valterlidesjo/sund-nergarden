import RoomPictureFade from './RoomPictureFade'
import sundDrink from "../../assets/sund-drink.jpg";
import sundMat from "../../assets/sund-mat.jpeg";
import sundPool from "../../assets/sund-pool.jpeg";
import sundfrukost from "../../assets/sund-frukost.jpg";
import sundBastu2 from "../../assets/sund-bastu2.jpeg";
import sundSjo from "../../assets/sund-sjo.jpeg";
import sundChark from "../../assets/sund-chark.jpeg";
import sundGlamping3 from "../../assets/sund-glamping3.jpeg";
import "../scss/_homePictureDesktop.scss";

const HomePicturesDesktop = () => {
  return (
    <>
    <div className="home-pictures-container">
        <div className="home-1 home-picture">
            <RoomPictureFade roomImage={sundGlamping3} roomName='Övernattning' roomText='Hos oss kan du njuta av en unik övernattning i antingen ett av våra personligt inredda rum eller i ett av våra lyxiga glampingtält. Oavsett vilket du väljer väntar en ombonad atmosfär och en naturnära upplevelse som ger både avkoppling och minnesvärda stunder.' fontSizeText='0.65rem'/>
        </div>
        <div className="home-2 home-picture">
        <RoomPictureFade roomImage={sundChark} roomName='Ost & Chark' roomText='Under eftermiddagen serveras ett noggrant utvalt urval av ost och charkuterier. Med smaker som kompletterar varandra skapas en avkopplande stund där du kan njuta av delikatesser i en rofylld miljö - en perfekt paus innan kvällens upplevelser tar vid.' fontSizeText='0.65rem'/>
        </div>
        <div className="home-3 home-picture">
        <RoomPictureFade roomImage={sundDrink} roomName='Fördrink' roomText='En välkomponerad fördrink serveras i samband med middagen och blir den perfekta inledningen och en stämningsfull start för en minnesvärd kväll.' fontSizeText='0.65rem'/>
        </div>
        <div className="home-4 home-picture">
        <RoomPictureFade roomImage={sundMat} roomName='Trerätters meny' roomText='Vår trerättersmeny bjuder på en omsorgsfullt komponerad matupplevelse med fem serveringar, där varje rätt är skapad med säsongens bästa råvaror och stor passion för detaljer. Luta dig tillbaka och njut av en kulinarisk resa i en varm och inbjudande atmosfär.' fontSizeText='0.65rem'/>
        </div>
        <div className="home-5 home-picture">
        <RoomPictureFade roomImage={sundfrukost} roomName='Frukost' roomText='Frukost ingår alltid i din vistelse och serveras med noggrant utvalda råvaror för en härlig start på dagen. Om du önskar en omelett tillagad efter dina önskemål, säg bara till - vi ordnar det gärna!' fontSizeText='0.65rem'/>
        </div>
        <div className="home-6 home-picture">
        <RoomPictureFade roomImage={sundBastu2} roomName='Bastubad' roomText='Vår bastu är öppen för avkopplande stunder året om. Oavsett årstid kan du njuta av värmen, stillheten och den rogivande utsikten över naturen.' fontSizeText='0.65rem'/>
        </div>
        <div className="home-7 home-picture">
        <RoomPictureFade roomImage={sundSjo} roomName='Sjöbad' roomText='Vårt sjöbad är öppet för uppfriskande dopp från tidig vår till sen höst, oavsett väder. Här kan du njuta av naturens lugn och svalkande vatten under hela säsongen.' fontSizeText='0.65rem'/>
        </div>
        <div className="home-8 home-picture">
        <RoomPictureFade roomImage={sundPool} roomName='Utomhuspool' roomText='Vår utomhuspol är öppen för anvädning i alla väder från maj till september' fontSizeText='0.65rem'/>
        </div>
    </div>
    </>
  )
}

export default HomePicturesDesktop;