import React, { useState } from "react";
import Image from "next/image";
import ZoomOut from '../public/images/zoom-out-icon.jpg'
import ZoomIn from '../public/images/zoom-in-icon.png'
import Rotate from '../public/images/rotate.png'
import SwiperRight from "../public/images/swiper-right.png";
import SwiperLeft from "../public/images/swiper-left.png";
import HeaderFloorPlan from "./HeaderFloorPlan";


const Modal = ({ imagesArray, imageSrc, onClose }) => {
    const [scale, setScale] = useState(1);
    const [rotation, setRotation] = useState(0);
    let [ImageIndex,setImageIndex] = useState(imageSrc)

    const handleZoomIn = () => {
        setScale(scale + 0.1);
    };

    const handleZoomOut = () => {
        if (scale > 0.2) {
            setScale(scale - 0.1);
        }
    };

    const handleRotate = () => {
        setRotation((rotation + 90) % 360);
    };

    const handlePreviousImage = () => {
 
            ImageIndex = ImageIndex - 1
            setImageIndex(ImageIndex)
 

    };

    const handleNextImage = () => {

            ImageIndex = ImageIndex + 1
            setImageIndex(ImageIndex)
 

    };
    return (
        <div className="fixed inset-0 flex items-center justify-center bg-white ">
            <div className=" max-w-full max-h-full">
            <HeaderFloorPlan className= " top-0"/>
                <button
                    className="absolute top-20 left-15 m-2 p-2 font-[40px] text-black focus:outline-none uppercase tracking-[4px]"
                    onClick={onClose}
                >
                    X close
                </button>
                <div
                    className="flex items-center justify-center h-screen"
                    onClick={onClose}
                >
                    <div
                        className="relative max-w-full max-h-full overflow-hidden"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div
                            className="absolute top-0 left-0 w-full h-full bg-black opacity-50"
                        />

                    </div>
                </div>

                <div className="absolute top-[100px] left-1/3 w-[500px] h-[400px] flex items-center justify-center transform scale-100 rotate-0 transition-all duration-300">
                    <Image
                        src={imagesArray[ImageIndex]}
                        alt=""
                        width={500}
                        height={500}
                        layout="fixed"
                        objectFit="contain"
                        className="rounded-md absolute top-1/4 left-1/3"
                        style={{ transform: `scale(${scale}) rotate(${rotation}deg)` }}
                    />
                </div>


                <div className="absolute top-1/2 right-6">
                    <button
                        className={`text-white focus:outline-none ${ImageIndex === imagesArray.length-1 ? 'hidden' : ''}`}
                        onClick={handleNextImage}
                    >
                        <Image src={SwiperRight} alt=" zoom out" width={30} height={60} />
                    </button>
                </div>

                <div className="absolute top-1/2 left-6">
                    <button
                        className={`text-white focus:outline-none ${ImageIndex === 0 ? 'hidden' : ''}`}
                        onClick={handlePreviousImage}
                    >
                        <Image src={SwiperLeft} alt=" zoom out" width={30} height={60} />
                    </button>
                </div>

                <div className="flex flex-col absolute top-[200px]  left-[200px] justify-center  px-4">

                    <button
                        className="text-white mt-5 border-b border-yellow-500 p-2 focus:outline-none"
                        onClick={handleZoomIn}
                    >
                        <Image src={ZoomIn} alt=" zoom out" width={30} height={30} />
                    </button>
                    <button
                        className="text-white mt-5 border-b border-yellow-500 p-2 focus:outline-none"
                        onClick={handleRotate}
                    >
                        <Image src={Rotate} alt=" zoom out" width={30} height={30} />
                    </button>

                    <button
                        className="text-white  border-b border-yellow-500 mt-5 p-2 bg-white  focus:outline-none"
                        onClick={handleZoomOut}
                    ><Image src={ZoomOut} alt=" zoom out" width={30} height={30} />
                        -
                    </button>

                </div>


            </div>
            <div className="absolute w-full mt-14 h-[30px] bg-black bottom-3">sdvsv

</div>
        </div>
    )
}

export default Modal
