import React from 'react';
import {connect} from 'react-redux';

class VkAuthContainer extends React.Component{

    render() {
        return (
            <h2>VkAuthContainer</h2>
        )
    }
}

export default connect()(VkAuthContainer);
