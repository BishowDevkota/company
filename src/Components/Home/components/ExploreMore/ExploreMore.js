import React from 'react'
import Button from '../Button'
import "../../style/ExploreMore/ExpoloreMore.css"
import BestSellingTripsData from '../../../../Data/Home/BestSellingTrips.json'
import Cards from '../Cards'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ExploreMore = () => {
  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "none", background: "red", width: "50px", height: "50px" , fontSize: "50px"}}
        onClick={onClick}
      />
    );
  }
  
  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "none", background: "green", width: "50px", height: "50px" }}
        onClick={onClick}
      />
    );
  }
    let settings = {
      dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    className: "center",
    centerPadding: "60px",
    centerMode: true,
    autoplay: true,
    speed: 200,
    autoplaySpeed: 5000,
    cssEase: "linear",
    pauseOnHover: true,

    // focusOnSelect: true,
    responsive: [
      {
        breakpoint: 1440,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint:1243,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 1,
          fade:false
      }
    },
      {
        breakpoint: 902,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
          fade:true
        }
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          fade:true,
          dots: true,
          // nextArrow: <SampleNextArrow />,
          // prevArrow: <SamplePrevArrow />
        }
      }
    ]
    }
  return (
  <div className='expolore-more'>
    <div className='upper-div'>
      <div>
    <div className="expolre-more-headings">
    <p>Popular</p>
    <h1>Destinations</h1>
    </div>
    </div>
        <div className='explore-card'>
    <Slider {...settings}>
 
      {BestSellingTripsData.trips.map((trip, index) => {
          return (
              <div className="cmd">
              <Cards
                key={index}
                link={trip.link}
                image={trip.image}
                name={trip.name}
                days={trip.days}
              />
              </div>

              
            )
        })}

      </Slider>
        </div>

    </div>

    </div>
  )
}

export default ExploreMore