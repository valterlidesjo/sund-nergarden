import React from "react";
import "./_smaBtn.scss";

interface SmaBtnProps {
  text: string;
  click: () => void;
}

const SmaBtn: React.FC<SmaBtnProps> = ({ text, click }) => {
  return (
    <div className="sma-btn-container">
      <button onClick={click}>{text}</button>
    </div>
  );
};

export default SmaBtn;