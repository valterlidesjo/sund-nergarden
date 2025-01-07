import RoomPictureFade from "./RoomPictureFade"
import sundRum1 from "../../assets/sund-rum1.jpeg";
import sundRum2 from "../../assets/sund-rum2.jpeg";
import sundGlamping2 from "../../assets/sund-glamping2.jpeg";
import sundPool from "../../assets/sund-pool.jpeg";
import "../scss/_roomPicturesDesktop.scss";
import { useNavigate } from "react-router";


const RoomPicturesDesktop = () => {

    const navigate = useNavigate();
    const goToRoom = (alt: string) => {
        navigate(`/rummen/${alt}`);
        window.scrollTo({ top: 0, behavior: "smooth" });
      };

  return (
    <>
    <div className="room-pictures-container">
        <div className="room-1 room-picture">
        <RoomPictureFade roomImage={sundRum1} roomName="SJÖLUNDA" roomText="Vår största Juniorsvit på 39m2 med king size säng och utsikt över sjön Sillen." onClick={() => goToRoom("sjolunda")} />
        </div>
        <div className="room-2 room-picture">
        <RoomPictureFade roomImage={sundRum2} roomName="SUND" roomText="Utsikt över naturen i våra välskötta trädgård. 24m2 och en otrolig dubbelsäng från Carpe Diem." onClick={() => goToRoom("sund")} />
        </div>
        <div className="room-3 room-picture">

        <RoomPictureFade roomImage={sundPool} roomName="VÄSTERLJUNG" roomText="En mysig Juniorsvit på 31m2 med king size säng och utsikt över sjön Sillen." onClick={() => goToRoom("vasterljung")} />
        </div>
        <div className="room-4 room-picture">

        <RoomPictureFade roomImage={sundGlamping2} roomName="HÄSTHAGEN" roomText="Juniorsvit på 37m2 med king size säng och utsikt över sjön Sillen." onClick={() => goToRoom("hasthagen")} />
        </div>
        <div className="room-5 room-picture">

        <RoomPictureFade roomImage={sundRum1} roomName="BLOMBACKA" roomText="Ett dubbelrum med utsikt över natur och sjö. 23m2, snedtak och en otrolig dubbelsäng från Carpe Diem." onClick={() => goToRoom("blombacka")} />
        </div>
        <div className="room-6 room-picture">

        <RoomPictureFade roomImage={sundPool} roomName="WAPPERSTA" roomText="25m2 stort dubbelrum med utsikt över vår fina trädgård." onClick={() => goToRoom("wappersta")} />
        </div>
        <div className="room-7 room-picture">
        <RoomPictureFade roomImage={sundRum1} roomName="SILLEN" roomText="Ett av våra dubbelrum med utsikt över både sjö och natur, 23m2 golvyta." onClick={() => goToRoom("sillen")} />

        </div>
        <div className="room-8 room-picture">

        <RoomPictureFade roomImage={sundRum2} roomName="LÖVSTA" roomText="Vår största Juniorsvit på 39m2 med soffa och vedkamin för maximal lyxig mys. Utsikt över vår fina trädgård och hästhagen." onClick={() => goToRoom("lovsta")} />
        </div>
        <div className="room-9 room-picture">

        <RoomPictureFade roomImage={sundGlamping2} roomName="VAGNHÄRAD" roomText="Dubbelrum med utsikt av vår fina trädgård, 18m2 golvyta och en otrolig dubbelsäng från Carpe Diem." onClick={() => goToRoom("vagnharad")} />
        </div>
        <div className="room-10 room-picture">

        <RoomPictureFade roomImage={sundRum2} roomName="LUNDBY" roomText="25m2 stort dubbelrum med utsikt över vår fina trädgård." onClick={() => goToRoom("lundby")} />
        </div>
        <div className="room-11 room-picture">

        <RoomPictureFade roomImage={sundPool} roomName="TROSA" roomText="Ett av våra dubbelrum med utsikt över både sjö och natur, 24m2 golvyta." onClick={() => goToRoom("trosa")} />
        </div>


    </div>
    </>
  )
}

export default RoomPicturesDesktop