import "../scss/_roomPictureFade.scss";

interface RoomPictureFadeProps {
  roomImage: string;
  roomImageW: string;
  roomName: string;
  roomText: string;
  onClick?: () => void;
  fontSizeHeader?: string;
  fontSizeText?: string;
  cursor?: string;
}

const RoomPictureFade: React.FC<RoomPictureFadeProps> = ({
  roomImage,
  roomImageW,
  roomName,
  roomText,
  onClick,
  fontSizeHeader = "2rem",
  fontSizeText = "1rem",
  cursor = "auto",

}) => {
  return (
    <>
      <div className="room-picture-fade-container" onClick={onClick}>
        <picture>
          <source srcSet={roomImageW} type="image/webp" />
          <img
            src={roomImage}
            className="room-image"
            loading="lazy"
            decoding="async"
            alt="fade-pictures"
            style={{ cursor: cursor }}
          />
        </picture>
        <p className="room-image-header" style={{ fontSize: fontSizeHeader }}>
          {roomName}
        </p>
        <p className="room-image-text" style={{ fontSize: fontSizeText }}>
          {roomText}
        </p>
      </div>
    </>
  );
};

export default RoomPictureFade;
