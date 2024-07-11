import React from 'react'
import PopularTour from '../../../Data/Home/PopularTour.json'
import Cards from './Cards'
const PopularTours = (props) => {
  return (
    <>
    <h1 className='heading'>{PopularTour.heading}</h1>
    <p className="format bold-color">{PopularTour.paragraph}</p>

    <div className="card-wrapper">
    {PopularTour.popularTours.map((tour, index) => (
  <Cards
    key={index}
    link={tour.link} 
    image={tour.image}
    name={tour.name} 
    days={tour.days} 
  />
))}


    </div>
    </>
  )
}

export default PopularTours