import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/logo_circlel.png';

/**
 * @param {"small" || "medium" || "big"} size
 */
const getWidth = (size) => ({
    'small': '200px',
    'medium': '400px',
    'big': '600px'
})[size];

function Logo({size}) {
    return(
        <Link to="/">
            <img src={ logo } title="На главную" alt="Logo" id="logo" width={getWidth(size)}/>
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
