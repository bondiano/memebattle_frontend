import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

class MainLayoutComponent extends React.Component {
    render() {
        const { component: InnerComponent, ...props } = this.props;
        const innerView = matchProps => (
            <div className="app">
                <div className="content">
                    <InnerComponent {...matchProps} />
                </div>
            </div>
        );
        
        return (<Route render={innerView} {...props} />);
    }
}


export default MainLayoutComponent;