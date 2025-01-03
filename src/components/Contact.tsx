import React from 'react'
import "./scss/_contact.scss";
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";
import MenuBtn from './ui/MenuBtn/MenuBtn';

interface ContactProps{
    header: string;
    children: React.ReactNode;
    facebook: string;
    instagram: string;
    youtube: string;
}


const Contact: React.FC<ContactProps> = ({ header, children, facebook, instagram, youtube }) => {
    const handleClick = () => {
        console.log("BananKontakt");
    }

  return (
    <>
    <div className="contact-container" id='contact-container'>
        <div className="header-container">
            <p className='header'>{header}</p>
        </div>
        <div className="content-container">
            {children}
            <div className="facebook"><FaFacebook />{facebook}</div>
            <div className="instagram"><FaInstagram /> {instagram}</div>
            <div className="youtube"><FaYoutube /> {youtube}</div>
            <MenuBtn text='KONTAKTA OSS' onClick={handleClick}/>
        </div>

    </div>
    </>
  )
}

export default Contact