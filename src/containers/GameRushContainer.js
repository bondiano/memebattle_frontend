import { connect } from 'react-redux';
import GameRushComponent from '@/components/GameRush';
import actions from '../ducks/game/actions';
import selectors from '../ducks/game/selectors';

export default connect(state => ({
    leftMeme: selectors.selectLeftMeme(state),
    rightMeme: selectors.selectRightMeme(state),
    getWinner: selectors.selectWinner(state),
}), {
    connect: actions.connectToGame,
    getMemesPair: actions.getMemesPair,
    chooseMeme: actions.chooseMeme,
})(GameRushComponent);
