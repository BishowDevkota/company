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
import { Helmet } from 'react-helmet'
const About = () => {
  let hello="hi"
  return (<>
    <Helmet>

      <meta charSet="utf-8" />
      <link rel="icon" href="/Image/logo.png" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      
      <meta name="description" content="Learn more about Big Sky Treks, a leading trekking company in Nepal. Discover our mission, values, and the team dedicated to providing unforgettable trekking, traveling tours, and hiking adventures." />
      <meta name="keywords" content="about us, Big Sky Treks, trekking company, Nepal, adventure, team, mission, values" />
      <meta name="author" content="Big Sky Treks" />
      <meta name="robots" content="index, follow" />
      <meta name="google-site-verification" content="vwQgWwqSFdFeLag8zLwYL4jNhLrXXo-rSy5x35XH110" />
      
      {/* Open Graph Meta Tags */}
      <meta property="og:title" content="About Us - Big Sky Treks" />
      <meta property="og:description" content="Learn more about Big Sky Treks, a leading trekking company in Nepal. Discover our mission, values, and the team dedicated to providing unforgettable trekking, traveling tours, and hiking adventures." />
      <meta property="og:image" content="%PUBLIC_URL%/images/about-us.jpg" />
      <meta property="og:url" content="https://www.bigskytreksnepal.com/about" />
      <meta property="og:type" content="website" />
      
      {/* Twitter Card Meta Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="About Us - Big Sky Treks" />
      <meta name="twitter:description" content="Learn more about Big Sky Treks, a leading trekking company in Nepal. Discover our mission, values, and the team dedicated to providing unforgettable trekking, traveling tours, and hiking adventures." />
      <meta name="twitter:image" content="%PUBLIC_URL%/images/about-us.jpg" />
      <meta name="twitter:site" content="@BigSkyTreks" />
      
      {/* Canonical Link */}
      <link rel="canonical" href="https://www.bigskytreksnepal.com/about" />
  
      {/* Structured Data */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{
        __html: `
          {
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Big Sky Treks",
            "description": "Learn more about Big Sky Treks, a leading trekking company in Nepal. Discover our mission, values, and the team dedicated to providing unforgettable trekking, traveling tours, and hiking adventures.",
            "url": "https://www.bigskytreksnepal.com/about",
            "logo": "${process.env.PUBLIC_URL}/images/logo.png",
            "contactPoint": {
              "@type": "ContactPoint",
              "contactType": "Customer Service",
              "telephone": "+977-123456789",
              "email": "info@bigskytreksnepal.com"
            },
            "sameAs": [
              "https://www.facebook.com/bigskytreks",
              "https://www.instagram.com/bigskytreks",
              "https://twitter.com/bigskytreks"
            ],
            "address": {
              "@type": "PostalAddress",
              "addressCountry": "NP"
            }
          }
        `,
      }} />
      
      <link rel="apple-touch-icon" href="%PUBLIC_URL%/logo192.png" />
      <link rel="manifest" href="%PUBLIC_URL%/manifest.json" />
      
      <title>About Us - Big Sky Treks</title>

    </Helmet>
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
    </>
  )
}

export default About