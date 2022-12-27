import React from 'react';
import DCard from './DCard';

const Discount = () => {
    return (
        <div className='discount background newarrivals'>
            <div className="container">
                <div className="heading d_flex">
                    <div className="heading-left row f_flex">
                        <img src='https://img.icons8.com/windows/32/fa314a/gift.png' alt=''/>
                        <h2>Discount</h2>
                    </div>
                    <div className="heading-right row">
                        <span>View all</span>
                        <i className='fa fa-caret-right'></i>
                    </div>
                </div>
                <DCard/>
            </div>
            
        </div>
    );
};

export default Discount;