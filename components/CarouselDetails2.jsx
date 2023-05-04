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
                <div className='address-heading text-4xl  text-center tracking-wider mx-auto md:text-6xl lg:text-6xl'>SHELTON STREET  COVENT GARDEN LONDON  WC2H UNITED KINGDOM</div>
            </div>
            <div className='flex justify-between items-center px-4 py-2 md:px-8 md:py-4 lg:px-12'>
                <div className='lg:w-1/6 sm:w-1/10 md:w-1/12 ml-1/12 md:ml-1/12 lg:w-1/10 lg:w-1/6'>
                    <Image src={logo} alt="Logo" width={200} height={100} />
                </div>
                <div className='flex flex-col justify-center align-middle items-start ml-5 md:ml-10 lg:w-1/12'>
                    <div className='text-3xl font-medium leading-none sm:text-md md:text-4xl lg:text-5xl'>£ {price} GBP</div>
                    <div className='text-sm font-medium mt-2 md:text-base lg:text-lg'>#ZM{id}</div>
                </div>
                <div className='w-1/6  md:w-1/6 ml-1/12 md:ml-1/12 lg:w-1/12 '>
                    <MyProgressBar value={50} />
                </div>
                <div className=' sm:w-1/12 md:w-1/12  md:ml-1/12 lg:w-1/10 lg:w-1/6'>
                    <Image src={logo2} alt="Logo" width={200} height={100} />
                </div>
            </div>
        </>
    )
}

export default CarouselDetails2
