import React from 'react'
import '../../style/EverestBaseCamp/EverestBaseCamp.css'
import Button from '../Button'
const EverestBaseCamp = () => {
  return (
    <div className="everest-base-camp">
    <div className='ebc-background'>
    <div className="images">
      <div className="image-1">
<img src="https://www.gokyotreksnepal.com/wp-content/uploads/2017/06/everest-base-camp-trekking.jpg" alt="" />
      </div>
      <div className="image-2">
<img src="https://www.miyaradventures.com/wp-content/uploads/2015/07/EverestSunset-1600x789.jpg" alt="" />
      </div>
      </div>
      <div className="ebc-content">
        <h1 className="head">
           The Everest Base Camp
        </h1>
        <p>The <b>Everest Base Camp,</b> situated at <b>5,364 meters</b> in Nepal, offers breathtaking views of the Himalayas and a glimpse of Mount Everest. The trek is a challenging yet rewarding adventure, showcasing the rich Sherpa culture and stunning landscapes.</p>
        <ol>
            <li>Panoramic vistas of the Himalayan landscapes.</li>
            <li>Deep immersion into Sherpa culture and local traditions.</li>
            <li>Trek that promises both physical adventure and unforgettable experiences.</li>
        </ol>
        <div className="button">
            <Button name="View More" link="/trekking/everest-base-camp"/>
        </div>
      </div>
    </div>
    </div>
  )
}

export default EverestBaseCamp