import React from "react";
import '../style/Home.css'
import Hero from "../../Components/Home/components/Hero";
import ExploreMore from "../../Components/Home/components/ExploreMore/ExploreMore";
import ExploreNepal from "../../Components/Home/components/ExploreNepal/ExploreNepal";
import EverestBaseCamp from "../../Components/Home/components/EverestBaseCamp/EverestBaseCamp";
import AboutCompany from "../../Components/Home/components/AboutCompany/AboutCompany";
import OtherActivities from "../../Components/Home/components/OtherActivities/OtherActivities";


const Home = () => {
  return (
    <>
      <Hero />

<ExploreMore/>
<EverestBaseCamp/>
<ExploreNepal/>
        <div className="about-company">
      <AboutCompany/>
        </div>
        <OtherActivities/>
        

    </>
  ); 
};

export default Home;
