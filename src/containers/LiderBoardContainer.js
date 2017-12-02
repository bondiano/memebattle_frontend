import { connect } from 'react-redux';
import LiderboardComponent from '@/components/Liderboard';
import actions from '../ducks/game/actions';
import selectors from '../ducks/game/selectors';

export default connect(state => ({
    userRating: selectors.selectUserRating(state),
    liderlist: selectors.selectLiderlist(state),
}), {
    getLidersBoard: actions.getLidersRequest,
})(LiderboardComponent);
