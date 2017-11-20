import React from 'react';
import Meme from './Meme'

class MemePair extends React.Component {
    render() {
        return (
            <div>
                <div className="row justify-content-center meme-block">
                    <Meme image={this.props.memeLeftImage}/>
                </div>
                <div className="row justify-content-center meme-block">
                    <Meme image={this.props.memeRightImage}/>
                </div>
            </div>
        );
    }
}


export default MemePair;