import React from 'react'
import '../../style/ExploreNepal/ExploreNepal.css'
import ExploreNepalCard from './ExploreNepalCard'
import ExploreNepalData from '../../../../Data/Home/ExploreNepal/ExploreNepal.json'
const ExploreNepal = () => {
  return (<>
  <div className="explore-nepal">
    <div className='head'>
        <p>Get Ready to</p>
        <h1>Explore Nepal</h1>
        <p>With Big Sky Treks</p>
    </div>
    <div className="explore-nepal-cards">
    <div className="row">
      {
           ExploreNepalData['explore-nepal'].rows.rowone.map((item,index)=>{
            return <ExploreNepalCard backgroundImage={item.backgroundImage} width={item.width} howManyPlaces={item.howManyPlaces} category={item.category} link={item.link}/>
           })
      }
    </div>
    <div className="row">
    {
                 ExploreNepalData['explore-nepal'].rows.rowtwo.map((item,index)=>{
                  return <ExploreNepalCard backgroundImage={item.backgroundImage} width={item.width} howManyPlaces={item.howManyPlaces} category={item.category} link={item.link}/>
                 })
    }
    </div>
    <div className="row">
      {
          ExploreNepalData['explore-nepal'].rows.rowthree.map((item,index)=>{
            return <ExploreNepalCard backgroundImage={item.backgroundImage} width={item.width} howManyPlaces={item.howManyPlaces} category={item.category} link={item.link}/>
          })
      }
    </div>
    </div>
  </div>
      </>
  )
}

export default ExploreNepal