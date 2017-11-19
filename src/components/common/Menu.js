import React from 'react';
import memcoinIcon from '../../assets/images/coin.png';
import Logo from './Logo';

class Menu extends React.Component {
    render() {
        return (
            <aside className="sidebar">
                <div className="menu-content">
                    <div className="col col-xs-3 col-sm-3 col-md-3 col-lg-3 text-center">
                        <Logo />
                    </div>
                    <p>username</p>
                    <span><img src={ memcoinIcon } className="Memcoins" alt="memcoin" id="memcoin"/>
                    <p>coin</p>
                    </span>
                    <h1>Меню</h1>
                    <a className="menu-link" href="#">Лидеры</a>
                    <a className="menu-link" href="#">Правила</a>
                    <a className="menu-link" href="#">О нас</a>
                </div>
            </aside>
        );
    }
}


export default Menu;