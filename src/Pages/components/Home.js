import React from "react";
import '../style/Home.css'
import Hero from "../../Components/Home/components/Hero";
import ExploreMore from "../../Components/Home/components/ExploreMore/ExploreMore";
import ExploreNepal from "../../Components/Home/components/ExploreNepal/ExploreNepal";
import EverestBaseCamp from "../../Components/Home/components/EverestBaseCamp/EverestBaseCamp";
import AboutCompany from "../../Components/Home/components/AboutCompany/AboutCompany";
import OtherActivities from "../../Components/Home/components/OtherActivities/OtherActivities";
import { Helmet } from "react-helmet";


const Home = () => {
  return (
    <div>
        <Helmet>
      <meta charSet="utf-8" />
      <link rel="icon" href="/Image/logo.png" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      
      <meta name="description" content="Discover the adventure of a lifetime with Big Sky Treks. Explore Nepal's breathtaking landscapes with our guided trekking tours to Everest Base Camp, Annapurna Circuit, and more." />
      <meta name="keywords" content="trekking Nepal, adventure tours, trekking company, Nepal tours, Everest Base Camp, Annapurna Circuit, Himalayas" />
      <meta name="author" content="Big Sky Treks" />
      <meta name="robots" content="index, follow" />
      <meta name="google-site-verification" content="vwQgWwqSFdFeLag8zLwYL4jNhLrXXo-rSy5x35XH110" />
      
      {/* Open Graph Meta Tags */}
      <meta property="og:title" content="Big Sky Treks - Trekking Adventures in Nepal" />
      <meta property="og:description" content="Discover the adventure of a lifetime with Big Sky Treks. Explore Nepal's breathtaking landscapes with our guided trekking tours to Everest Base Camp, Annapurna Circuit, and more." />
      <meta property="og:image" content="%PUBLIC_URL%/images/homepage.jpg" />
      <meta property="og:url" content="https://www.bigskytreksnepal.com/" />
      <meta property="og:type" content="website" />
      
      {/* Twitter Card Meta Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Big Sky Treks - Trekking Adventures in Nepal" />
      <meta name="twitter:description" content="Discover the adventure of a lifetime with Big Sky Treks. Explore Nepal's breathtaking landscapes with our guided trekking tours to Everest Base Camp, Annapurna Circuit, and more." />
      <meta name="twitter:image" content="%PUBLIC_URL%/images/homepage.jpg" />
      <meta name="twitter:site" content="@BigSkyTreks" />
      
      {/* Canonical Link */}
      <link rel="canonical" href="https://www.bigskytreksnepal.com/" />
  
      {/* Structured Data */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{
        __html: `
          {
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Big Sky Treks",
            "description": "Discover the adventure of a lifetime with Big Sky Treks. Explore Nepal's breathtaking landscapes with our guided trekking tours to Everest Base Camp, Annapurna Circuit, and more.",
            "url": "https://www.bigskytreksnepal.com/",
            "logo": "%PUBLIC_URL%/images/logo.png",
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
      
      <title>Big Sky Treks - Trekking Adventures in Nepal</title>
    </Helmet>
      <Hero />

<ExploreMore/>
<EverestBaseCamp/>
<ExploreNepal/>
        <div className="about-company">
      <AboutCompany/>
        </div>
        <OtherActivities/>
        

    </div>
  ); 
};

export default Home;
