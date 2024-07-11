import React from 'react'
import '../style/Subhero.css'
import Search from '../../Nav/components/Search'
const Subhero = (props) => {
  return (
    <section className="sub-hero" style={{ backgroundImage: `url(${props.image})` }}>
            <div className="hero-content">
                <Search/>
                <h1>{props.title}</h1>
            </div>
        </section>
  )
}

export default Subhero