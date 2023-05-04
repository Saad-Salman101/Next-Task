import React, { useState, useEffect } from "react";
import Image from "next/image";
import imageslide from "./data";
import Timer from "./Timer2";
import CarouselDetails from "./CarouselDetails2";
import LikeAndShare from "./LikeAndShare";

const BackGroundCarousel = () => {
  const [currentState, setCurrentState] = useState(0);
  const bgImageStyle = { height: "100vh" };
  const targetDate = new Date("2023-12-31T23:59:59");

  useEffect(() => {
    const timer = setTimeout(() => {
      if (currentState === 2) {
        setCurrentState(0);
      } else {
        setCurrentState(currentState + 1);
      }
    }, 5000);
    return () => clearTimeout(timer);
  }, [currentState]);

  const goToNext = (currentState) => {
    setCurrentState(currentState);
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
      <div className="description"></div>
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
                className={`w-3 h-1 bg-white mx-2 rounded-full cursor-pointer ${
                  i === currentState ? "bg-red" : ""
                }`}
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
