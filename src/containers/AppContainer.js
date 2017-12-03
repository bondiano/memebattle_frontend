import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import AppComponent from '@/components/app';
import userSelectors from '@/ducks/user/selectors';
import userActions from '../ducks/user/actions';
import appSelectors from '@/ducks/app/selectors';

export default withRouter(connect(state => ({
    user: userSelectors.selectUser(state),
    wasLogin: userSelectors.checkLogin(state),
    error: appSelectors.getError(state),
}), {
    checkLogin: userActions.checkLoginRequest,
})(AppComponent));
