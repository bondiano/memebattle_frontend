import React from 'react';
import { Link } from 'react-router-dom';

class CardComponent extends React.Component {

    render() {
        return (
            <div className="card game-card">
                <img className="card-img-top" src={ this.props.img } alt="Card image cap"/>
                <div className="card-body">
                <div className="row justify-content-center">
                    <Link className="card-link" to={ this.props.playRoute }>
                        ИГРАТЬ
                    </Link>
                    <Link className="card-link" to={ this.props.rulesRoute }>
                        ПРАВИЛА
                    </Link>
                </div>
            </div>
            </div>
        );
    }
}


export default CardComponent;