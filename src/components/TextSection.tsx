import React from "react";
import "./scss/_textSection.scss";

interface TextSectionProps {
  text: string;
  textAlign?: "left" | "center" | "right"; // Textjustering
  fontSize?: string; // Storlek för text
  fontWeight?: string;
  margin?:string;
  padding?:string;
  color?:string;
  fontFamily?: string;
  lineHeight?: string;
}

const TextSection: React.FC<TextSectionProps> = ({
  text,
  textAlign = "left",
  fontSize = "1.2rem",
  fontWeight = "100",
  margin = "1rem",
  padding = "0 1rem",
  color = "white",
  fontFamily = '"Kaisei Decol"',
  lineHeight = "1.6",
}) => {
  const containerStyle: React.CSSProperties = {
    textAlign,
    margin,
    padding,
  };
  const textStyle: React.CSSProperties = {
    fontSize,
    fontWeight,
    color,
    fontFamily,
    lineHeight,
    whiteSpace: 'pre-line',
  };
  return (
    <div className="text-section-container" style={containerStyle}>
      <p style={textStyle}>{text}</p>
    </div>
  );
};

export default TextSection;
