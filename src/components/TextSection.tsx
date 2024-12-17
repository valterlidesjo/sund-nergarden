import React from "react";
import "./scss/_textSection.scss";

interface TextSectionProps {
  text: string;
  textAlign?: "left" | "center" | "right"; // Textjustering
  fontSize?: string; // Storlek för text
  fontWeight?: string;
  margin?:string;
  padding?:string;
}

const TextSection: React.FC<TextSectionProps> = ({
  text,
  textAlign = "left",
  fontSize = "1.2rem",
  fontWeight = "100",
  margin = "1rem",
  padding = "0 1rem",
}) => {
  const containerStyle: React.CSSProperties = {
    margin,
    padding,
  };
  const textStyle: React.CSSProperties = {
    textAlign,
    fontSize,
    fontWeight,
  };
  return (
    <div className="text-section-container" style={containerStyle}>
      <p style={textStyle}>{text}</p>
    </div>
  );
};

export default TextSection;
