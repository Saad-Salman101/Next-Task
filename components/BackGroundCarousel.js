import React, { useState, useEffect } from "react";
import Image from "next/image";
import imageslide from "./data";
import Timer from "./Timer2";
import CarouselDetails from "./CarouselDetails2";
import LikeAndShare from "./LikeAndShare";
import RightArrow from '../public/images/RigtArrow.png';
import LeftArrow from  '../public/images/LeftArrow.png';

const BackGroundCarousel = () => {
  const [currentState, setCurrentState] = useState(0);
  const bgImageStyle = { height: "100vh" };
  const targetDate = new Date("2023-12-31T23:59:59");

  useEffect(() => {
    const timer = setTimeout(() => {
      if (currentState === imageslide.length - 1) {
        setCurrentState(0);
      } else {
        setCurrentState(currentState + 1);
      }
    }, 5000);
    return () => clearTimeout(timer);
  }, [currentState]);

  const goToNext = (dir) => {
    if (dir === "next") {
      setCurrentState((currentState + 1) % imageslide.length);
    } else {
      setCurrentState(currentState === 0 ? imageslide.length - 1 : currentState - 1);
    }
  };


  return (
    <div className="container-style h-[547px] w-[454px] relative ">
      <div 
        style={{
          ...bgImageStyle,
        }} 
        // className="h-[547px] w-[454px]"
      >
        <Image
          src={imageslide[currentState].url}
          alt={imageslide[currentState].title}
          layout="responsive"
          objectFit="cover"
          objectPosition="center"
          className="rounded-3xl"
          height={547}
          width={460}
        />
      </div>
      <div className="description w-full flex justify-between absolute top-[250px]">
        <Image src={LeftArrow} alt="left Arrow " className="cursor-pointer m-4" onClick={() => goToNext("prev")} />
        <Image src={RightArrow} alt="Right Arrow" className="cursor-pointer m-4" onClick={() => goToNext("next")} />
      </div>
      <div className="w-full ">


        <div className="text-white absolute top-5 w-full">
          <Timer targetDate={targetDate} />
          <LikeAndShare/>
        </div>

        <div className="text-white text-center absolute bottom-2 w-auto h-auto">
        <div className="carousel-boult flex justify-center">
            {imageslide.map((imageslide, i) => (
              <div
                key={i}
                onClick={() => goToNext(i)}
                className={`w-3 h-1 mx-2 rounded-full cursor-pointer ${i === currentState ? "bg-[#BE9F56]" : "bg-white"}`}
              ></div>
            ))}
          </div>
          <CarouselDetails />
        </div>
      </div>
    </div>
  );
};

export default BackGroundCarousel;
