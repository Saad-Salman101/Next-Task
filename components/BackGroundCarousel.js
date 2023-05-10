import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import CryptoJS from "crypto-js";
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


  const encryptedId = CryptoJS.AES.encrypt(mydata.id.toString(), 'secret').toString();
const encodedId = encodeURIComponent(encryptedId);
  const imagesArray = mydata.details.images.split(",");

  return (
    
      
      <>
        <div className="container-style h-[547px] w-[454px] relative ">
        <Link href={`/photograghy/${encodedId}`} passHref>
        <a>
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
          </a>
          </Link>
          <div className="description w-full flex justify-between absolute top-[250px]">
            <div className="ml-8 w-12 ">
              <Image
                src={LeftArrow}
                alt="left Arrow "
                className="cursor-pointer "
                onClick={() => goToNext("prev")}
              />
            </div>
            <div className=" w-12">
              <Image
                src={RightArrow}
                alt="Right Arrow"
                className="cursor-pointer"
                onClick={() => goToNext("next")}
              />
            </div>
          </div>
          <div className="w-full mt-5">
            <div className="text-white absolute top-4 w-full">
              <Timer targetDate={targetDate} />
              <LikeAndShare />
            </div>

            <div className="text-white text-center absolute bottom-0 w-full h-auto ">
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
              <div className="mt-3">
                <CarouselDetails mydata={mydata} />
              </div>
            </div>
          </div>
        </div>
        <div>
          <BuyNow2 mydata={mydata} />
        </div>
    </>

  );
};

export default BackGroundCarousel;
