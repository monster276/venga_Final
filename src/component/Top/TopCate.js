import React from 'react';
import TopCart from './TopCart';
import "./Top.css"
const TopCate = () => {
    return (
        <div className='topCat background'>
            <div className="container">
                <div className="heading d_flex">
                    <div className="heading-left row f_flex">
                        <i className='fa fa-border-all'></i>
                        <h2>Top Sản phẩm bán chạy</h2>
                    </div>
                    <div className="heading-right row">
                        <span>View all</span>
                        <i className='fa fa-caret-right'></i>
                    </div>
                </div>
                <TopCart/>
            </div>
        </div>
    );
};

export default TopCate;