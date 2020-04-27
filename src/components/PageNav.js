import React from 'react';
import { NavLink } from 'react-router-dom';

const PageNav = () => {

    return (

    <div className="page-nav-flex">
        <nav className="page-navbar">
            <ul className="page-nav-ul">
                <li className="page-nav-li">
                    <NavLink to="/" exact>Home</NavLink>
                </li>
                <li className="page-nav-li">
                    <NavLink to="/about">About</NavLink>
                </li>
                <li className="page-nav-li">
                    <NavLink to="/favourites">Favourites</NavLink>
                </li>
            </ul>
        </nav> 
</div>

)};

export default PageNav;

 