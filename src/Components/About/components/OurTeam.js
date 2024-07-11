import React from 'react'
import '../style/OurTeam.css'
const OurTeam = ({ image, name, post, description }) => {
  return (
    <div className="employee-card">
      <div className="employee-card-wrapper">
        <div className="card">
          <div className="pur-team-image">
            <img src={image} alt={name} />
          </div>
          <div className="content">
            <h3>{name}</h3>
            <h5>{post}</h5>
            <p className='our-team-discription'>{description}</p> 
          </div>
        </div>
      </div>
    </div>
  )
}

export default OurTeam