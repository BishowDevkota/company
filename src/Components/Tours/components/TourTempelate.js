import React from 'react'
import Subhero from '../../About/components/Subhero'
import Tour from '../../../Data/Tours/Tours.json'
import Cards from '../../Home/components/Cards'
const TourTempelate = () => {
  return (
  <>
  <Subhero title={Tour.subhero.title} image={Tour.subhero.image}/>
  <div className="main-content">
    <div className="sub-main">
      <div className="overview">
        <h1 className="heading">{Tour.overview.heading}</h1>
        <p className='format' dangerouslySetInnerHTML={{__html:Tour.overview.paragraph}}></p>
        </div>

  <div className="tours">

      <h1 className="heading">
      {Tour.Tours.heading}
    </h1>
  <div className="card-wrapper">

    {Tour.Tours.lists.map((other, index) => (
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
    </div>
  </div>
  </>
  )
}

export default TourTempelate