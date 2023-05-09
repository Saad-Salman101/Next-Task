import React from 'react'

const BuyNow2 = ({mydata}) => {

  return (

    <div className="flex  justify-between mt-2 bg-black rounded-3xl w-[454px] h-[58px] p-2 cursor-pointer">
      <div className="text-[19px] leading-[26px] ml-3 font-Lato  text-white tracking-[1.2px]">{`£ ${mydata.price} ${mydata.currency}`}</div>

        <div className='flex-col text-right mr-2 '>
        <div className="text-[19px] leading-[26px]  font-Lato  text-white tracking-[1.2px]">BUY ENTRY NOW</div>
        <div className="text-[9px] leading-[12px] text-right font-Lato text-white tracking-[1.2px]">{`#ZM${mydata.id}`}</div>

      </div>
    </div>

  )
}

export default BuyNow2


