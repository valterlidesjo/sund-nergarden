import React from "react";
import "./_bigBtn.scss";

interface BigBtnProps {
  text: string;
  onClick: () => void;
}

const BigBtn: React.FC<BigBtnProps> = ({ text, onClick }) => {
  return (
    <div className="big-btn-container">
      <button onClick={onClick}>{text}</button>
    </div>
  );
};

export default BigBtn;
