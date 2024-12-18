import React from "react";
import "./scss/_foodMenu.scss";

interface FoodMenuProps {
  header: string;
  expires: string;
  children: React.ReactNode;
}

const FoodMenu: React.FC<FoodMenuProps> = ({ header, expires, children }) => {
  return (
    <div className="food-container">
      <div className="food-content-container">
        <div className="sticky-header">
          <p className="text-header">{header}</p>
          <p className="due-date">{expires}</p>
        </div>
        {children}
      </div>
    </div>
  );
};

export default FoodMenu;
