import React from 'react'
import WhyBigskyTrek from '../../../Data/Home/WhyBigSkyTreks.json'
import WhyBigSkyTreksSmallCards from './WhyBigSkyTreksSmallCards'
import '../style/WhyBigSkyTreks.css'
const WhyBigSkyTreks = () => {
  return (
    <div className='why-big-sky-treks full'>
        <div className="left">
        <h1 className="heading">{WhyBigskyTrek.heading}</h1>
        <h2 className='quotes'>{WhyBigskyTrek.quotes}</h2>
        <div className="cards-wrapper">
            {
                WhyBigskyTrek.WhyBST.map((item,index)=> <WhyBigSkyTreksSmallCards key={index} cardHeading={item.heading} cardParagraph={item.paragraph}/>)
            }
        </div>
        </div>
    </div>
  )
}

export default WhyBigSkyTreks