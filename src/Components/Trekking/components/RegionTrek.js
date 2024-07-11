import React from 'react'
import RegionTrek from '../../../Data/Trekking/trek.json'
const RegionTreks = (props) => {
    const hello="hello"
  return (
    <div>
        <h1 className="heading">{RegionTreks.length}</h1>
        <img src="" alt="" />
        <div className="format" dangerouslySetInnerHTML={{__html:hello}}></div>
    </div>
  )
}

export default RegionTrek