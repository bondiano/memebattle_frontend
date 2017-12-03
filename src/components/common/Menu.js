import React from 'react';
import memcoinIcon from '../../assets/images/coin_shadow_menu.png';
import Logo from './Logo';
import { Link } from 'react-router-dom';
import { routes } from '@/constants';

class Menu extends React.Component {
    render() {
        return (
            <aside className="sidebar">
                <div className="menu-content">
                    <div className="row justify-content-center">
                        <div className="col-xs-1 col-sm-2 col-md-3 col-lg-3 text-center">
                            <Logo />
                        </div>
                    </div>
                    <p>{ this.props.username ? this.props.username : 'username' }</p>
                    <span><img src={ memcoinIcon } className="Memcoins" alt="memcoin" id="memcoin"/>
                    <p>{ this.props.coins ? this.props.coins : 'coins' }</p>
                    </span>
                    <h1>Меню</h1>
                    <Link className="menu-link" to={routes.LIDERBOARD}>
                        Лидеры
                    </Link>
                    <Link className="menu-link" to={routes.RULES}>
                        Правила
                    </Link>
                    <Link className="menu-link" to={routes.ABOUT}>
                        О нас
                    </Link>
                </div>
            </aside>
        );
    }
}


export default Menu;