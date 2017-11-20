import React from 'react';
import Navbar from '../common/Navbar';
import MemePair from '../common/MemPair';
import Timer from '../common/Timer';

const defaultState = {
    coinsCount: 0,
    memeLeftImage: "https://pp.userapi.com/c639921/v639921013/54348/P1XfD7ciP5k.jpg",
    memeRightImage: "https://pp.userapi.com/c834101/v834101399/2dd2e/mMnqAp_dDmU.jpg",
}

class GameRushComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            game: defaultState
        };
    }

    render() {
        return (
            <section className="GameRush">
            <Navbar/>
            <div className="container">
                <Timer end='10'/>
                <MemePair result="left" memeLeftImage={ this.state.game.memeLeftImage } memeRightImage={ this.state.game.memeRightImage }/>
            </div>
            </section>
        );
    }
}


export default GameRushComponent;