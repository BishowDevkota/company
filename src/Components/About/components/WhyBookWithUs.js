import React from 'react'

const WhyBookWithUs = (props) => {
  return (
    <div>
       <h2>{props.heading}</h2>
       <div dangerouslySetInnerHTML={{ __html: props.paragraph }} className='format'/>
       <br />
       </div>
  )
}

export default WhyBookWithUs