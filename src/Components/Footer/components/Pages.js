import React from 'react'
import { Link } from 'react-router-dom'
import '../style/Page.css'
const Pages = () => {
  return (
    <div className='page'>
        <h1>Pages</h1>
        <div className='flex'>
            <Link to={"/"} className='link'>Home</Link>
            <Link to={"/"} className='link'>Trekking</Link>
            <Link to={"/"} className='link'>Other Activities</Link>
            <Link to={"/"} className='link'>Nepal Tours</Link>
            <Link to={"/"} className='link'>About</Link>
            <Link to={"/"} className='link'>Blog</Link>
            <Link to={"/"} className='link'>Contact</Link>
        </div>
    </div>
  )
}

export default Pages