import { ConnectedRouter } from 'react-router-redux';
import { AppContainer } from 'react-hot-loader';
import { Provider } from 'react-redux';
import { render } from 'react-dom';
import React from 'react';

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
    module.hot.accept('./components/app', () => renderApp(AppComponent));
}
