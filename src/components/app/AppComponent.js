import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import RegisterContainer from '../../containers/RegisterContainer';
import AuthContainer from '../../containers/AuthContainer'

class AppComponent extends React.Component {
    render() {
        return (
            <Router>
                <Switch>
                    <Route exact path="/" component={AuthContainer}/>
                    <Route exact path="/register" component={RegisterContainer}/>
                </Switch>
            </Router>
        );
    }
}


export default AppComponent;
