import "../scss/_roomPictureFade.scss";


interface RoomPictureFadeProps {
  roomImage: string;
  roomName: string;
  roomText: string;
  onClick?: () => void;
  fontSizeHeader?: string;
  fontSizeText?: string;

}

const RoomPictureFade: React.FC<RoomPictureFadeProps> = ({
  roomImage,
  roomName,
  roomText,
  onClick,
  fontSizeHeader = "2rem",
  fontSizeText = "1rem",
}) => {
  return (
    <>
      <div className="room-picture-fade-container" onClick={onClick}>
        <img src={roomImage} className="room-image" />
        <p className="room-image-header" style={{ fontSize: fontSizeHeader}}>{roomName}</p>
        <p className="room-image-text" style={{ fontSize: fontSizeText}}>{roomText}</p>
      </div>
    </>
  );
};

export default RoomPictureFade;
