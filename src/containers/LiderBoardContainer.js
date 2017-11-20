import { connect } from 'react-redux';
import LiderboardComponent from '@/components/Liderboard';
import actions from '../ducks/game/actions';

export default connect(null, {
    getLidersBoard: actions.getLidersRequest,
})(LiderboardComponent);
