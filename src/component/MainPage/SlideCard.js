import React from 'react';
import Sdata from './Sdata';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import "./Home.css"
const SlideCard = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        appendDot: (dots) => {
            return <ul style={{margin:'0px'}}>{dots}</ul>
        }
    }
    return (
        <div className=''>
            <Slider {...settings}>
            {
                Sdata.map((value, index) => {
                    return (
                        <div className="box d_flex top">
                            <div className="left">
                                <h2>{value.title}</h2>
                                <p>{value.desc}</p>
                                <div className="btn-primary">collection</div>
                            </div>
                            <div className="right">
                                <img src={value.cover} alt="" />
                            </div>
                        </div>
                )
                })} 
            </Slider>    
        </div>
    );
};

export default SlideCard;