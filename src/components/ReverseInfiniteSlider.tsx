import React from 'react'
import "./scss/_infiniteSliderReverse.scss";
interface Image {
    id: number;
    src: string;
    alt: string;
}

interface ReverseInfiniteSliderProps {
    images: Image[];
}

const ReverseInfiniteSlider: React.FC<ReverseInfiniteSliderProps> = ({ images }) => {
  return (
    <div className='scroll-container-slider-rev'>
        <div className="carousel-primary-rev">
        {images.map((image) => (
          <img 
          key={image.id} 
          src={image.src} 
          alt={image.alt} 
          className="carousel-image"
        />
        ))}
        </div>
        <div className="carousel-primary-rev carousel-secondary-rev">
        {images.map((image) => (
          <img 
          key={image.id} 
          src={image.src} 
          alt={image.alt} 
          className="carousel-image"
        />
        ))}
        </div>

    </div>
  )
}

export default ReverseInfiniteSlider