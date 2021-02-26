import React from 'react';
import logo from '../../images/logo.png'
import './Header.css'
const Header = () => {
    return (
        <div className="header">
            <img src={logo} alt="logo"/>
             <nav>
                 <a className="nav-link" href="/shop">
                     Shop
                 </a>
                 <a className="nav-link" href="/review">
                     Order Review
                 </a>
                 <a className="nav-link" href="/manage">
                     Manage Inventory
                 </a>
                     <div className="line"></div>
                 </nav>
        </div>
    );
};

export default Header;