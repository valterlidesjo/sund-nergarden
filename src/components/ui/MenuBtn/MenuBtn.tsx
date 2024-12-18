import React from "react";
import "./_menuBtn.scss";

interface MenuBtnProps {
  text: string;
  onClick: () => void;
}

const MenuBtn: React.FC<MenuBtnProps> = ({ text, onClick }) => {
  return (
    <div className="menu-btn-container">
      <button className="menu-btn" onClick={onClick}>{text}</button>
    </div>
  );
};

export default MenuBtn;
