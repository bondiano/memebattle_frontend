import React from 'react';
import { routes } from '@/constants';
import Navbar from '../common/Navbar';
import Card from '../common/Card';
import cardImg1 from '../../assets/images/bb.jpg';
import cardImg2 from '../../assets/images/dp.jpg';

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
                        <Card img={cardImg2} name="День первокурсника" playRoute={routes.GAME_TOURNAMENT} rulesRoute={routes.RULES}/>
                        <Card img={cardImg1} name="Бесперерывный баттл" playRoute={routes.GAME_RUSH} rulesRoute={routes.RULES}/>
                    </div>
                </div>
            </section>
        );
    }
}


export default ModesComponent;