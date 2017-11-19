import React from 'react';
import Navbar from '../common/Navbar';
import memcoinIcon from '../../assets/images/coin.png';

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
                <div className="row align-items-center liders-item">
                    <div className="col-auto">
                        <p>1.</p>
                    </div>
                    <div className="col-auto">
                        <p>username</p>
                    </div>
                    <div className="col-auto">
                    <img src={ memcoinIcon } className="Memcoins" alt="memcoin" id="memcoin"/>
                    </div>
                    <div className="col-auto">
                        <p>coins</p>
                    </div>
                </div>
                <div className="row align-items-center liders-item">
                    <div className="col-auto">
                        <p>2.</p>
                    </div>
                    <div className="col-auto">
                        <p>username</p>
                    </div>
                    <div className="col-auto">
                    <img src={ memcoinIcon } className="Memcoins" alt="memcoin" id="memcoin"/>
                    </div>
                    <div className="col-auto">
                        <p>coins</p>
                    </div>
                </div>
                <div className="row align-items-center liders-item">
                    <div className="col-auto">
                        <p>3.</p>
                    </div>
                    <div className="col-auto">
                        <p>username</p>
                    </div>
                    <div className="col-auto">
                    <img src={ memcoinIcon } className="Memcoins" alt="memcoin" id="memcoin"/>
                    </div>
                    <div className="col-auto">
                        <p>coins</p>
                    </div>
                </div>
                <div className="row align-items-center">
                    <div className="col-auto">
                      <p>...</p>
                    </div>
                </div>
                <div className="row align-items-center">
                    <div className="col-auto">
                        <p>34.</p>
                    </div>
                    <div className="col-auto">
                        <p>username</p>
                    </div>
                    <div className="col-auto">
                    <img src={ memcoinIcon } className="Memcoins" alt="memcoin" id="memcoin"/>
                    </div>
                    <div className="col-auto">
                        <p>coins</p>
                    </div>
                </div>
            </div>
        </section>
        );
    }
}


export default LiderboardComponent;