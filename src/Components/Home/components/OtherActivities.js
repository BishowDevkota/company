import React from 'react'
import OtherActivity from '../../../Data/Home/OtherActivities.json'
import Cards from './Cards'
const OtherActivities = () => {

  return (
    <>
    <h1 className="heading">{OtherActivity.heading}</h1>
    <p className="format bold-color">{OtherActivity.paragraph}</p>
    <div className="card-wrapper">
    {OtherActivity.otherActivities.map((other, index) => (
  <Cards
    key={index}
    link={other.link} 
    image={other.image}
    name={other.name} 
    days={other.days} 
  />
))}
    </div>
    </>
  )
}

export default OtherActivities