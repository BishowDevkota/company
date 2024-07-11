
import React from 'react'
import { useParams } from 'react-router-dom'
import Error from '../../Error/components/Error'
import Other from '../../../Data/OtherActivities/Other.json'
import Subhero from '../../About/components/Subhero'
import ContactForm from '../../Trekking/components/ContactForm'
const SubotherTempelate = () => {
    const params=useParams()
    let HTMLrender=()=>{
      return(
        <>
        <Subhero title={Other[params.other][params.subother].subhero.title} image={Other[params.other][params.subother].subhero.image}/>
        <div className="main-content">
          <div className="sub-main">
          <div className="overview">
          <h1 className="heading">{Other[params.other][params.subother].overview.heading}</h1>
          <p className='format' dangerouslySetInnerHTML={{__html:Other[params.other][params.subother].overview.paragraph}}/>
          </div>
          <div className="facts">
            <h1 className="heading">{Other[params.other][params.subother]['trip-facts'].heading}</h1>
            {Other[params.other][params.subother]['trip-facts'].facts && Other[params.other][params.subother]['trip-facts'].facts.map((facts,index)=>{
              return<div className='format' key={index} dangerouslySetInnerHTML={{__html:facts}}/>
            })}
          </div>
          <div className="programs">
            {Other[params.other][params.subother].programs && Other[params.other][params.subother].programs.map((program,index)=>{
              return(
              <div key={index}>
              <h1 className="heading">{program.heading}</h1>
              {
                program.days.map((day,index1)=>{
                  return(
                    <div key={index1}>
                    <h2>{day.heading}</h2>
                    <div className="image" style={{display:"flex",justifyContent:"space-evenly", gap:"10%"}}>
                    <img src={day.image} alt="" style={{width:"50%"}}/>

                    </div>
                    <div className="format" dangerouslySetInnerHTML={{__html:day.paragraph}}/>
                    
                     <br />
                    </div>
                 
                )})
              }
              </div>

            )})}
          </div>
            <div className="contact">
              <h1 className="heading">
                Book Now
              </h1>
              <ContactForm/>
            </div>
            
        </div>
        </div>
        </>
      )
    }
   let Checking=()=>{
    return((Other[params.other][params.subother]==undefined)?
   <Error/>:<>
  {HTMLrender()}
   </>
)
   }

  return (
    <div>{Checking()}</div>
  )
}

export default SubotherTempelate