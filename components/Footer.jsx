import React from "react";
import Timer from "./SmallTimmer";

const Footer = ({ myprops }) => {
  // let myprops = {
  //     id: 12331,
  //     ticket_id: 5,
  //     ticketprice: 30.0,
  //     expiry: "2023-06-27 00:00:00",
  // };
  const targetDate = new Date(myprops.expiry);
  return (
    <>
      <div className="mt-12">
        <div className="w-full flex justify-center items-center">
          <div className="w-[70%] border-t-2 border-custom-golden text-white">
            .
          </div>
        </div>
        <div className="flex justify-between mt-5 ">
          <div className="ml-10 text-lg">
            <div className="text-gray-400  tracking-[3px]">#ZM{myprops.id}</div>
            <div className="text-gray-400 tracking-[3px]">{myprops.id}</div>
          </div>
          <div className="flex-col justify-end">
            <div className="flex  uppercase mr-4">
              <div>
                <div className="flex flex-col bg-black p-2 pl-8 pr-8 justify-around rounded-md">
                  <div className="text-white text-lg">
                    {myprops.ticket_id} ticket(s)
                  </div>
                  <div className="text-white m-4 text-lg font-bold">
                    €{" "}
                    {myprops.ticketprice == null ? "Null" : myprops.ticketprice}
                  </div>
                  <div className="text-white text-sm text-center">
                    #ZM{myprops.id}
                  </div>
                </div>
                <div className="bg-black text-center text-white mt-2 p-1 rounded-md uppercase">
                  <button> BUY NOW</button>
                </div>
              </div>

              <div className="flex flex-col ml-3 bg-black justify-between text-xl mr-0 p-2 rounded-md">
                <div className="text-white ">
                  {" "}
                  <button>+</button>
                </div>
                <div className="text-white">
                  {" "}
                  <button>-</button>
                </div>
              </div>
            </div>
            <div>
              <Timer targetDate={targetDate} />
            </div>
            <div>
              <button className="uppercase text-white bg-black mt-3 p-3 pt-6 pb-6 pl-8 pr-8 ml-12 rounded-md">
                enter <br /> now
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
