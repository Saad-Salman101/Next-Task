import React, { useState} from "react";
import { FaHeart, FaShare } from "react-icons/fa";

const LikeAndShare = () => {

    const [isHeartClicked, setIsHeartClicked] = useState(false);
    const handleHeartClick = () => {
        setIsHeartClicked(!isHeartClicked);
      };

  return (
    <>
            <div className="text-white text-10xl absolute top-1px  w-full">
          <div className="flex justify-end z-10">
            <button
              onClick={handleHeartClick}
              className="bg-transparent border-none cursor-pointer m-2"
            >
              <FaHeart
                size={40}
                style={{ color: isHeartClicked ? "red" : "rgba(250,0,0,0.45)" }}
              />
            </button>
            <button className="bg-transparent border-none cursor-pointer m-2">
              <FaShare size={40} className="text-black m-2" />
            </button>
          </div>
        </div>
    </>
  )
}

export default LikeAndShare
