import { connect } from 'react-redux';
import RegisterComponent from '@/components/Register';
import actions from '../ducks/user/actions';

export default connect(null, {
    register: actions.registerRequest,
})(RegisterComponent);
