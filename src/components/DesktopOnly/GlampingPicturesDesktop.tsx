import "../scss/_glampingPicturesDesktop.scss";
import { useNavigate } from "react-router";
import RoomPictureFade from "./RoomPictureFade";
import sundGlamping1 from "../../assets/sund-glamping.jpeg";
import sundGlamping2 from "../../assets/sund-glamping2.jpeg";
import sundGlamping3 from "../../assets/sund-glamping3.jpeg";

import sundGlamping1W from "../../assets/sund-glamping.webp";
import sundGlamping2W from "../../assets/sund-glamping2.webp";
import sundGlamping3W from "../../assets/sund-glamping3.webp";

const GlampingPicturesDesktop = () => {
    const navigate = useNavigate();
    const goToRoom = (alt: string) => {
        navigate(`/rummen/${alt}`);
        window.scrollTo({ top: 0, behavior: "smooth" });
      };

  return (
    <>
      <div className="glamping-pictures-container">
        <div className="glamp-1 glamping-picture">
          <RoomPictureFade roomImage={sundGlamping1} roomImageW={sundGlamping1W} roomName="BERGET" roomText="Vårt största glamping tält på 20,5m2, sjö och natur utsikt och en king size säng från Carpe Diem." onClick={() => goToRoom("berget")} cursor="pointer" />
        </div>
        <div className="glamp-2 glamping-picture">
          <RoomPictureFade roomImage={sundGlamping2} roomImageW={sundGlamping2W} roomName="ÖVRE" roomText="Övre med utsikt över sjön, en queen size säng från Carpe Diem och 19,6m2 golvyta." onClick={() => goToRoom("ovre")} cursor="pointer" />
        </div>
        <div className="glamp-3 glamping-picture">
          <RoomPictureFade roomImage={sundGlamping3} roomImageW={sundGlamping3W} roomName="NEDRE" roomText="Uteplats med varm dusch, sjöutsikt, queen size säng från Carpe Diem och 19,6m2 golvyta." onClick={() => goToRoom("nedre")} cursor="pointer" />
        </div>
      </div>
    </>
  );
};

export default GlampingPicturesDesktop;
