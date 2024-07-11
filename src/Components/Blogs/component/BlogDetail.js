import React from 'react'
import Subhero from '../../About/components/Subhero'
import blogDetail from '../../../Data/Blogs/BlogDetail.json'
import { useParams } from 'react-router-dom'
import Error from '../../Error/components/Error'
import ContactForm from '../../Trekking/components/ContactForm'
const BlogDetail = () => {


    let params=useParams()
    if (blogDetail[params.blog]?.url !== params.blog) {
        return <Error />;
    }
  return (
    <>
    <Subhero title={blogDetail[params.blog]?.subhero.title}/>
    <div className="main-content">
        <div className="sub-main" style={{width:"60%", left:'20%'}}>
            <div className="main">
            <h1 className="heading">
            {blogDetail[params.blog]?.main.heading}
            </h1>
            <p className="format">
                {blogDetail[params.blog]?.main.paragraph}
            </p>
            <iframe width='100%' height='500px' src='https://www.youtube.com/embed/PKqOepGqYps?si=6yzWZn3vS0smZdbE'title='YouTube video player' frameborder='0' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'referrerpolicy='strict-origin-when-cross-origin' allowfullscreen></iframe>
            </div>
            
            {blogDetail[params.blog].content && blogDetail[params.blog].content.map((item,index)=>{
                return(
                    <div className="content" key={index}>
                        <h1>{item.heading}</h1>
                        <img src={item.image} alt="" />
                        <div className='format' dangerouslySetInnerHTML={{__html:item.paragraph}}/>
                    </div>
                )
            })}
            <div className="contact">
            <h1 className='heading'>Book Now</h1>
            <ContactForm/>
            </div>
        </div>
    </div>
    </>
  )
}

export default BlogDetail