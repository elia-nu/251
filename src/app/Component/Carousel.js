import React, { useState, useEffect } from 'react';
import Image from 'next/image';

const images = [
  '/image1.jpg',
  '/image2.jpg',
  '/image3.jpg',
];

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(currentIndex => (currentIndex + 1) % images.length);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full overflow-hidden">
      {images.map((img, index) => (
        <div
          key={index}
          className={`absolute w-full h-full transition-opacity duration-1000 ease-in-out ${index === currentIndex ? 'opacity-100' : 'opacity-0'}`}
          style={{ backgroundImage: `url(${img})`, backgroundSize: 'cover' }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-25 flex items-center justify-center">
            <p className="text-white text-xl">Your External Text Here</p>
            <Image src="/logo.png" alt="Logo" className="w-32 mt-4" width={500} height={300} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Carousel;
