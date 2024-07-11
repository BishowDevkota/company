import React from 'react'
import Subhero from '../../About/components/Subhero'
import { useParams } from 'react-router-dom'
import Other from '../../../Data/OtherActivities/Other.json'
import Error from '../../Error/components/Error'
import Cards from '../../Home/components/Cards'
import SubotherTempelate from './SubotherTempelate'

const OtherTempelate = () => {
  let params=useParams(); 
  const URRL = Other[params.other]?.url;
  console.log(URRL)
  if (!URRL) {
    return <div><Error/></div>;
  }

  const Toggle = (subOther) => {
    return subOther ? (
      <div>
      <h1 className="heading">{subOther.heading}</h1>
      <div className="card-wrapper">
    {
    subOther.activities && subOther.activities.map((other, index) => (
  <Cards
    key={index}
    link={other.link} 
    image={other.image}
    name={other.name} 
    days={other.days} 
  />
))}
    </div>
      </div>
    ) : <>
<SubotherTempelate/>
    </>;
  };
  return (
    <div>
        <Subhero title={Other[params.other]?.subhero.title} image={Other[params.other]?.subhero.image}/>
        <div className="main-content">
      <div className="sub-main">
      <div className="overview">
        <h1 className="heading">
          {Other[params.other]?.overview.heading}
        </h1>
        <p className="format" dangerouslySetInnerHTML={{__html:Other[params.other]?.overview.paragraph}}/>

      </div>
      {Toggle(Other[params.other].subotheractivities)}
        </div>
        </div>
        
    </div>
  )
}

export default OtherTempelate