import React from 'react';
import Meme from './Meme'
import Hourglass from '../../assets/images/hourglass.svg'   

class Menu extends React.Component {
    render() {
        return (
            <div className="row justify-content-center">
                <div className="col text-center">
                    <img src={ Hourglass } className="Timer"/><p className="Timer-text">Осталось...</p>
                </div>
            </div>
        );
    }
}


export default Menu;