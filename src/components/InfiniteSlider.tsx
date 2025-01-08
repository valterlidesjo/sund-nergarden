import React from 'react'

const InfiniteSlider = ({ images = [],}) => {
  return (
    <div className='scroll-container'>
        <div className="carousel-primary">
        {images.map((src, index) => (
          <img key={index} src={src} alt={`Primary ${index}`} />
        ))}
        </div>
        <div className="carousel-primary carousel-secondary">
        {images.map((src, index) => (
          <img key={index} src={src} alt={`Primary ${index}`} />
        ))}
        </div>

    </div>
  )
}

export default InfiniteSlider