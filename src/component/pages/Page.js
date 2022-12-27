import React from 'react';
import Annu from '../anouncerment/Annu';
import Discount from '../discount/Discount';
import FlashDeal from '../FlashDeal/flashDeal';
import Home from '../MainPage/Home';
import NewArival from '../newArival/NewArival';
import Shop from '../Shop/Shop';
import TopCate from '../Top/TopCate';
import Wrapper from '../wrapper/Wrapper';

const Page = ({productItems,cartItem,addToCart,shopItems}) => {
    return (
        <div>
            <Home cartItem={cartItem} />
            <FlashDeal productItems={productItems} addToCart={addToCart} />
            <TopCate />
            <NewArival />
            <Discount />
            <Shop shopItems={shopItems} addToCart={addToCart} />
            <Annu />
            <Wrapper/>
        </div>
    );
};

export default Page;