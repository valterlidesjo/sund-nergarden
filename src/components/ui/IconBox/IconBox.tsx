import React from 'react'
import "./_iconBox.scss";

interface IconBoxProps{
    iconClass: React.ReactNode;
}
const IconBox: React.FC<IconBoxProps> = ({iconClass}) => {
  return (
    <div className='icon-box'>
        {iconClass}
    </div>
  )
}

export default IconBox