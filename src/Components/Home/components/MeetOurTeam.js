import React from 'react'
import '../style/MeetOurTeam.css'
import Button from './Button'
import OurTeam from '../../../Data/Home/MeetOurTeam.json'
const MeetOurTeam = () => {
  return (
    <div className='meet-our-team'>
    <div className="content">
        <h1>{OurTeam.heading}</h1>
        <p className='format'>{OurTeam.paragraph}</p>
        <Button name="View More" link='/about'/>
      </div>
      </div>
  )
}

export default MeetOurTeam