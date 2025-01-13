import React from 'react'
import "./scss/_infiniteSlider.scss";
interface Image {
    id: number;
    src: string;
    alt: string;
}

interface InfiniteSliderProps {
    images: Image[];
}

const InfiniteSlider: React.FC<InfiniteSliderProps> = ({ images }) => {
  return (
    <div className='scroll-container-slider'>
        <div className="carousel-primary">
        {images.map((image) => (
          <img 
          key={image.id} 
          src={image.src} 
          alt={image.alt} 
          className="carousel-image"
        />
        ))}
        </div>
        <div className="carousel-primary carousel-secondary">
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

export default InfiniteSlider