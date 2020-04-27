import React from 'react';
import { NavLink } from 'react-router-dom';

class Header extends React.Component {
    render(){
        return(
            <header>
                <div className="logo">
                    <h1>Cinedex</h1>
                </div>
            </header>
        )
    }
}

export default Header;