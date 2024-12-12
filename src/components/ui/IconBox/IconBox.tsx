import React from 'react'
import "./_iconBox.scss";

interface IconBoxProps{
    iconClass: string;
}
const IconBox: React.FC<IconBoxProps> = ({iconClass}) => {
  return (
    <div className='icon-box'>

        <i className={iconClass}></i>

    </div>
  )
}

export default IconBox