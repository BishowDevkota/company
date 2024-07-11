import React from 'react'
import About from '../../../Data/About/AboutBST.json'

const AboutBST = () => {


  return (
    <div>
    <h1 className="heading">{About.heading}</h1>
    <p dangerouslySetInnerHTML={{ __html: About.paragraph }} className='format'/>
    
    </div>
  )
}

export default AboutBST