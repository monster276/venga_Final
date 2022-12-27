import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
const Navbar = () => {
    const [MobileMenu,setMobileMenu]=useState(false)
    return (
        <div>
            <header className='header'>
                <div className="container d_flex">
                    <div className="categrories d_flex">
                        <span className='fa fa-border-all'></span>
                        <h4>
                            Categories <i class="fas fa-chevron-down"></i>
                        </h4>
                    </div>

                    <div className="navLink">
                        <ul className ={MobileMenu? "nav-links-MobileMenu": "link f_flex capitalize"} onClick={()=>setMobileMenu(false)}>
                            <li>
                                <Link to='/'>home</Link>
                            </li>
                            <li>
                                <Link to='/pages'>pages</Link>
                            </li>
                            <li>
                                <Link to='/users'>user account</Link>
                            </li>
                            <li>
                                <Link to='/vendor'>vendor account</Link>
                            </li>
                            <li>
                                <Link to='/track'>track my order</Link>
                            </li>
                            <li>
                                <Link to='/contact'>contact</Link>
                            </li>
                        </ul>

                        <button className="toggle" onClick={() => setMobileMenu(!MobileMenu)}>
                            {
                                MobileMenu? <i className='fas fa-times close home-bth'></i> : <i className='fa fa-bars open'></i>
                            }
                        </button>
                    </div>
                </div>
            </header>
        </div>
    );
};

export default Navbar;