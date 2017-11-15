import { connect } from 'react-redux';
import AuthComponent from '@/components/Auth';
import actions from '../ducks/user/actions';

export default connect(null, {
    login: actions.loginRequest,
})(AuthComponent);