import React from 'react';
import PropTypes from 'prop-types';

function SocialNetworkButton({socialNetwork}) {
    return (
        <button className="login-social-button">
            <img src={socialNetwork.icon}/>
            <span>
                {socialNetwork.name}
            </span>
        </button>
    );
}

SocialNetworkButton.propTypes = {
    socialNetwork: PropTypes.objectOf({
        name: PropTypes.string.isRequired,
        icon: PropTypes.string.isRequired
    }).isRequired
};

export default SocialNetworkButton;
