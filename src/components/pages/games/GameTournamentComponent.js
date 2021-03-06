import React from 'react';
import PropTypes from 'prop-types';

import Navbar from '@/components/shared/Navbar';
import MemePair from '@/components/shared/MemPair';
import Timer from '@/components/shared/Timer';
import WinnerTable from '@/components/shared/WinnerTable';

/*
    stage = 1 - at game,
    stage = 0 - at winertable
*/

const gameState = {
    stage: 0,
    coinsCount: 0,
    memeLeftImage: 'https://pp.userapi.com/c639921/v639921013/54348/P1XfD7ciP5k.jpg',
    memeRightImage: 'https://pp.userapi.com/c834101/v834101399/2dd2e/mMnqAp_dDmU.jpg'
};

const winnerState = {
    1 : 'https://pp.userapi.com/c639921/v639921013/54348/P1XfD7ciP5k.jpg',
    2 : 'https://pp.userapi.com/c834101/v834101399/2dd2e/mMnqAp_dDmU.jpg',
    3 : 'https://pp.userapi.com/c840431/v840431751/23d8a/6Et3-1wYJyY.jpg',
    4 : 'https://pp.userapi.com/c639731/v639731133/5c4ad/A3rT5xBKae4.jpg'
};

class GameTournamentComponent extends React.Component {
    propTypes = {
        user: PropTypes.shape({
            username: PropTypes.string.isRequired,
            memcoin: PropTypes.number.isRequired
        }).isRequired
    };

    constructor(props) {
        super(props);
        this.state = {
            game: gameState,
            winners: winnerState
        };
    }

    render() {
        return (
            <section className="GameRush">
                <Navbar username={ this.props.user.username } coins={ this.props.user.memcoin }/>
                <div className="container">
                    <Timer end='10'/>
                    {this.state.game.stage ?
                        <MemePair memeLeftImage={ this.state.game.memeLeftImage } memeRightImage={ this.state.game.memeRightImage }/>:
                        <WinnerTable winners= { this.state.winners }/>
                    }
                </div>
            </section>
        );
    }
}


export default GameTournamentComponent;
