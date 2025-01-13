import React from "react";
import "./_bigBtn.scss";

interface BigBtnProps {
  text: string;
  onClick: () => void;
  height?: string;
  width?: string;
  fontSize?: string;
  margin?: string;
  padding?: string;
}


const BigBtn: React.FC<BigBtnProps> = ({ text, onClick, height = "6.2rem", width = "16.2rem", fontSize = "2.3rem", margin = "1rem", padding = "0" }) => {
  const buttonStyle: React.CSSProperties = {
    height, 
    width, 
    margin,
    fontSize,
    padding,
  };
  return (
    <div className="big-btn-container">
      <button onClick={onClick} style={buttonStyle}>{text}</button>
    </div>
  );
};

export default BigBtn;
