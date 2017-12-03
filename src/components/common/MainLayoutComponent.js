import React from 'react';
import Favicon from 'react-favicon';
import { Route } from 'react-router-dom';

class MainLayoutComponent extends React.Component {
    render() {
        const { component: InnerComponent, ...props } = this.props;
        const innerView = matchProps => (
            <div className="app">
                <Favicon url='https://psv4.userapi.com/c834701/u144940172/docs/d8/e7505d9126b2/favicon_2.ico'/>
                <div className="content">
                    <InnerComponent {...matchProps} {...props} />
                </div>
            </div>
        );
        
        return (<Route render={ innerView }/>);
    }
}


export default MainLayoutComponent;