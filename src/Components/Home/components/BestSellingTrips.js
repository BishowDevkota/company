import React from 'react'
import BestSellingTrip from '../../../Data/Home/BestSellingTrips.json'
// import "../style/BestSellingTrips.css"
import Cards from './Cards'
// import myImage from './testImage.webp';  
const BestSellingTrips = () => {
  return (<div className='best-selling-trips'>
 
    <h1 className='heading'>{BestSellingTrip.heading}</h1>
    <p className='format bold-color'>{BestSellingTrip.paragraph}</p>

<div className="card-wrapper">
    {BestSellingTrip.trips.map((trip, index) => (
  <Cards 
    key={index}
    link={trip.link} 
    image={trip.image}
    name={trip.name} 
    days={trip.days} 
  />
))}
</div>

    </div>
  )
}

export default BestSellingTrips

