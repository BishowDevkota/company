import React from 'react'
import '../../style/OtherActivities/OtherActivitiesCard.css'
import { Link } from 'react-router-dom'
const OtherActivitiesCard = ({link, image, name}) => {
  return (
   <div className='other-activities-card'>
    <Link to={link} className='other-activities-card-link'>
    <div className="image" style={{backgroundImage:`url(${image})`}}>


    </div>
    <div className="footer">
    <h1>{name}</h1>
    </div>
    </Link>
    </div>
    
  )
}

export default OtherActivitiesCard