import React from 'react'
import Experience from '../../../Data/Home/Experience.json'
import '../style/ExperienceCard.css'
const ExperienceCard = () => {
  return (
    <div className="experience" style={{
      minWidth:'300px'
    }}>
    <h2 dangerouslySetInnerHTML={{ __html: Experience.head }} className="head"/>
    <p>{Experience.paragraph}</p>
    </div>
  )
}
 
export default ExperienceCard