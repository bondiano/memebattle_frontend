import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { Routes } from '@/constants';
import { MainLayout } from '@/components/layouts';
import { RegisterContainer, LoginContainer } from '@/containers/auth';

class AppComponent extends Component {
    render() {
        return (
            <Switch>
                <MainLayout exact path={Routes.LOGIN} component={LoginContainer}/>
                <MainLayout exact path={Routes.REGISTER} component={RegisterContainer}/>
                <Route render={() => <p>Not ready</p>}/>
            </Switch>
        );
    }
}

export default AppComponent;
