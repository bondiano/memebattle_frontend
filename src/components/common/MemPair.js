import React from 'react';
import Meme from './Meme'

class MemePair extends React.Component {
    render() {
        return (
            <div>
                <div className="row justify-content-center meme-block">
                    { this.props.winner >= 0 ? 
                        (this.props.winner === 0 ?
                        <Meme isWin= { true } winner={ this.props.winner } 
                        likes={ this.props.leftMemeLikes } image={ this.props.memeLeftImage }/> :
                        <Meme winner={ this.props.winner } likes={ this.props.leftMemeLikes } 
                        image={ this.props.memeLeftImage }/>) :
                    <Meme image={ this.props.memeLeftImage }/> }
                </div>
                <div className="row justify-content-center meme-block">
                    { this.props.winner >= 0 ? 
                        (this.props.winner === 1 ?
                        <Meme isWin= { true } winner={ this.props.winner } 
                        likes={ this.props.rightMemeLikes } image={ this.props.memeRightImage }/> :
                        <Meme winner={ this.props.winner } likes={ this.props.rightMemeLikes } 
                        image={ this.props.memeRightImage }/>) :
                    <Meme image={ this.props.memeRightImage }/> }
                </div>
            </div>
        );
    }
}


export default MemePair;