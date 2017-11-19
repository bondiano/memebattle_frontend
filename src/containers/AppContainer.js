import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import AppComponent from '@/components/app';
import userSelectors from '@/ducks/user/selectors';

export default withRouter(connect(state => ({
    user: userSelectors.selectUser(state),
}), {

})(AppComponent));
