import React from 'react'
import '../style/Button.css'
import { Link } from 'react-router-dom'
import {motion} from 'framer-motion'
const Button = (props) => {
  return (
    <motion.button whileHover={{scale:1.2}} className='button'><Link to={props.link} className='link'>{props.name}</Link></motion.button>
  )
}

export default Button