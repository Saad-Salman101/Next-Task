import React, { useState } from "react";
import Image from "next/image";
import Modal from "./Modal";

const Floorplan = ({ product,props }) => {
  const [modalImage, setModalImage] = useState(null);

  const handleImageClick = (index) => {
    setModalImage(index);
  };

  const handleCloseModal = () => {
    setModalImage(null);
  };
console.log(product)

  return (
    <>
      <div className="grid gap-2 grid-cols-1 md:grid-cols-2">
        {props.map((imageSrc, index) => (
<div
  key={`floorplan-image-${index}`}
  className="hover:border-yellow-500 active:border-golden focus:border-golden m-4 border border-black h-48 md:h-60 lg:h-72 xl:h-96 "
  onClick={() => handleImageClick(index)}
>
  <Image
    src={imageSrc}
    alt=""
    width={500}
    height={300}
    layout="responsive"
    objectFit="cover"
    className="rounded-md"
  />
</div>
        ))}
      </div>
      <div className="text-white">
      {modalImage | (modalImage ==0) && (
        <Modal imagesArray={props} imageSrc={modalImage} onClose={handleCloseModal} />

      )}
      </div>
      <div className="mt-10 mb-3 w-full font-[90px]  flex justify-between uppercase">
        <div className="uppercase ">#ZM{product.id}</div>
        <div className="flex">
          <div className="mr-3">{product.details.address}</div>
          <div>{product.details.city}</div>
        </div>
        <div></div>
      </div>
    </>
  );
};

export default Floorplan;
