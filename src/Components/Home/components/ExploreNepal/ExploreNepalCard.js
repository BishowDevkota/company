import React from 'react'
import Image from '../../../../Test.jpg'
import '../../style/ExploreNepal/ExploreNepalCard.css'
import Button from '../Button'
const ExploreNepalCard = ({backgroundImage, width, howManyPlaces,category,link}) => {
  return (
    
        <div className="background" style={{backgroundImage:`url(${backgroundImage})`, width:`${width}`}}>
        <div className="card-discription">
            <div className="how-many-places">
            {howManyPlaces} Destinations
            </div>
            <div className="btn">

            <Button name="View Details" link={link}/>
            </div>
            <div className="place">
            <h1>{category}</h1>
        </div>
        </div>
        </div>
     


  )
}

export default ExploreNepalCard