import { connect } from 'react-redux';
import LiderboardComponent from 'components/Liderboard';
import actions from '@/ducks/games/rush/actions';
import selectors from '@/ducks/games/rush/selectors';

export default connect(state => ({
    userRating: selectors.selectUserRating(state),
    liderlist: selectors.selectLeaderList(state)
}), {
    getLidersBoard: actions.getLidersRequest
})(LiderboardComponent);
