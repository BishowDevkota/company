import React from 'react'
import { Link } from 'react-router-dom'
import '../style/Activities.css'
const Trekking = () => {
  return (
    <div className='activities'>
    <h1>Trekking</h1>
    <div className="flex">
    <Link to={"/"} className='link'>Everest Base Camp</Link>
    <Link to={"/"} className='link'>Annapurna BAse Camp</Link>
    <Link to={"/"} className='link'>Langtang Valley trek</Link>
    <Link to={"/"} className='link'>Manaslu Curcit Trek</Link>
    <Link to={"/"} className='link'>Mardi Himal Trek</Link>
    <Link to={"/"} className='link'>Jomsom Muktinath</Link>
    <Link to={"/"} className='link'>Upper Mustang Trek</Link>
    </div>
    </div>
  )
}

export default Trekking