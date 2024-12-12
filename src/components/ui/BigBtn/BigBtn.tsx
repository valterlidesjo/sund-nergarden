import React from "react";
import "./_bigBtn.scss";

interface BigBtnProps {
  text: string;
}

const BigBtn: React.FC<BigBtnProps> = ({ text }) => {
  return (
    <div className="big-btn-container">
      <button>{text}</button>
    </div>
  );
};

export default BigBtn;
