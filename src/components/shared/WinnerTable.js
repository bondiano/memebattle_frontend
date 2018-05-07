import React from 'react';
import PropTypes from 'prop-types';

import Meme from './Meme';

class WinnerTable extends React.Component {
    propTypes = {
        winners: PropTypes.object.isRequired
    };

    render() {
        return (
            <div className="WinnerTable">
                <div className="row justify-content-center">
                    <div className="col text-center">
                        <h1>Прошли дальше:</h1>
                    </div>
                </div>
                { Object.keys(this.props.winners).map((keys, index) =>
                    <div key={index} className="row justify-content-center meme-block">
                        <Meme className="" image={ this.props.winners[keys] }/>
                    </div>) }
            </div>
        );
    }
}


export default WinnerTable;
