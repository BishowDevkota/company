import React from 'react'
import "../../style/AboutCompany/AboutCompany.css"
import { Link } from 'react-router-dom'
const AboutCompany = () => {
  return (
<div className="about-company">
    <div className="about-company-heading">
<h1>About Us</h1>
    </div>
    <div className="relative">
      <Link to="/about">
   <div className="hover-card-image">
        <div className="image-1 big-image">

        </div>
        <div className="image-2 big-image">
    
        </div>
        <div className="image-3 big-image">
    
        </div>
        <div className="image-4 big-image">
    
        </div>
        
    <div className="image-5 big-image">

    </div>
    <div className="image-6 big-image">

    </div>
    <div className="image-7 big-image">

    </div>
    <div className="image-8 big-image">

    </div>
</div>
</Link>
{/* <div className="company-name">
<h1>Big Sky Treks</h1>
</div> */}
</div>
</div>

  )
}

export default AboutCompany