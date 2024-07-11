import React from 'react'
import { Link } from 'react-router-dom'
import '../style/Footer.css'
import CompanyInfo from './CompanyInfo'
import Pages from './Pages'
import Activities from './Activities'
import Trekking from './Trekking'
import Blogs from './Blogs'

const Footer = () => {
  return (
<footer>
    <div className='flex'>
<CompanyInfo/>
<Pages/>
<Activities/>
<Trekking/>
<Blogs/>

</div> 
<p>© 2024 <Link to={"/"} className='name'>Big Sky Treks</Link> .Designed By <a href="/about" className='name'>Bishow Devkota</a></p>

</footer>
  )
}

export default Footer



