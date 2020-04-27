import React from 'react';
import { Link } from 'react-router-dom';

class Header extends React.Component {
    render(){
        return(
            <header>
                <div className="logo">
                    <h1><Link className="logo-link" to="/" exact>Cinedex</Link></h1>
                </div>
            </header>
        )
    }
}

export default Header;