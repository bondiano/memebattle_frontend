import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { routes } from '../../constants';
import MainLayoutComponent from '../common/MainLayoutComponent'
import RegisterContainer from '../../containers/RegisterContainer';
import AuthContainer from '../../containers/AuthContainer';

class AppComponent extends React.Component {
    render() {
        return (
            <Router>
                <Switch>
                    {
                        
                        <MainLayoutComponent exact path={routes.ROOT} component={AuthContainer} />

                    }
                    <MainLayoutComponent path={routes.REGISTER} component={RegisterContainer}/>
                </Switch>
            </Router>
        );
    }
}


export default AppComponent;
