import React from 'react';
import Meme from './Meme'

class MemePair extends React.Component {
    constructor(props) {
        super(props);
        this.chooseLeftMeme = this.chooseLeftMeme.bind(this);
        this.chooseRightMeme = this.chooseRightMeme.bind(this);        
    }

    chooseLeftMeme() {
        this.props.chooseMeme({ user_id: this.props.userId, right: 0, game_id: 0 });
    }

    chooseRightMeme() {
        this.props.chooseMeme({ user_id: this.props.userId, right: 1, game_id: 0 });        
    }

    render() {
        return (
            <div>
                <div className="row justify-content-center meme-block">
                    <a onClick={ this.chooseLeftMeme }>
                        { this.props.winner >= 0 ? 
                            (this.props.winner === 0 ?
                            <Meme isWin= { true } winner={ this.props.winner } 
                            likes={ this.props.leftMemeLikes } image={ this.props.memeLeftImage }/> :
                            <Meme winner={ this.props.winner } likes={ this.props.leftMemeLikes } 
                            image={ this.props.memeLeftImage }/>) :
                        <Meme image={ this.props.memeLeftImage }/> }
                    </a>
                </div>
                <div className="row justify-content-center meme-block">
                    <a onClick={ this.chooseRightMeme }>
                        { this.props.winner >= 0 ? 
                            (this.props.winner === 1 ?
                            <Meme isWin= { true } winner={ this.props.winner } 
                            likes={ this.props.rightMemeLikes } image={ this.props.memeRightImage }/> :
                            <Meme winner={ this.props.winner } likes={ this.props.rightMemeLikes } 
                            image={ this.props.memeRightImage }/>) :
                        <Meme image={ this.props.memeRightImage }/> }
                    </a>
                </div>
            </div>
        );
    }
}


export default MemePair;