import React from 'react';
import PropTypes from 'prop-types';

import Navbar from '@/components/shared/Navbar';

class AboutComponent extends React.Component {
    propTypes = {
        user: PropTypes.shape({
            username: PropTypes.string.isRequired,
            memcoin: PropTypes.number.isRequired
        }).isRequired
    };

    render() {
        const {user} = this.props;
        return (
            <section className="Rules">
                <Navbar username={ user.username } coins={ user.memcoin }/>
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <h1 className="page-title">О нас</h1>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default AboutComponent;
