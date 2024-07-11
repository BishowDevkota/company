
import React from 'react'
import { useParams } from 'react-router-dom'
import Error from '../../Error/components/Error'
import Tour from '../../../Data/Tours/SubTours.json'
import Subhero from '../../About/components/Subhero'
const SubSubTour = () => {
    const params=useParams()
    let HTMLrender=()=>{
      return(
        <>
        <Subhero title={Tour[params.tour][params.subtour].subhero.title} image={Tour[params.tour][params.subtour].subhero.image}/>
        <div className="main-content">
          <div className="sub-main">
          <div className="overview">
          <h1 className="heading">{Tour[params.tour][params.subtour].overview.heading}</h1>
          <p className='format' dangerouslySetInnerHTML={{__html:Tour[params.tour][params.subtour].overview.paragraph}}/>
          </div>

        </div>
        </div>
        </>
      )
    }
   let Checking=()=>{
    return((Tour[params.tour][params.subtour]==undefined)?
   <Error/>:<>
  {HTMLrender()}
   </>
)
   }

  return (
    <div>{Checking()}</div>
  )
}

export default SubSubTour;