import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import RegisterConrainer from '../../containers/RegisterConrainer';

class AppComponent extends React.Component {
    render() {
        return (
            <Router>
                <Switch>
                    <Route exact path="/" component={RegisterConrainer}/>
                </Switch>
            </Router>
        );
    }
}


export default AppComponent;
