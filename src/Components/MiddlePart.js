import React from "react";
import "./style.css";
import ImageOne from '../assets/Rectangle.svg'
import upflight from '../assets/Frame1.svg'
import zigzak from '../assets/Vector.svg'
import flag from '../assets/Frame.svg'

const MiddlePart = () => {
  return (
    <div className="main_container middlepart_main_container">
      <p className="text">
        Skyrocket Your Hotel Bookings with Our Proven Marketing SYSTEMS - Get
        50+ Direct Bookings in 90 Days!
      </p>
      <img src={upflight} alt= "upflight" className="upflight"/>
      <img src={zigzak} alt= "zigzak" className="zigzag"/>
      <img src={flag} alt= "upflight" className="flag"/>

      <button className="schedule_btn unlock_btn">Unlock my booking boost now</button>

      <div className="image_section">
      <img src={ImageOne} alt="imageone" />
      </div>
      <div className="footer_section">

      </div>
    </div>
  );
};

export default MiddlePart;
