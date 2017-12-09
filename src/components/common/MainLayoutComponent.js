import React from 'react';
import Favicon from 'react-favicon';
import { Route } from 'react-router-dom';
import favicon from './../../assets/images/favicon.ico';

class MainLayoutComponent extends React.Component {
    render() {
        const { component: InnerComponent, ...props } = this.props;
        const innerView = matchProps => (
            <div className="app">
                <Favicon url={ favicon }/>
                <div className="content">
                    <InnerComponent { ...matchProps } { ...props } />
                </div>
            </div>
        );
        
        return (<Route render={ innerView }/>);
    }
}


export default MainLayoutComponent;