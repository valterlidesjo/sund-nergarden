import LinkArrow from "../LinkArrow/LinkArrow";
import "./_medBtn.scss";

interface MedBtnProps {
  text: string;
  goToRoute: () => void;
  height?: string;
  width?: string;
  fontSize?: string;
  margin?: string;
}

const MedBtn: React.FC<MedBtnProps> = ({ text, goToRoute, height = "4.5rem", width = "19rem", fontSize = "1.2rem", margin = "1rem", }) => {
  const buttonStyle: React.CSSProperties = {
      height, 
      width, 
      margin,
      fontSize,
    };
  return (
    <div className="med-btn-container">
      <button onClick={goToRoute} style={buttonStyle}>
        {text}
        </button>
    </div>
  );
};

export default MedBtn;
