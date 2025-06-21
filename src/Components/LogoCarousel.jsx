import React from 'react';
import Marquee from 'react-fast-marquee';
import brand1 from '../Assets/brand1.png';
import brand2 from '../Assets/brand2.png';
import brand3 from '../Assets/brand3.png';
import brand4 from '../Assets/brand4.png';
import brand5 from '../Assets/brand5.png';
import brand6 from '../Assets/brand6.png';
import brand7 from '../Assets/brand7.png';
import brand8 from '../Assets/brand8.png';

const logos = [brand1, brand2, brand3, brand4, brand5, brand6, brand7, brand8];

const LogoCarousel = () => {
  return (
    <div className="bg-gray-100 py-6">
      <Marquee
        gradient={false}
        speed={40}
        pauseOnHover={true}
        pauseOnClick={true}
        className="flex"
      >
        {logos.map((logo, index) => (
          <div
            key={index}
            className="flex items-center justify-center mx-6 p-4"
          >
            <img
              src={logo}
              alt={`Brand ${index + 1}`}
              className="h-[80px] w-auto object-contain"
            />
          </div>
        ))}
      </Marquee>
    </div>
  );
};

export default LogoCarousel;
