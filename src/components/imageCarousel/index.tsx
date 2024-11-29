import React, { useState, useEffect } from 'react';

const images = [
  'luluCarousel.jpg',
  'jannaCarousel.jpg',
  'milioCarousel.webp',
  'namiCarousel.webp',
  'seraphineCarousel.webp',
];

const ImageCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-[620px] h-[400px] mx-auto overflow-hidden rounded-lg shadow-lg border-[6px] border-transparent bg-gradient-to-r from-pink-600 via-red-500 to-purple-500 animate-gradient-border">
      <div className="relative w-full h-full bg-black rounded-lg">
        {images.map((src, index) => (
          <div
            key={index}
            className={`absolute top-0 left-0 w-full h-full transition-opacity duration-500 ${
              index === currentIndex ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <img
              src={src}
              alt={`Carousel Image ${index + 1}`}
              className="w-full h-full object-cover object-center"
            />
            <div className="absolute top-0 left-0 w-full h-full bg-black opacity-30"></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageCarousel;
