import React from 'react'
import { useParams } from 'react-router-dom';
import subTour from "../../../Data/Tours/SubTours.json"
import Cards from '../../Home/components/Cards';
import Error from '../../Error/components/Error';
import Subhero from '../../About/components/Subhero';
const SubTourTempelate = () => {
    let params=useParams();
  const URRL = subTour[params.subTour]?.url;
  console.log(URRL)
  if (!URRL) {
    return <div><Error/></div>;
  }

  const Toggle = (subTour) => {
    return subTour ? (
      <div>
      <h1 className="heading">{subTour.heading}</h1>
      <div className="card-wrapper">
    {subTour.activities.map((tour, index) => (
  <Cards
    key={index}
    link={tour.link} 
    image={tour.image}
    name={tour.name} 
    days={tour.days} 
  />
))}
    </div>
      </div>
    ) : <>
    Sub Tour not Found
    </>;
  };
  return (
    <div>
         <Subhero title={subTour[params.subTour]?.subhero.title} image={subTour[params.subTour]?.subhero.image}/>
        <div className="main-content">
      <div className="sub-main">
      <div className="overview">
        <h1 className="heading">
          {subTour[params.subTour]?.overview.heading}
        </h1>
        <p className="format" dangerouslySetInnerHTML={{__html:subTour[params.subTour]?.overview.paragraph}}/>


      </div>
      {Toggle(subTour[params.subTour].subtours)}
        </div>
        </div>
        
    </div>
  )
}

export default SubTourTempelate