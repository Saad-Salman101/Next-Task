import React from 'react'

const BuyNow = () => {
  let price =20000000
  let id = 213456489
  return (
    <div className="flex  justify-between mt-2 bg-black rounded-3xl w-[454px] h-[58px] p-2">
      <div className="text-[19px] leading-[26px] ml-3 font-Lato  text-white tracking-[1.2px]">{`£ ${price} GBP`}</div>

        <div className='flex-col text-right mr-2 '>
        <div className="text-[19px] leading-[26px]  font-Lato  text-white tracking-[1.2px]">BUY ENTRY NOW</div>
        <div className="text-[9px] leading-[12px] text-right font-Lato text-white tracking-[1.2px]">{`#ZM${id}`}</div>

      </div>
    </div>
  )
}

export default BuyNow
