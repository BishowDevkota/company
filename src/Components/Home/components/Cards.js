import React from 'react'
import { BsStarFill } from "react-icons/bs";
import { SlCalender } from "react-icons/sl";
import { Link } from 'react-router-dom';
import '../style/Cards.css'
const Cards = (props) => {
  return (

    <div className='wrapper'>
      <Link to={props.link} className="link">
    <div className="image">
      
    <img src={props.image} alt=""  className='img'/>
    </div>
    <div className="body">
      <div className="name">
        <h1>{props.name}</h1>
      </div>
      <div className="footer">
        <div className="days">
        <SlCalender/> {props.days}
        </div>
        <div className="reviews" >
        <BsStarFill className='gold'/><BsStarFill className='gold'/><BsStarFill className='gold'/><BsStarFill className='gold'/><BsStarFill className='gold'/>
        </div>
      </div>
    </div>
    </Link>
    </div>

  )
}

export default Cards