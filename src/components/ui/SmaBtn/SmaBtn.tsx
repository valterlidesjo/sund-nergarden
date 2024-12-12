import React from "react";
import "./_smaBtn.scss";

interface SmaBtnProps {
  text: string;
}

const SmaBtn: React.FC<SmaBtnProps> = ({ text }) => {
  return (
    <div className="sma-btn-container">
      <button>{text}</button>
    </div>
  );
};

export default SmaBtn;