import '@babel/polyfill';
import React from 'react';
import { render } from 'react-dom';
import { ConnectedRouter } from 'react-router-redux';
import { AppContainer } from 'react-hot-loader';
import { Provider } from 'react-redux';

import AppComponent from 'containers/AppContainer';
import store, { history } from 'store';

const appElement = document.getElementById('app');

const renderApp = Component =>
    render(
        <AppContainer>
            <Provider store={ store }>
                <ConnectedRouter history={ history }>
                    <Component/>
                </ConnectedRouter>
            </Provider>
        </AppContainer>,
        appElement
    );

renderApp(AppComponent);

if (module.hot) {
    module.hot.accept('./components/app/AppComponent', () => renderApp(AppComponent));
}
