import React from "react";
import "./scss/_textSection.scss";

interface TextSectionProps {
  text: string;
  textAlign?: "left" | "center" | "right";
  flexAlign?: "flex-start" | "center" | "flex-end";
  fontSize?: string;
  fontWeight?: string;
  margin?:string;
  padding?:string;
  color?:string;
  fontFamily?: string;
  lineHeight?: string;
  onClick?: () => void;
}

const TextSection: React.FC<TextSectionProps> = ({
  text,
  onClick,
  textAlign = "left",
  fontSize = "1.2rem",
  fontWeight = "100",
  margin = "1rem",
  padding = "0 1rem",
  color = "white",
  fontFamily = '"Kaisei Decol"',
  lineHeight = "1.6",
  flexAlign = "center",
}) => {
  const containerStyle: React.CSSProperties = {
    textAlign,
    margin,
    padding,
    display: flexAlign === "center" ? "block" : "flex",
    justifyContent: flexAlign !== "center" ? flexAlign : undefined,
    alignItems: flexAlign !== "center" ? "center" : undefined,
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
      <p style={textStyle} onClick={onClick}>{text}</p>
    </div>
  );
};

export default TextSection;
