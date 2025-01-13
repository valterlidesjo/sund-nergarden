import React from "react";
import "./_menuBtn.scss";

interface MenuBtnProps {
  text: string;
  onClick: () => void;
  margin?: string;
}

const MenuBtn: React.FC<MenuBtnProps> = ({
  text,
  onClick,
  margin = "1.5rem 0 0 0",
}) => {
  return (
    <div className="menu-btn-container" style={{ margin: margin }}>
      <button className="menu-btn" onClick={onClick}>
        {text}
      </button>
    </div>
  );
};

export default MenuBtn;
