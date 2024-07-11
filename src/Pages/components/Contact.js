import React from 'react'
import Subhero from '../../Components/About/components/Subhero'
import SideBar from '../../Components/Contact/Components/SideBar'
import ContactUS from '../../Data/Conatact/Contact.json'
import ContactForm from '../../Components/Trekking/components/ContactForm'
import '../style/Contact.css'
const Contact = () => {
  return (<>
    <Subhero title={ContactUS.subHero.heading} image={ContactUS.subHero.image}/>
    <div className="main-content">
   <div className="sub-main">
  <h1 className="heading">{ContactUS.heading}</h1>
  <div className="top">
  <div className="left">
  <SideBar/>
  </div>
  <div className="right">
  <ContactForm/>
  </div>
  </div>
  <div className="buttom">
  <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8468.814340191955!2d83.96203617476074!3d28.20783286620921!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3995951db872613f%3A0xa95a7da2c9736193!2sBig%20Sky%20Treks%2C%20Nepal!5e0!3m2!1sen!2snp!4v1719329220601!5m2!1sen!2snp" width="100%" height="500" style={{border:"0"}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
  </div>
   </div>
    </div>
  </>
  )
}

export default Contact