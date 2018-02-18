import { connect } from 'react-redux';
import RegisterComponent from 'components/pages/auth';
import {userActions, userSelectors} from 'ducks/user';

export default connect(state => ({
    userError: userSelectors.getError(state)
}), {
    register: userActions.registerRequest
})(RegisterComponent);
