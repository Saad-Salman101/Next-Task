import React from "react";
import SwiperSlider from "../components/Swiper";
import BackGroundCarousel from "./BackGroundCarousel";
import data from './zp_api_listing_data.json'




const Home = () => {
  
  return (
    <div>
      <SwiperSlider>
        {data.listing.map((mydata, id) => (

          <BackGroundCarousel key={id} mydata={mydata}/>
        ))}
      </SwiperSlider>
    </div>
  );
};

export default Home;
