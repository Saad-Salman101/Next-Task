import React from 'react';
import Image from 'next/image';

const ImageGallery = ({props}) => {

  return (
    <div className="container mx-auto">
      {/* heading text */}
      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {props.map((imageSrc) => (
          <li className="relative" key={imageSrc}>
            <div className="aspect-w-1 aspect-h-1">
              <Image 
                src={imageSrc} 
                alt='' 
                width={500} 
                height={500} 
                className="object-cover rounded-md"
              />
            </div>
            <div className="absolute inset-0 bg-black bg-opacity-40 hover:bg-opacity-60 transition duration-300">
              <span className="text-white font-bold text-xl absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">Image title</span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ImageGallery;
