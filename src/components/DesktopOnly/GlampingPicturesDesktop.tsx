import RoomPictureFade from "./RoomPictureFade";
import sundGlamping1 from "../../assets/sund-glamping.jpeg";
import sundGlamping2 from "../../assets/sund-glamping2.jpeg";
import sundGlamping3 from "../../assets/sund-glamping3.jpeg";
import "../scss/_glampingPicturesDesktop.scss";
import { useNavigate } from "react-router";

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
          <RoomPictureFade roomImage={sundGlamping1} roomName="BERGET" roomText="text text text" onClick={() => goToRoom("berget")} />
        </div>
        <div className="glamp-2 glamping-picture">
          <RoomPictureFade roomImage={sundGlamping2} roomName="ÖVRE" roomText="text text text" onClick={() => goToRoom("ovre")} />
        </div>
        <div className="glamp-3 glamping-picture">
          <RoomPictureFade roomImage={sundGlamping3} roomName="NEDRE" roomText="text text text" onClick={() => goToRoom("nedre")} />
        </div>
      </div>
    </>
  );
};

export default GlampingPicturesDesktop;
