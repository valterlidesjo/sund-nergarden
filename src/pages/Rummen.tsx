import React from 'react'
import "./scss/_rummen.scss";
import HorizontalScroll from '../components/HorizontalScroll';
import { images } from './extra/RummenImages';

const Rummen = () => {
  return (
    <>
    <div className="rummen-container">
        <div className="rummen-header-container-1">
            <p>Våra elva rum</p>
        </div>
        <div className="rummen-text-container-1">
            <p className="rummen-text-container-1">Med olika planlösning och personligt inredda. Sängarna kommer från Carpe Diem och är bäddade med fluffiga täcken, kuddar och sänglinne av ekologisk bomullssatin. Badrummen är utrustade med toalett och dusch och produkter från Björk and Berries. I minibaren ingår kaffe, te, alkoholfri dryck och snacks. Sommartid är samtliga rum utrustade med AC. Tillhörande uteplats/balkong är rökfria. Önskar du att ta med din hund vänligen kontakta oss innan du genomför din bokning.  </p>
        </div>
        <div className="rummen-header-container-2">
        Rummen
        </div>
        
    </div>
        <HorizontalScroll images={images}/>
        <div className="rummen-container">

        </div>
    </>
  )
}

export default Rummen