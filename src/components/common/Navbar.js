import React from 'react';
import memcoinIcon from '../../assets/images/coin.png';
import Menu from './Menu';

class Navbar extends React.Component {
    render() {
        return (
            <nav className="navbar navbar-meme">
                <div className="row justify-content-between">
                    <div className="col-auto">
                            <input type="checkbox" id="menuToggler" className="input-toggler"/>
                            <label htmlFor="menuToggler" className="menu-toggler"> 
                                    <span className="menu-toggler__line"></span>
                                    <span className="menu-toggler__line"></span>
                                    <span className="menu-toggler__line"></span> 
                            </label>
                                <Menu username={ this.props.username } coins={ this.props.coins }/>
                    </div>
                    <div className="col-auto">
                        <p>{this.props.username ? this.props.username : 'username'}</p>
                        <img src={ memcoinIcon } className="Memcoins" alt="memcoin" id="memcoin"/>
                        <p>{ this.props.coins ? this.props.coins : 'coins' }</p>
                    </div>
                </div>
            </nav>
        );
    }
}


export default Navbar;