import React from 'react'
import "./_linkArrow.scss";
import { useNavigate } from 'react-router';

type BackArrowProps = {
    size?: string; 
    goToRoute: string;
  };

const LinkArrow : React.FC<BackArrowProps> = ({size =  "2rem", goToRoute}) => {

  const navigate = useNavigate();
  const handleClick = () => {
    if (goToRoute.startsWith("http")) {
      window.location.href = goToRoute; // Extern navigering
    } else {
      navigate(goToRoute); // Intern navigering
    }
  };

  return (
    <>
    <i className="fa-solid fa-arrow-right-long" style={{fontSize: size}} onClick={handleClick}></i>
    </>
  )
}

export default LinkArrow