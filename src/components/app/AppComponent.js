import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Routes } from '@/constants';
import { AuthLayout } from '@/components/layouts';
import { RegisterContainer, LoginContainer } from '@/containers/auth';

function AppComponent() {
    return (
        <Switch>
            <AuthLayout exact path={Routes.LOGIN} component={LoginContainer}/>
            <AuthLayout exact path={Routes.REGISTER} component={RegisterContainer}/>
            <Route render={() => <p>Work in progress</p>}/>
        </Switch>
    );
}

export default AppComponent;
