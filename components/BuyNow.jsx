import React from 'react'

const BuyNow = () => {
  let price =20000000
  let id = 213456489
  return (
    <div style={{display:"flex", justifyContent:"space-between",alignItems:"center",marginTop:'5vh', background:"black", borderRadius: "50px", height:"10vw" }}>
      <h1 style={{ fontSize: '3rem', marginLeft: '15rem', color:"white" }}>£  {price} GBP</h1>
      <span style={{ flexDirection:'column', marginRight:0}}>
      <h1  style={{ fontSize: '3rem', marginRight:'10rem', color:"white" }}>BUY ENTRY NOW</h1>
      <h3  style={{ fontSize: '2rem', marginRight: 0, color:"white" }}>#ZM{id}</h3>
      </span>
    </div>
  )
}

export default BuyNow
