import React from 'react'
import Subhero from '../../../Components/About/components/Subhero'
import blog from '../../../Data/Blogs/blogs.json'

import BlogsCards from './BlogsCards'
const BlogTempelate = () => {
  return (
    <>
    <Subhero/>
    <div className="main-content">
<div className="sub-main">
<div className="overview">
  <h1 className="heading">{blog.overview.heading}</h1>
  <p className="format">{blog.overview.paragraph}</p>
</div>
<div>
  <div className="blog-cards">
<h1 className="heading">
{blog.cards.heading}
</h1>
</div>

<div className="card-wrapper">
  {blog.cards.lists.map((item,index)=>{
  return <BlogsCards 
  link={item.link}
  image={item.image}
  month={item.month}
  day={item.day}
  heading={item.heading}
  discription={item.discription}
  writer={item.writer}
  />
})}


    </div>
</div>
</div>
</div>
    </>
  )
}

export default BlogTempelate