import React from 'react';
import Navbar from '@/components/shared/Navbar';
import memcoinIcon from '@/assets/images/coin.png';

class LiderboardComponent extends React.Component {

    constructor(props) {
        super(props);
    }

    componentDidMount(){
        this.props.getLidersBoard({id: this.props.user._id});
    }

    render() {
        return (
            <section className="Liderboard">
                <Navbar username={ this.props.user.username } coins={ this.props.user.memcoin }/>
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <h1 className="page-title">Лидеры</h1>
                        </div>
                    </div>
                    { Object.keys(this.props.liderlist).map((keys, index) =>
                        <div key={keys.toString()} className="row align-items-center liders-item">
                            <div className="col-auto">
                                <p>{ 1 + +keys }</p>
                            </div>
                            <div className="col-auto liders-username">
                                <p>{ this.props.liderlist[keys].username }</p>
                            </div>
                            <div className="col-auto">
                                <img src={ memcoinIcon } className="Memcoins" alt="memcoin" id="memcoin"/>
                            </div>
                            <div className="col-auto">
                                <p>{ this.props.liderlist[keys].coins }</p>
                            </div>
                        </div>
                    ) }
                    { this.props.userRating > 10 ?
                        <div>
                            <div className="row align-items-center">
                                <div className="col-auto">
                                    <p>...</p>
                                </div>
                            </div>
                            <div className="row align-items-center">
                                <div className="col-auto">
                                    <p>{ this.props.userRating }.</p>
                                </div>
                                <div className="col-auto">
                                    <p>{ this.props.user.username ? this.props.user.username : 'username' }</p>
                                </div>
                                <div className="col-auto">
                                    <img src={ memcoinIcon } className="Memcoins" alt="memcoin" id="memcoin"/>
                                </div>
                                <div className="col-auto">
                                    <p>{ this.props.user.memcoin ? this.props.user.memcoin : 'coins' }</p>
                                </div>
                            </div>
                        </div> : null }
                </div>
            </section>
        );
    }
}


export default LiderboardComponent;
