import React from 'react'
import "../style/DetailItenary.css"
import Trek from '../../../Data/Trekking/Trekking.json'
const DetailItenary = (props) => {

  return (<>
    {
      props.Trekking[props.params.id]?.detailItenary.itenary && props.Trekking[props.params.id]?.detailItenary.itenary.map((item,index)=>{
        return(
        <div key={index}>
          <h2>{item.dayheading}</h2>
          <img src={item.image} alt="image" /> 
          <ol>
            {item.lists.map((item1,index1)=>{
              return(
                <li className='format' key={index1} dangerouslySetInnerHTML={{ __html:item1}}></li>
              )
            })}
          </ol>
          <div className="note format" dangerouslySetInnerHTML={{__html:item.note}}></div>
          <hr />
        </div>)
      })
    }
    </>
  )
}

export default DetailItenary