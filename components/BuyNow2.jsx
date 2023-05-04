import React from 'react'

const BuyNow = () => {
  let price =20000000
  let id = 213456489
  return (
    <div className="flex flex-col md:flex-row justify-between items-center mt-10 bg-black rounded-3xl md:rounded-5xl py-5 md:py-10">
      <h1 className="text-3xl md:text-4xl lg:text-5xl text-white ml-5 md:ml-0 md:mr-10 lg:mr-20">{`£ ${price} GBP`}</h1>
      <div className="flex flex-col items-center md:flex-row md:items-start">
        <div className='flex-col'>
        <h1 className="text-3xl md:text-4xl lg:text-5xl text-white md:mr-10 lg:mr-20">BUY ENTRY NOW</h1>
        <h3 className="text-sm font-medium ml-32 text-white">{`#ZM${id}`}</h3>
        </div>
      </div>
    </div>
  )
}

export default BuyNow
