import React from 'react';
import logo from "./logo1.png"
import { Link } from 'react-router-dom';
const Search = ({cartItem}) => {
    window.addEventListener("scroll", function () {
        const search = document.querySelector(".search")
        search.classList.toggle("active", this.window.scrollY>100)
    })
    return (
        <div className='search'>
            <div className="container c_flex">
                <div className='logo width'>
                    <Link to="/">
                        <img src={logo} alt="" />
                    </Link>
                </div>

                <div className="searchBox f_flex">
                    <i className='fa fa-search'></i>
                    <input type="text" placeholder='Hãy tìm kiếm sản phẩm yêu thích' />
                    <span>All Category</span>
                </div>

                <div className="icon f_flex width">
                    <Link to ='/login'>
                        <i className='fa fa-user icon-circle'></i>
                    </Link>
                    <div className="cart">
                        <Link to="/cart">
                            <i className='fa fa-shopping-bag icon-circle'></i>
                        </Link>
                        <span>{cartItem.length===0?"":cartItem.length}</span>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Search;