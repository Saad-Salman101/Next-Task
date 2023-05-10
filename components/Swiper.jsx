import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation } from "swiper";
import "swiper/swiper.css";
import "swiper/css/navigation";
import SwiperRight from "../public/images/swiper-right.png";
import SwiperLeft from "../public/images/swiper-left.png";
import Image from "next/image";

SwiperCore.use([Navigation]);

const SwiperSlider = ({ children }) => {
  const [slidesPerView, setSlidesPerView] = useState(2);
  const [params, setParams] = useState({
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    slidesPerView: slidesPerView,
    spaceBetween: 1,
    centeredSlides: true,
    loop: true,
    autoplay: {
      delay: 3000,
    },
  });

  useEffect(() => {
    const handleResize = () => {
      const windowWidth = window.innerWidth;
      if (windowWidth >= 1600) {
        setSlidesPerView(2);
      } else if (windowWidth >= 1366 &&  windowWidth >= 930) {
        setSlidesPerView(2);
      } else if (windowWidth < 930) {
        setSlidesPerView(1);
      }
    };

    window.addEventListener("resize", handleResize);

    handleResize(); // set initial value on mount

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    setParams((prevParams) => ({
      ...prevParams,
      slidesPerView,
    }));
  }, [slidesPerView]);
 console.log(window.innerWidth)
  return (
    <>
      <div className="flex justify-around w-full align-center mt-3 mb-3">
        <div className="text-[30px] leading-[30px] tracking-[2px] ml-3 font-Lato">
          {" "}
          FEATURED
        </div>

        <div className="flex text-[30px] leading-[30px] tracking-[2px] ml-3 font-Lato ">
          {" "}
          VIEW ALL HOMES
        </div>

        <div className=" flex justify-end ">
          <div className="w-20 ">
            <Image
              src={SwiperLeft}
              alt={""}
              className="swiper-button-prev w-[20px] h-[40px] m-4"
            />
          </div>
          <div className="w-10 ">
            <Image
              src={SwiperRight}
              alt={""}
              className="swiper-button-next w-[20px] h-[40px] "
            />
          </div>
        </div>
      </div>
      <Swiper {...params}>
        {children.map((child, i) => (
          <SwiperSlide key={i}>{child}</SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default SwiperSlider;
