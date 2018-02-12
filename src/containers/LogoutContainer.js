import { connect } from 'react-redux';
import LogoutComponent from 'components/common/LogoutComponent';
import actions from '../ducks/app/actions';

export default connect(null, {
    logout: actions.logout,
})(LogoutComponent);
