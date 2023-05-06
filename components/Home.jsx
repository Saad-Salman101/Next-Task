import React from "react";
import SwiperSlider from "../components/Swiper";
// import Image from "next/image";
import BackGroundCarousel from "./BackGroundCarousel";
// import BuyNow2 from "./BuyNow2";
import data from './zp_api_listing_data.json'



// const images = [
//   "/images/photo1.jpg",
//   "/images/photo3.jpg",
//   "/images/photo3.jpg",
//   "/images/photo3.jpg",
//   "/images/photo3.jpg",
//   "/images/photo3.jpg",
//   "/images/photo4.jpg",
// ];

const Home = () => {
  
  // let mydata = {
  //   price:20000000,
  //   id:213456489,
  //   currency:"PKR",
  //   completion_percentage: 70,
  //   details:{
  //     address:"SHELTON STREET  COVENT GARDEN LONDON  WC2H UNITED KINGDOM",
  //     images:"https://firebasestorage.googleapis.com/v0/b/zimo-b9759.appspot.com/o/zimo%2Fcategories%2F1671538553791.jpg?alt=media&token=9a090ac9-2faa-4293-922f-826935791fc4,https://firebasestorage.googleapis.com/v0/b/zimo-b9759.appspot.com/o/zimo%2Fcategories%2F1671538553080.jpg?alt=media&token=4549aa63-f477-4ed2-b5d7-129bdcc75088,https://firebasestorage.googleapis.com/v0/b/zimo-b9759.appspot.com/o/zimo%2Fcategories%2F1671538555609.jpg?alt=media&token=c50f3c4c-60a3-4682-bfdb-50056d5cfb79,https://firebasestorage.googleapis.com/v0/b/zimo-b9759.appspot.com/o/zimo%2Fcategories%2F1671538560638.jpg?alt=media&token=897be5bb-016b-4ba0-93a6-8ca47f41f082,https://firebasestorage.googleapis.com/v0/b/zimo-b9759.appspot.com/o/zimo%2Fcategories%2F1671538552696.jpg?alt=media&token=29d9bab8-ae65-4afe-a667-5384ddac8fd7,https://firebasestorage.googleapis.com/v0/b/zimo-b9759.appspot.com/o/zimo%2Fcategories%2F1671538557993.jpg?alt=media&token=de21bdfd-39fd-4b41-a1f1-ee1f1151be29,https://firebasestorage.googleapis.com/v0/b/zimo-b9759.appspot.com/o/zimo%2Fcategories%2F1671538554514.jpg?alt=media&token=dd78c516-b104-4393-9e23-ff4368983cbc"

  //   }
  // };

// console.log(data.listing[0].details.address)
// console.log(data.listing[0].expiry)
// console.log(data.listing[0].currency)
// console.log(data.listing[0].price)
// console.log(data.listing[0].id)
// console.log(data.listing[0].completion_percentage)
// console.log(data.listing[0].details.images)

  return (
    <div>
      <SwiperSlider>
        {data.listing.map((mydata, id) => (
          // <Image
          //   key={i}
          //   src={image}
          //   alt={`Slide ${i}`}
          //   layout="responsive"
          //   className="w-full h-auto object-cover"
          //   height={547}
          //   width={460}
          // />
          <BackGroundCarousel key={id} mydata={mydata}/>
        ))}
      </SwiperSlider>

      {/* <BuyNow2 mydata={mydata} /> */}
    </div>
  );
};

export default Home;
