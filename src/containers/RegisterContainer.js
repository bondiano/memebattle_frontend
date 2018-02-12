import { connect } from 'react-redux';
import RegisterComponent from 'components/Register';
import actions from '../ducks/user/actions';
import userSelectors from '../ducks/user/selectors';

export default connect(state => ({
    userError: userSelectors.getError(state),    
}), {
    register: actions.registerRequest,   
})(RegisterComponent);
