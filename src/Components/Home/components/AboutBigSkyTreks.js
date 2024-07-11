import React from 'react'
import AboutBigSkyTrek from '../../../Data/Home/AboutBigSkyTreks.json'
import Button from './Button'
const AboutBigSkyTreks = () => {
  return (
    <div className="about-big-sky-treks">
        <h1 className="heading">
        {AboutBigSkyTrek.heading}
        </h1>
        <div dangerouslySetInnerHTML={{ __html: AboutBigSkyTrek.paragraph }} className='format'/>
        <Button name="Know More" link="/"/>
        
    </div>
  )
}

export default AboutBigSkyTreks