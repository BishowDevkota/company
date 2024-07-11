import React from 'react'
import { Link } from 'react-router-dom'
import '../style/Activities.css'
const Blogs = () => {
  return (
    <div className='activities'>
    <h1>Blogs</h1>
    <div className="flex">
    <Link to={"/"} className='link'>Beautiful Day In Nagarkot</Link>
    <Link to={"/"} className='link'>Trek To EBC</Link>
    <Link to={"/"} className='link'>Sunrise From Poonhill</Link>
    <Link to={"/"} className='link'>Welcoming Culture Of Ghandruk</Link>
    <Link to={"/"} className='link'>Best Trekking Comany In Nepal</Link>
    <Link to={"/"} className='link'>Mountains Of Nepal</Link>
    <Link to={"/"} className='link'>Ka  thmandu City</Link>
    </div>
    </div>
  )
}

export default Blogs