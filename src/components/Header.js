import React from 'react';
import { NavLink } from 'react-router-dom';

class Header extends React.Component {
    render(){
        return(
            <header>
                <nav>
                    <ul>
                        <li>
                            <NavLink to="/" exact>Home</NavLink>
                        </li>
                        <li>
                            <NavLink to="/about">About</NavLink>
                        </li>
                        <li>
                            <NavLink to="/favourites">Favourites</NavLink>
                        </li>
                    </ul>
                </nav>
            </header>
        )
    }
}

export default Header;