import React from "react";
import "./scss/_textSectionSeparated.scss";

interface TextSectionSeparatedProps {
  textLeft: string;
  textRight: string;
  fontSize?: string; // Storlek för text
  fontWeight?: string;
  margin?:string;
  padding?:string;
  flexDirection?:string;
  color?:string;
};

const TextSectionSeparated: React.FC<TextSectionSeparatedProps> = ({
  textLeft,
  textRight,
  fontSize = "1.2rem",
  fontWeight = "100",
  margin = "1rem",
  padding = "0 1rem",
  color,
}) => {
  const containerStyle: React.CSSProperties = {
    margin,
    padding,
  };
  const leftText: React.CSSProperties = {
    textAlign: "left",
    fontSize,
    fontWeight,
    color,
  };
  const rightText: React.CSSProperties = {
    textAlign: "right",
    fontSize,
    fontWeight,
    color,
  };
  return (
    <div className="text-section-separated-container" style={containerStyle}>
      <p style={leftText}>{textLeft}</p>
      <p style={rightText}>{textRight}</p>
    </div>
  );
};

export default TextSectionSeparated;
