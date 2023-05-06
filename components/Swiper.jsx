import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation } from "swiper";
// import 'swiper/swiper-bundle.min.css';
import "swiper/swiper.css";
import "swiper/css/bundle";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import SwiperRight from "../public/images/swiper-right.png";
import SwiperLeft from "../public/images/swiper-left.png";
import Image from "next/image";

SwiperCore.use([Navigation]);

const SwiperSlider = ({ children }) => {
  const params = {
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    slidesPerView: 2,
    spaceBetween: 1,
    centeredSlides: true,
    loop: true,
    autoplay: {
      delay: 3000,
    },
  };

  return (
    <>
    <div className="flex justify-around w-full align-center mt-3 mb-3">

        <div className="text-[30px] leading-[30px] tracking-[2px] ml-3 font-Lato"> FEATURED</div>

        <div >
        <div className="flex text-[30px] leading-[30px] tracking-[2px] ml-3 font-Lato"> VIEW ALL HOMES</div>
        </div>
    <div className=" flex justify-end" >
    <div className="w-20 ">
    <Image src={SwiperLeft}  alt={""} className="swiper-button-prev w-[20px] h-[40px] m-4" />
    </div>
    <div className="w-10 ">
    <Image src={SwiperRight} alt={""} className="swiper-button-next w-[20px] h-[40px] "/>
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
