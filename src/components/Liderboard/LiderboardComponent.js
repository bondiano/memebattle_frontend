import React from 'react';
import Navbar from '../common/Navbar';

class LiderboardComponent extends React.Component {
    render() {
        return (
            <section className="Liderboard">
            <Navbar/>
            <div className="container">
                <div className="row">
                    <div className="col">
                        <h1>Лидеры</h1>
                    </div>
                </div>
            </div>
        </section>
        );
    }
}


export default LiderboardComponent;