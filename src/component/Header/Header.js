import React from 'react';
import Navbar from './Navbar';
import Head from "./Head"
import Search from "./Search"
const Header = ({cartItem}) => {
    return (
        <div>
            <Head></Head> 
            <Search cartItem={cartItem}></Search>
            <Navbar></Navbar>
            
        </div>
    );
};

export default Header;