import React from "react";
import logo from "../public/images/CompanyLogo.png";
import logo2 from "../public/images/Sotheby.png";
import Image from "next/image";
import MyProgressBar from "./MyProgressBar";

const CarouselDetails2 = ({ mydata }) => {
  // let price = 20000000
  // let id = 213456489
  // let currency ="GBP"
  // let address =" SHELTON STREET  COVENT GARDEN LONDON  WC2H UNITED KINGDOM"
  // let completion_percentage = 70

  return (
    <>
      <div className="mt-3 w-full">
        <div className="address-container flex items-center w-full">
          <div className="text-[13px] font-light text-center leading-[25px] w-full font-Lato tracking-[1.2px] uppercase  ">
            {mydata.details.address} {mydata.details.city} {mydata.details.state}
          </div>
        </div>
        <div className="flex justify-around items-center w-full  mb-3 ">
          <div className="w-[59px] h-[14px]">
            <Image src={logo} alt="Logo" width={200} height={50} />
          </div>
          <div className="flex flex-col  align-middle items-start ml-20 ">
            <div className="text-[14px] flex leading-[30px] w-auto text-left tracking-[1.2px]">
              <div>£ </div> {mydata.price}{" "}
              <div className="ml-1">{mydata.currency}</div>
            </div>
            <div className="text-[9px] leading-[12px] w-auto ml-5 text-right tracking-[1.2px]">
              #ZM{mydata.id}
            </div>
          </div>
          <div className="flex">
          <div className="w-[35px] h-[35px] ">
            <MyProgressBar value={mydata.completion_percentage} />
          </div>
          <div className=" w-[69px] h-[24px] m-4">
            <Image src={logo2} alt="Logo" width={200} height={70} />
          </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CarouselDetails2;
