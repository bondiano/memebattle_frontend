import { connect } from 'react-redux';
import AuthComponent from '@/components/Auth';
import actions from '../ducks/user/actions';
import userSelectors from '../ducks/user/selectors';

export default connect(state => ({
    userError: userSelectors.getError(state),    
}), {
    login: actions.loginRequest,
})(AuthComponent);