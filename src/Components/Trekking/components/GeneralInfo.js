import React from 'react'
import "../style/GeneralInfo.css"
const GeneralInfo = (props) => {
  return (<div className='flex'>
  {
    props.Object[props.Param.id].GeneralInfo.info.map((item, index)=>{
        return(<div className='Trekking-card' key={index}>
    <div className="image"><img src={item.image}/> </div>
    
    <div className="content">
      <div className="h1"> {item.heading} </div>
      <div className="h2"> {item.description} </div>
    </div>
  </div>

)

    })

  }

  </div>
  )
}

export default GeneralInfo