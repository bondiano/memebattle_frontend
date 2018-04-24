import React from 'react';
import { routes } from 'constants';
import Navbar from '../../shared/Navbar';
import Card from '../../shared/Card';
import cardImg1 from '../../../assets/images/bb.jpg';

class ModesComponent extends React.Component {

    render() {
        return (
            <section className="Modes">
                <Navbar username={ this.props.user.username } coins={ this.props.user.memcoin }/>
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