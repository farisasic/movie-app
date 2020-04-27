import React from 'react';
import { NavLink } from 'react-router-dom';

const HomeNav = () => {

    return (
        <nav className="home-navbar">
            <ul className="home-ul">
                <li className="home-li">
                    <NavLink to="/" exact>Home</NavLink>
                </li>
                <li className="home-li">
                    <NavLink to="/about">About</NavLink>
                </li>
                <li className="home-li">
                    <NavLink to="/favourites">Favourites</NavLink>
                </li>
            </ul>
        </nav>  
        )};

export default HomeNav;