import React from 'react'
import '../style/CompanyInfo.css'
const CompanyInfo = () => {
  return (
    <div className='company-info'>
        <div className="image">
            <img src="/Image/Nav/big-sky-treks-logo.jpg" alt="" />
        </div>
        <div className="flex">
            <div className="location"><b>Location:</b> <a href="https://www.google.com/maps/place/Big+Sky+Treks,+Nepal/@28.2073177,83.9647211,16z/data=!4m6!3m5!1s0x3995951db872613f:0xa95a7da2c9736193!8m2!3d28.208925!4d83.965397!16s%2Fg%2F11c60cl5yn?entry=ttu" target="_blank"> Lakeside-6,Pokhara Nepal</a>
            </div>
        <div className="phone"><b>Phone:</b><a href="tel:+9779846139572"> +9779846139572</a></div>
        <div className="email"><b>Email:</b><a href="mailto:bigskytreks@gmail"> bigskytreks@gmail</a></div>
        <div className="whatshapp"><b>Whatsapp:</b><a href="https://api.whatsapp.com/send/?phone=%2B9779846139572&text&type=phone_number&app_absent=0" target="_blank"> +9779846139572</a></div>
        </div>
    </div>
  )
}

export default CompanyInfo