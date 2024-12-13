import LinkArrow from "../LinkArrow/LinkArrow";
import "./_medBtn.scss";

interface MedBtnProps {
  text: string;
  goToRoute: string;
}

const MedBtn: React.FC<MedBtnProps> = ({ text, goToRoute }) => {
  return (
    <div className="med-btn-container">
      <button>
        {text}
        <LinkArrow goToRoute={goToRoute}/>
        </button>
    </div>
  );
};

export default MedBtn;
