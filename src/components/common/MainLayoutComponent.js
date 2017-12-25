import React from 'react';
import Favicon from 'react-favicon';
import { Route } from 'react-router-dom';
import favicon from './../../assets/images/favicon.ico';
import { routes } from '../../constants';
import { YMInitializer } from 'react-yandex-metrika';

class MainLayoutComponent extends React.Component {
    componentWillUpdate(nextProps, nextState) {
        if (this.props.user && nextProps.path !== routes.GAME_RUSH && nextProps.path !== this.props.path) {
            this.props.leaveFromGame({user_id: this.props.user._id, game_id: 0});
        }
    }

    render() {
        const { component: InnerComponent, ...props } = this.props;
        const innerView = matchProps => (
            <div className="app">
                <Favicon url={ favicon }/>
                <YMInitializer accounts={[47133483]} options={{ clickmap:true,
                    trackLinks:true,
                    accurateTrackBounce:true,
                    webvisor: true,
                    userParams: this.props.user ? ( this.props.user._id ? this.props.user._id : null ) : null
                }} />
                <div className="content">
                    <InnerComponent { ...matchProps } { ...props } />
                </div>
            </div>
        );
        return (<Route render={ innerView }/>);
    }
}


export default MainLayoutComponent;