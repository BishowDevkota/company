import React from 'react'
import "../style/WhyBigSkyTreksSmallCards.css"
const WhyBigSkyTreksSmallCards = (props) => {
  return (
    <div className='why-BST-cards'>
     <h1>{props.cardHeading}</h1>
     <p className='format'>{props.cardParagraph}</p>
    </div>
  )
}

export default WhyBigSkyTreksSmallCards