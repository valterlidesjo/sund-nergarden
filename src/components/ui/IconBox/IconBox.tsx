import React from 'react'
import "./_iconBox.scss";

interface IconBoxProps{
    children: React.ReactNode;
}
const IconBox: React.FC<IconBoxProps> = ({children}) => {
  return (
    <div className='icon-box'>
        {children}
    </div>
  )
}

export default IconBox