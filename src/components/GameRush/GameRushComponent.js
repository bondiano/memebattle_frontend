import React from 'react';
import Navbar from '../common/Navbar';
import MemePair from '../common/MemPair';
import Timer from '../common/Timer';

const defaultState = {
    coinsCount: 0,
    memeLeftImage: "https://pp.userapi.com/c639921/v639921013/54348/P1XfD7ciP5k.jpg",
    memeRightImage: "https://pp.userapi.com/c834101/v834101399/2dd2e/mMnqAp_dDmU.jpg",
};

class GameRushComponent extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            game: defaultState
        };
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
                    <Timer end='15'/>
                    <MemePair result="left" memeLeftImage={ this.props.leftMeme.leftMemeImg } memeRightImage={ this.props.rightMeme.rightMemeImg }/>
                </div>
            </section>
        );
    }
}


export default GameRushComponent;