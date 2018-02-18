import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {GameRushComponent} from 'components/page/games';
import {gameActions, gameSelectors} from 'ducks/game';


class GameRushContainer extends React.Component {
    static propTypes = {
        connect: PropTypes.func.isRequired,
        chooseMeme: PropTypes.func.isRequired
    };

    componentDidMount() {
        this.props.connect({user_id: user_id, game_id: 0});
        this.props.getMemesPair({user_id: user_id, game_id: 0});
    }

    render() {
        return <GameRushComponent/>;
    }
}

export default connect(state => ({
    leftMeme: gameSelectors.selectLeftMeme(state),
    rightMeme: gameSelectors.selectRightMeme(state),
    winner: gameSelectors.selectWinner(state)
}), {
    connect: gameActions.connectToGame,
    getMemesPair: gameActions.getMemesPair,
    chooseMeme: gameActions.chooseMeme
})(GameRushContainer);
