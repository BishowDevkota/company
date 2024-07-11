import React from 'react'
import { Link } from 'react-router-dom'
import '../style/Activities.css'
const Activities = () => {
  return (
    <div className='activities'>
    <h1>Activities</h1>
    <div className="flex">
    <Link to={"/"} className='link'>Jungle Safari</Link>
    <Link to={"/"} className='link'>Rafting</Link>
    <Link to={"/"} className='link'>Bungee Jump</Link>
    <Link to={"/"} className='link'>Mountain Flight</Link>
    <Link to={"/"} className='link'>Heli Tour</Link>
    <Link to={"/"} className='link'>Bird Watching</Link>
    <Link to={"/"} className='link'>Paragliding</Link>
    {/* <Link to={"/"} className='link'>Home</Link> */}
    </div>
    </div>
  )
}

export default Activities