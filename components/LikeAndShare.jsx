import React, { useState} from "react";
import { FaHeart } from "react-icons/fa";
import Shareimg from '../public/images/Share-icon.png'
import Image from 'next/image';


const LikeAndShare = () => {

    const [isHeartClicked, setIsHeartClicked] = useState(false);
    const handleHeartClick = () => {
        setIsHeartClicked(!isHeartClicked);
      };

  return (
    <>
            <div className="flex justify-end  absolute mt-7  w-full">
          <div className=" z-10 mr-0  ">
          <button >
              <Image src={Shareimg} alt="Logo" width={23} height={23} />
            </button>
            <button
              onClick={handleHeartClick}
            >
              <FaHeart
                className="text-red w-[73px] h-[23px] m-0"
                style={{ color: isHeartClicked ? "red" : "rgba(250,0,0,0.45)" }}
              />
            </button>
          </div>
        </div>
    </>
  )
}

export default LikeAndShare
