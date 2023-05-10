import React from 'react';
import Image from 'next/image';

const ImageGallery = ({ props }) => {


  return (
    <div className="container mx-auto">
      {/* heading text */}
      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {props.map((imageSrc, index) => (
          <li className={`relative ${
            index % 9 === 0 || index % 9 === 2 || index % 9 === 3 || index % 9 === 5 ? 'col-span-2' : ''
          }`} key={imageSrc}>
            <div className="aspect-w-1 aspect-h-1">
              <Image
                src={imageSrc}
                alt=""
                width={300}
                height={200}
                layout="responsive"
                objectFit="cover"
                className="rounded-md"
              />
            </div>

            <div className="absolute inset-0 bg-black bg-opacity-40 hover:bg-opacity-60 transition duration-300">

            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ImageGallery;
