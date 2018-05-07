import React from 'react';
import PropTypes from 'prop-types';
import { routes } from 'constants';

import Navbar from '@/components/shared/Navbar';
import Card from '@/components/shared/Card';
import cardImg1 from '@/assets/images/bb.jpg';

class ModesComponent extends React.Component {
    propTypes = {
        user: PropTypes.shape({
            username: PropTypes.string.isRequired,
            memcoin: PropTypes.number.isRequired
        }).isRequired
    };

    render() {
        const {user} = this.props;
        return (
            <section className="Modes">
                <Navbar username={ user.username } coins={ user.memcoin }/>
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <h1 className="page-title">Режимы</h1>
                        </div>
                        <Card img={ cardImg1 } name="Бесперерывный баттл" playRoute={ routes.GAME_RUSH } rulesRoute={ routes.RULES }/>
                    </div>
                </div>
            </section>
        );
    }
}


export default ModesComponent;
