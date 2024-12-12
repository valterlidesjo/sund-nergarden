import LinkArrow from "../LinkArrow/LinkArrow";
import "./_medBtn.scss";

interface MedBtnProps {
  text: string;
}

const MedBtn: React.FC<MedBtnProps> = ({ text }) => {
  return (
    <div className="med-btn-container">
      <button>
        {text}
        <LinkArrow/>
        </button>
    </div>
  );
};

export default MedBtn;
