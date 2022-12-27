import React from 'react';
import ShopCart from './ShopCart';
import ShopCate from './ShopCate';
import "./Shop.css"
const Shop = ({shopItems,addToCart}) => {
    return (
        <div className='shop background'>
            <div className="container d_flex">
                <ShopCate />
                <div className="contentWidth">
                    <div className="heading d_flex">
                        <div className="heading-left row f_flex">
                            <img src='https://img.icons8.com/glyph-neue/64/26e07f/new.png' alt=''/>
                            <h2>Tech Shop</h2>
                        </div>
                        <div className="heading-right row">
                            <span>View all</span>
                            <i className='fa fa-caret-right'></i>
                        </div>
                    </div>

                    <div className="product-content grid1">
                        <ShopCart addToCart={addToCart} shopItems={shopItems}/>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Shop;
