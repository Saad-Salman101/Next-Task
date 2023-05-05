import React from 'react'
import logo from '../public/images/CompanyLogo.png'
import logo2 from '../public/images/Sotheby.png'
import Image from 'next/image';
import MyProgressBar from './MyProgressBar';

const CarouselDetails2 = () => {
    let price = 20000000
    let id = 213456489
    return (
        < >
            <div className='address-container flex items-center w-full'>
                <div className='text-[13px] font-light leading-[25px] w-auto font-Lato tracking-[1.2px]' >SHELTON STREET  COVENT GARDEN LONDON  WC2H UNITED KINGDOM</div>
            </div>
            <div className='flex justify-around items-center w-full  mb-3 '>
                <div className='w-[59px] h-[14px]'>
                    <Image src={logo} alt="Logo" width={200} height={100} />
                </div>
                <div className='flex flex-col  align-middle items-start '>
                    <div className='text-[14px] flex leading-[30px] w-auto text-left tracking-[1.2px]'><div>£ </div> {price} <div className='ml-1'>GBP</div></div>
                    <div className='text-[9px] leading-[12px] w-auto ml-5 text-right tracking-[1.2px]'>#ZM{id}</div>
                </div>
                <div className='w-[35px] h-[35px] '>
                    <MyProgressBar value={50} />
                </div>
                <div className=' w-[69px] h-[24px]'>
                    <Image src={logo2} alt="Logo" width={200} height={100} />
                </div>
            </div>
        </>
    )
}

export default CarouselDetails2
