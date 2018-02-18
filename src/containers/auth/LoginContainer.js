import { connect } from 'react-redux';
import LoginComponent from 'components/pages/auth';
import {userActions, userSelectors} from 'ducks/user';

export default connect(state => ({
    userError: userSelectors.getError(state)
}), {
    login: userActions.loginRequest
})(LoginComponent);
