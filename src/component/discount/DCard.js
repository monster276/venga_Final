import React from 'react';
import Ddata from './Ddata';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
const DCard = () => {
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 6,
      slidesToScroll: 1,
      autoplay: true,
        margin: 20,
        arrows: false,
       responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          slidesToShow: 1,
        },
      },
    ],
    };
    return (
        
        <div className='product'>
            <div className="box">
                <Slider {...settings}>
                {Ddata.map((val, index) => {
                    return (
                        <div className='box' key={index}>
                            <div className="img">
                                <img src={val.cover} alt="" />
                            </div>
                            <h4>{val.name}</h4>
                            <span>{val.price}$</span>
                        </div>
                    )
                })}
                </Slider>
            </div>
            
        </div>
    );
};

export default DCard;