import React, { useState, useEffect } from "react";
import Image from "next/image";
import imageslide from "./data";
import Timer from "./Timer2";
import CarouselDetails from "./CarouselDetails2";
import LikeAndShare from "./LikeAndShare";

const BackGroundCarousel = () => {
  const [currentState, setCurrentState] = useState(0);
  const bgImageStyle = { height: "100vh" };
  const targetDate = new Date("2022-12-31T23:59:59");

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
    <div className="container-style w-full">
      <div
        style={{
          ...bgImageStyle,
        }}
      >
        <Image
          src={imageslide[currentState].url}
          alt={imageslide[currentState].title}
          layout="fill"
          objectFit="cover"
          objectPosition="center"
          className="relative"
        />
      </div>
      <div className="description"></div>
      <div className="w-full">


        <div className="text-white text-10xl absolute top-0 w-full">
          <Timer targetDate={targetDate} />
          <LikeAndShare/>
        </div>

        <div className="text-white text-center text-lg absolute bottom-0 w-auto h-auto">
          <CarouselDetails />
          <div className="carousel-boult flex">
            {imageslide.map((imageslide, i) => (
              <span
                key={i}
                onClick={() => goToNext(i)}
                className={`w-10 h-1 bg-gray-400 mx-2 rounded-full cursor-pointer ${
                  i === currentState ? "bg-black" : ""
                }`}
              ></span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BackGroundCarousel;
