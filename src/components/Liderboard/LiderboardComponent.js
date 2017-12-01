import React from 'react';
import Navbar from '../common/Navbar';
import memcoinIcon from '../../assets/images/coin.png';

const defaultLiderlist= {
    "1" : {
        username: "meow",
        coins: "100",
    },
}

class LiderboardComponent extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            liderlist: defaultLiderlist,
        };
    }

    componentDidMount(){
        this.props.getLidersBoard({id:window.localStorage.getItem('id')});
        console.log(this.store);
    }

    render() {
        return (
            <section className="Liderboard">
            <Navbar username={ this.props.username } coins={ this.props.coins }/>
            <div className="container">
                <div className="row">
                    <div className="col">
                        <h1 className="page-title">Лидеры</h1>
                    </div>
                </div>
            {Object.keys(this.state.liderlist).map((keys, index) =>
                <div key={keys.toString()}  className="row align-items-center liders-item">
                    <div className="col-auto">
                        <p>{ keys }</p>
                    </div>
                    <div className="col-auto">
                        <p>{ this.state.liderlist[keys].username }</p>
                    </div>
                    <div className="col-auto">
                    <img src={ memcoinIcon } className="Memcoins" alt="memcoin" id="memcoin"/>
                    </div>
                    <div className="col-auto">
                        <p>{ this.state.liderlist[keys].coins }</p>
                    </div>
                </div>
                )
            }
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