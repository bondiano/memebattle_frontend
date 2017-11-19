import React from 'react';
import logo from '../../assets/images/logo_circlel.png';
class Logo extends React.Component {
    render() {
        return (
            <a href="#">
                <img src={ logo } className="Logo img-responsive" alt="Logo" id="logo"/>
            </a>
        );
    }
}


export default Logo;