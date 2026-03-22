import React from 'react'
import './Campus.css'
import pic1 from '../../assets/gallery-1.png'
import pic2 from '../../assets/gallery-2.png'
import pic3 from '../../assets/gallery-3.png'
import pic4 from '../../assets/gallery-4.png'
import arrow from '../../assets/white-arrow.png'

export const Campus = () => {
  return (
    <div className='campus'>
      <div className="gallery">
        <img src={pic1} alt="" />
        <img src={pic2} alt="" />
        <img src={pic3} alt="" />
        <img src={pic4} alt="" />
      </div>
      <button className='btn dark-btn'>See More Here <img src={arrow} alt="" /></button>
    </div>
  )
}
