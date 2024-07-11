import React from 'react'
import Subhero from '../../Components/About/components/Subhero'
import '../style/About.css'
import AboutBST from '../../Components/About/components/AboutBST'
import KnowMore from '../../Components/About/components/KnowMore'
import OurTeam from '../../Components/About/components/OurTeam'
import WhyBookWithUs from '../../Components/About/components/WhyBookWithUs'
import OurTermsAndCondition from '../../Components/About/components/OurTermsAndCondition'
import Team from '../../Data/About/OurTeam.json'
import WhyUs from '../../Data/About/WhyBookWithUs.json'
const About = () => {
  let hello="hi"
  return (
    <div className='about-us'>
<Subhero image={"https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg"} title="About Us"/>
<div className="main-content">
  <div className="sub-main">


  <div className="about-bst">
  
    <AboutBST/>
  
    <KnowMore/>
  </div>
<div className="our-teams">
  <h1 className="heading">Our Team</h1>
  <div className="card-wrapper">
    {
      Team.map((key,index)=>{
        return <OurTeam image={key.image} name={key.name} post={key.post} description={key.discription}/>
      })
    }
  </div>
</div>
  <div className="why-book-with-us">
    <h1 className="heading">Why Book With Us</h1>
    {
       WhyUs.map((key ,index)=>{
        return <WhyBookWithUs heading={key.heading} paragraph={key.discription}/>
       })
      }
    
  </div>
  <div className="our-terms-and-condition">
    <OurTermsAndCondition/>
  </div>
</div>
</div>
    </div>
  )
}

export default About