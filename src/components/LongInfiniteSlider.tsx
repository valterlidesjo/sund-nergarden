import React from 'react'
import "./scss/_longInfiniteSlider.scss";
interface Image {
    id: number;
    src: string;
    alt: string;
}

interface LongInfiniteSliderProps {
    images: Image[];
}

const LongInfiniteSlider: React.FC<LongInfiniteSliderProps> = ({ images }) => {
  return (
    <div className='long-scroll-container-slider'>
        <div className="long-carousel-primary">
        {images.map((image) => (
          <img 
          key={image.id} 
          src={image.src} 
          alt={image.alt} 
          className="long-carousel-image"
        />
        ))}
        </div>
        <div className="long-carousel-primary long-carousel-secondary">
        {images.map((image) => (
          <img 
          key={image.id} 
          src={image.src} 
          alt={image.alt} 
          className="long-carousel-image"
        />
        ))}
        </div>

    </div>
  )
}

export default LongInfiniteSlider