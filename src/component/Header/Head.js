import React from 'react';
import'./Header.css'
const Head = () => {
    return (
        <div className='head'>
            <div className="container d_flex">
                <div className="leftRow">
                    <i class="fas fa-phone-alt"></i>
                    <label htmlFor="">0986595595</label>
                    <i class="fas fa-envelope-open"></i>
                    <label htmlFor="">Shopnow@gmail.com</label>
                </div>
                <div className="rightRow">
                    <label htmlFor="">Them FAQ's</label>
                    <label htmlFor="">Hỗ trợ</label>
                    <span><i class="fas fa-globe-europe"></i></span>
                    <label htmlFor="">VND</label>
                    <span><i class="fas fa-globe-europe"></i></span>
                    <label htmlFor="">USD</label>
                </div>
            </div>
        </div>
    );
};

export default Head;