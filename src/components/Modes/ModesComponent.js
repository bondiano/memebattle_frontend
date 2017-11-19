import React from 'react';
import Navbar from '../common/Navbar';
import Card from '../common/Card';
import cardImg1 from '../../assets/images/bb.jpg';
import cardImg2 from '../../assets/images/dp.jpg';

class ModesComponent extends React.Component {

    render() {
        return (
            <section className="Modes">
                <Navbar/>
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <h1>Режимы</h1>
                        </div>
                        <Card img={cardImg2} name="День первокурсника"/>
                        <Card img={cardImg1} name="Бесперерывный баттл"/>
                    </div>
                </div>
            </section>
        );
    }
}


export default ModesComponent;