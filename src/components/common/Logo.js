import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/logo_circlel.png';

class Logo extends React.Component {
    render() {
        return (
            <Link className="menu-link" to="/">
                <img src={ logo } className="Logo img-responsive" alt="Logo" id="logo"/>
            </Link>
        );
    }
}


export default Logo;