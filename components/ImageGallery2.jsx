import React from 'react';
import Image from 'next/image';

const ImageGallery2 = ({ props }) => {

  return (
<div className="container mx-auto">
  {/* heading text */}
  <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-4">
  {props.map((imageSrc, index) => (
  <li
    className={`relative bg-black ${
      index === 0 || index === 1 ? 'col-span-2' :
      index === 2 || index === 3 || index === 4 ? 'col-span-1' :
      index === 5 || index === 6 ? 'col-span-2' :
      index === 7 ? 'col-span-4' : 'col-span-1'
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
