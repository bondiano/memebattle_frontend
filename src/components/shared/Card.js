import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class CardComponent extends React.Component {
    propTypes = {
        img: PropTypes.string.isRequired,
        playRoute: PropTypes.string.isRequired,
        rulesRoute: PropTypes.string.isRequired
    };

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
