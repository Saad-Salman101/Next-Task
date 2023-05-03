import React, { useState, useEffect } from "react";
import Image from "next/image";
import imageslide from "./data";
import Timer from "./Timer";
import CarouselDetails from "./CarouselDetails";
import { FaHeart, FaShare } from "react-icons/fa";

const BackGround = () => {
  const [currentState, setCurrentState] = useState(0);
  const bgImageStyle = { height: "100vh" };
  const targetDate = new Date("2023-12-31T23:59:59");
  const [isHeartClicked, setIsHeartClicked] = useState(false);
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
  const handleHeartClick = () => {
    setIsHeartClicked(!isHeartClicked);
  };

  return (
    <div className="container-style" style={{width:"454px"}}>
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
          style={{ position: "relative" }}
        />
      </div>
      <div className="description"></div>
      <div>
        <h1
          style={{
            color: "white",
            fontSize: "10vh",
            position: "absolute",
            top: "30vh",
            right: "10vh",
          }}
        >
          <div
            style={{
              display: "flex",
              width: "100%",
              justifyContent: "flex-end",
              zIndex: "10",
            }}
          >
            <button
              onClick={handleHeartClick}
              style={{
                background: "transparent",
                border: "none",
                cursor: "pointer",
                margin: "0 20 0 20",
              }}
            >
              <FaHeart
                size={40}
                style={{ color: isHeartClicked ? "red" : "rgba(250,0,0,0.45)" }}
              />
            </button>
            <button
              style={{
                background: "transparent",
                border: "none",
                cursor: "pointer",
              }}
            >
              <FaShare
                size={40}
                style={{ color: "black", margin: "0 20 0 20" }}
              />
            </button>
          </div>
        </h1>

        <div
          style={{
            color: "white",
            fontSize: "10vh",
            position: "absolute",
            top: "10px",
            right: "60vh",
          }}
        >
          <Timer targetDate={targetDate} />
        </div>

        <div
          style={{
            color: "white",
            fontSize: "1vh",
            position: "absolute",
            bottom: "10px",
            width:"73",
            height:"23",
          }}
        >
          <CarouselDetails />
          <div className="carousel-boult">
            {imageslide.map((imageslide, currentState) => (
              <span
                key={currentState}
                onClick={() => goToNext(currentState)}
                style={{
                  width: "45px",
                  height: "5px",
                  backgroundColor: "rgb(179, 178, 176)",
                  color: "rgb(179, 178, 176)",
                  marginLeft: "10px",
                  borderRadius: "10px",
                  cursor: "pointer",
                  boxshadow: "3px 2px 2px rgba(73, 72, 72, 0.338)",
                }}
              >
                11111
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BackGround;
