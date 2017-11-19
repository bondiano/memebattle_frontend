import React from 'react';

class CardComponent extends React.Component {

    render() {
        return (
            <div className="card game-card">
                <img className="card-img-top" src={ this.props.img } alt="Card image cap"/>
                <div className="card-body">
                <div className="row justify-content-center">
                    <a className="card-link" href="#">ИГРАТЬ</a>
                    <a className="card-link" href="#">ПРАВИЛА</a>
                </div>
            </div>
            </div>
        );
    }
}


export default CardComponent;