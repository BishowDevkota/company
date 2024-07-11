import React from 'react'
import { Link } from 'react-router-dom'
import '../style/BlogCard.css'
const BlogsCards = (props) => {
  return (
    <div className='wrapper'>
      <Link to={props.link} className="link">
    <div className="image">
      
    <img src={props.image} alt=""  className='img'/>
    </div>
    <div className="date">
      <div className="month">
        {props.month}
      </div>
      <div className="day">
        {props.day}
      </div>
    </div>
    <div className="blog-body">
      <div className="blog-name">
        <h2>{props.heading}</h2>
      </div>
      <div className="footer">
      <div className="discription">
        <p className='format blog-footer-discription'>{props.discription}</p>
      </div>
      <div className="writer">
        -{props.writer}
      </div>
      </div>
    </div>
    </Link>
    </div>
  )
}


export default BlogsCards