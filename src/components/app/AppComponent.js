import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { Switch } from 'react-router-dom';
import { Routes } from 'constants.js';
import { MainLayout } from 'components/layouts';
import { RegisterContainer, LoginContainer } from 'containers/auth';

class AppComponent extends Component {
    render() {
        return (
            <Switch>
                <MainLayout
                    path={Routes.LOGIN}
                    exact component={ LoginContainer }
                />
                <MainLayout
                    path={Routes.REGISTER}
                    component={ RegisterContainer }
                />
                <Route render={() => <p>Not ready</p>}/>
            </Switch>
        );
    }
}

export default AppComponent;
