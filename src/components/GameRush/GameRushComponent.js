import React from 'react';
import Navbar from '../common/Navbar';
import MemePair from '../common/MemPair';
import Timer from '../common/Timer';

class GameRushComponent extends React.Component {
    constructor(props) {
        super(props);
    }
    
    componentDidMount() {
        const user_id = this.props.user._id;
        this.props.connect({user_id: user_id, game_id: 0});
        this.props.getMemesPair({user_id: user_id, game_id: 0});
    }
    
    render() {
        return (
            <section className="GameRush">
                <Navbar username={ this.props.user.username } coins={ this.props.user.memcoin }/>
                <div className="container">
                    { this.props.winner === -2 ? <p style={{ textAlign: 'center' }}>Ожидание нового раунда</p> : 
                        (this.props.winner >= 0 ? <Timer end={5} /> : <Timer end={15}/>) }

                    <MemePair winner={ this.props.winner } 
                    leftMemeLikes={ + this.props.leftMeme.leftLikes }
                    rightMemeLikes={ + this.props.rightMeme.rightLikes }
                    chooseMeme={ this.props.chooseMeme }
                    memeLeftImage={ this.props.leftMeme.leftMemeImg } 
                    memeRightImage={ this.props.rightMeme.rightMemeImg }
                    userId = { this.props.user._id }/>
                </div>
            </section>
        );
    }
}


export default GameRushComponent;