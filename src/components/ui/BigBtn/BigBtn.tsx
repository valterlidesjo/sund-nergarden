import React from "react";
import "./_bigBtn.scss";

interface BigBtnProps extends HTMLButtonElement {
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
