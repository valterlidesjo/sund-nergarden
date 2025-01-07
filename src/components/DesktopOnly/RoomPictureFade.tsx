import "../scss/_roomPictureFade.scss";


interface RoomPictureFadeProps {
  roomImage: string;
  roomName: string;
  roomText: string;
  onClick?: () => void;
  gridRow?: string;
  gridColumn?: string;
}

const RoomPictureFade: React.FC<RoomPictureFadeProps> = ({
  roomImage,
  roomName,
  roomText,
  onClick,
//   gridRow = "auto",
//   gridColumn = "auto",
}) => {
  return (
    <>
      <div className="room-picture-fade-container" onClick={onClick}>
        <img src={roomImage} className="room-image" />
        <p className="room-image-header">{roomName}</p>
        <p className="room-image-text">{roomText}</p>
      </div>
    </>
  );
};

export default RoomPictureFade;
