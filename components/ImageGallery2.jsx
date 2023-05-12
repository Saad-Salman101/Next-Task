import React from 'react';
import Image from 'next/image';

const ImageGallery2 = ({ props }) => {
  return (
    <div className="container mx-auto">
      {/* heading text */}
      <ul className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-6 lg:grid-cols-6 gap-4">
        {props.map((imageSrc, index) => (
          <li
            className={`relative bg-black ${
              index % 8 === 0 || index % 8 === 1 ? 'col-span-3' :
              index % 8 === 2 || index % 8 === 3 || index % 8 === 4 ? 'col-span-2' :
              index % 8 === 5 || index % 8 === 6 ? 'col-span-3' :
              index % 8 === 7 ? 'col-span-6' : 'col-span-2'
            }`}
            key={imageSrc}
          >
            <div style={{ position: 'relative', width: '100%', height: '400px' }}>
              <Image
                src={imageSrc}
                alt=""
                layout="fill"
                objectFit="cover"
              />
            </div>
            <div className="absolute inset-0 bg-black bg-opacity-40 hover:bg-opacity-60 transition duration-300"></div>
          </li>
        ))}
      </ul>
            
      
    </div>
  );
};

export default ImageGallery2;
