import React from 'react'
import '../../style/OtherActivities/OtherActivities.css'
import OtherActivitiesCard from './OtherActivitiesCard'
import OtherActivitiesData from '../../../../Data/Home/OtherActivities.json'
const OtherActivities = () => {
  return (
    <div className='home-activities'>
        <h1>Other Activities</h1>
        <div className="other-activities-cards">
        {
            OtherActivitiesData.otherActivities.map((other, index) => (
                <OtherActivitiesCard
                    key={index}
                    link={other.link}
                    image={other.image}
                    name={other.name}

                />
            ))
        }
        </div>

    </div>
  )
}

export default OtherActivities