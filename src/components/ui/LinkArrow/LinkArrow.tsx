import React from 'react'
import "./_linkArrow.scss";

type BackArrowProps = {
    size?: string; 
  };

const LinkArrow : React.FC<BackArrowProps> = ({size =  "2rem"}) => {
  return (
    <>
    <i className="fa-solid fa-arrow-right-long" style={{fontSize: size}}></i>
    </>
  )
}

export default LinkArrow