import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import logo from 'assets/images/logo_circlel-512x512.png';

const widthBySize = {
    'small': '100px',
    'medium': '250px',
    'big': '500px'
};

function Logo({size}) {
    return(
        <Link to="/">
            <img src={logo} title="На главную" alt="Logo" id="logo" className="Logo" width={widthBySize[size]}/>
        </Link>
    );
}

Logo.defaultProps = {
    size: 'medium'
};

Logo.propTypes = {
    size: PropTypes.oneOf(['small', 'medium', 'big'])
};

export default Logo;
