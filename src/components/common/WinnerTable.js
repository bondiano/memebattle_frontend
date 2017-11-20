import React from 'react';
import Meme from './Meme';

class WinnerTable extends React.Component {

    render() {
        return (
            <div className="WinnerTable">
                {Object.keys(this.props.winners).map((keys, index) =>
                <div className="row justify-content-center meme-block">
                    <Meme className="" key={keys} image={this.props.winners[keys]}/>
                </div>)}
            </div>
        );
    }
}


export default WinnerTable;