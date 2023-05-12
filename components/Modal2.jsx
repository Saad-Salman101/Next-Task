import React, { useState } from "react";
import Image from "next/image";

const Modal = ({ imagesArray, imageSrc, onClose }) => {
    const [scale, setScale] = useState(1);
    const [rotation, setRotation] = useState(0);

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
        if (imageSrc > 0) {
            // Display the previous image
        }
    };

    const handleNextImage = () => {
        if (imageSrc < imagesArray.length - 1) {
            // Display the next image
        }
    };
console.log(imagesArray[imageSrc])
    return (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50">
            <div className="relative max-w-full max-h-full">
                <button
                    className="absolute top-0 right-0 m-2 p-2 rounded-full bg-gray-800 bg-opacity-75 text-white hover:bg-gray-700 focus:outline-none"
                    onClick={onClose}
                >
                    X
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
                        <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center transform scale-100 rotate-0 transition-all duration-300">
                            <Image
                                src={imagesArray[imageSrc]}
                                alt=""
                                width={1000}
                                height={1000}
                                layout="responsive"
                                objectFit="contain"
                                className="rounded-md"
                                style={{ transform: `scale(${scale}) rotate(${rotation}deg)` }}
                            />
                        </div>
                        <div className="absolute top-0 right-0 flex flex-col items-center justify-center m-2 space-y-2">
                            <button
                                onClick={handleZoomIn}
                                className="p-2 bg-gray-800 bg-opacity-75 text-white rounded-full hover:bg-gray-700 focus:outline-none"
                            >
                                +
                            </button>
                            <button
                                onClick={handleZoomOut}
                                className="p-2 bg-gray-800 bg-opacity-75 text-white rounded-full hover:bg-gray-700 focus:outline-none"
                            >
                                -
                            </button>
                            <button
                                onClick={handleRotate}
                                className="p-2 bg-gray-800 bg-opacity-75 text-white rounded-full hover:bg-gray-700 focus:outline-none"
                            >
                                ↺
                            </button>
                            <div className="flex space-x-2">
                                <button
                                    onClick={handlePreviousImage}
                                    className={`p-2 bg-gray-800 bg-opacity-75 text-white rounded-full hover:bg-gray-700 focus:outline-none ${imageSrc === 0 ? "opacity-50 cursor-not-allowed" : ""}`}
                                    disabled={imageSrc === 0}
                                >
                                    ←
                                </button>
                                <button
                                    onClick={handleNextImage}
                                    className={`p-2 bg-gray-800 bg-opacity-75 text-white rounded-full hover:bg-gray-700 focus:outline-none`}
                                    style={{ transform: `scale(${scale}) rotate(${rotation}deg)` }}
                                >
                                    →
                                </button>

                            </div>
                            <div className="absolute top-1/2 -mt-6 left-0 flex justify-between w-full px-4">
                                <button
                                    className="text-white rounded-full bg-gray-800 bg-opacity-75 hover:bg-gray-700 focus:outline-none"
                                    onClick={handlePreviousImage}
                                >
                                    &lt;
                                </button>
                                <button
                                    className="text-white rounded-full bg-gray-800 bg-opacity-75 hover:bg-gray-700 focus:outline-none"
                                    onClick={handleRotate}
                                >
                                    Rotate
                                </button>
                                <button
                                    className="text-white rounded-full bg-gray-800 bg-opacity-75 hover:bg-gray-700 focus:outline-none"
                                    onClick={handleZoomIn}
                                >
                                    +
                                </button>
                                <button
                                    className="text-white rounded-full bg-gray-800 bg-opacity-75 hover:bg-gray-700 focus:outline-none"
                                    onClick={handleZoomOut}
                                >
                                    -
                                </button>
                                <button
                                    className="text-white rounded-full bg-gray-800 bg-opacity-75 hover:bg-gray-700 focus:outline-none"
                                    onClick={handleNextImage}
                                >
                                    &gt;
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Modal
