import React, { useState, useEffect } from "react";
import Image from "next/image";
import imageslide from "./data";
import Timer from "./Timer2";
import CarouselDetails from "./CarouselDetails2";
import LikeAndShare from "./LikeAndShare";
import RightArrow from "../public/images/RigtArrow.png";
import LeftArrow from "../public/images/LeftArrow.png";
import BuyNow2 from "./BuyNow2";
import Notfound from "../public/images/not-found.jpg";

const BackGroundCarousel = ({ mydata }) => {
  const [currentState, setCurrentState] = useState(0);
  const bgImageStyle = { height: "100vh" };
  const targetDate = new Date(mydata.expiry);

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
      setCurrentState(
        currentState === 0 ? imageslide.length - 1 : currentState - 1
      );
    }
  };

  const imagesArray = mydata.details.images.split(",");
  // console.log(imagesArray);
  return (
    <>
      <div className="container-style h-[547px] w-[454px] relative ">
        <div
          style={{
            ...bgImageStyle,
          }}
        >
          {imagesArray[currentState] ? (
            <Image
              src={imagesArray[currentState]}
              alt={"slider image"}
              layout="responsive"
              objectFit="cover"
              objectPosition="center"
              className="rounded-3xl"
              height={547}
              width={460}
            />
          ) : (
            <Image
              src={Notfound}
              alt="not found"
              className="rounded-3xl"
              height={547}
              width={460}
            />
          )}
        </div>
        <div className="description w-full flex justify-between absolute top-[250px]">
          <div className=" w-10">
            <Image
              src={LeftArrow}
              alt="left Arrow "
              className="cursor-pointer "
              onClick={() => goToNext("prev")}
            />
          </div>
          <div className=" w-10">
            <Image
              src={RightArrow}
              alt="Right Arrow"
              className="cursor-pointer "
              onClick={() => goToNext("next")}
            />
          </div>
        </div>
        <div className="w-full ">
          <div className="text-white absolute top-5 w-full">
            <Timer targetDate={targetDate} />
            <LikeAndShare />
          </div>

          <div className="text-white text-center absolute bottom-2 w-auto h-auto">
            <div className="carousel-boult flex justify-center">
              {imageslide.map((imageslide, i) => (
                <div
                  key={i}
                  onClick={() => goToNext(i)}
                  className={`w-3 h-1 mx-2 rounded-full cursor-pointer ${
                    i === currentState ? "bg-[#BE9F56]" : "bg-white"
                  }`}
                ></div>
              ))}
            </div>
            <CarouselDetails mydata={mydata} />
          </div>
        </div>
      </div>
      <BuyNow2 mydata={mydata} />
    </>
  );
};

export default BackGroundCarousel;
