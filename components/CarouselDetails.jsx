import React from 'react'
import logo from '../public/images/CompanyLogo.png'
import logo2 from '../public/images/Sotheby.png'
import Image from 'next/image';
import MyProgressBar from './MyProgressBar';

const CarouselDetails = () => {
    let price =20000000
    let id = 213456489
  return (
  <>
        <div className='address-container' style={{ display: "flex", justifyContent: "center", alignItems: "center",width:"374px", height:"42px" }}>
        <h3 className='address-heading' style={{ fontSize: '4rem', fontFamily: 'Lato, sans-serif',textAlign:"center", wordSpacing:"2rem" }}>SHELTON STREET  COVENT GARDEN LONDON  WC2H UNITED KINGDOM</h3>
        </div>
    <div style={{display:"flex", justifyContent:"space-evenly", alignContent:'center'}}>


            <span><Image src={logo} alt="Logo" width={200} height={100} /></span>

            <span style={{marginLeft: "5rem" }}>
            <h1 style={{ fontSize: '3rem', marginLeft: '0', fontFamily: 'Lato, sans-serif' }}>£ {price} GBP</h1>
            <h3 style={{ fontSize: '1rem', marginLeft: '5rem', fontFamily: 'Lato, sans-serif',gap:"1rem"}}>#ZM{id}</h3>
            </span>

            <span style={{width:"5vw", marginLeft: "2rem"}}><MyProgressBar value={50} /></span>

            <span><Image src={logo2} alt="Logo" width={200} height={100} /></span>

    </div>

    </>
  )
}

export default CarouselDetails
