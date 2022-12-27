import React from 'react';
import Categories from './Categories';
import SlideCard from './SlideCard';
import Slider from './Slider';

const Home = () => {
    return (
        <div className='home'>
            <div className="container d_flex">
                <Categories />
                <Slider/>
            </div>
        </div>
    );
};

export default Home;