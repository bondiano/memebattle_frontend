import {Provider} from 'react-redux';
import {render} from 'react-dom';
import React from 'react';
import store from './store';

import AppComponent from '@/containers/AppContainer';

const appElement = document.getElementById('app');

const renderApp = Component =>
    render(
        <Provider store={store}>
            <Component/>
        </Provider>,
        appElement
    );

renderApp(AppComponent);
