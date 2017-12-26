import React from 'react';
import Meme from './Meme';
import likeImg from '../../assets/images/onimagelike.png';

const defaultState = {
    liked: false,
    likedLeft: false,
    likedRight: false,
};

class MemePair extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            liked: defaultState
        };
        this.chooseLeftMeme = this.chooseLeftMeme.bind(this);
        this.chooseRightMeme = this.chooseRightMeme.bind(this);     
        this.setLike = this.setLike.bind(this);
    }

    chooseLeftMeme() {
        this.props.chooseMeme({ user_id: this.props.userId, right: 0, game_id: 0 });
        this.setLike({likedLeft: 1, liked: 1});
    }

    chooseRightMeme() {
        this.props.chooseMeme({ user_id: this.props.userId, right: 1, game_id: 0 });        
        this.setLike({likedRight: 1, liked: 1});
    }

    componentWillUpdate(nextProps, nextState) {
        if (this.props.memeLeftImage !== nextProps.memeLeftImage) {
            this.setLike({likedLeft: 0, liked: 0});
        }
        if (this.props.memeRightImage !== nextProps.memeRightImage) {
            this.setLike({likedRight: 0, liked: 0});
        }
    }

    setLike(data) {
        this.setState((prevState) => ({
            ...prevState,
            liked: {
                ...prevState.liked,
                ...data,
            }
        }));
    }

    render() {
        return (
            <div>
                <div className="row justify-content-center meme-block">
                    { this.state.liked.likedLeft ? 
                        <img src={ likeImg } className="like-image img-fluid" alt="Meme" id="meme"/> : '' }
                    { this.props.winner === -2 ? 
                        <Meme image={ this.props.memeLeftImage }/> : 
                            (this.props.winner === -1 ? 
                            <a className={ this.state.liked.liked ? '' : "chooseMeme" } onClick={ this.state.liked.liked ? (() => {}) : this.chooseLeftMeme }>
                                <Meme winner={ this.props.winner } likes={ this.props.leftMemeLikes } 
                                image={ this.props.memeLeftImage }/>
                            </a> : 
                                (this.props.winner === 0 ? 
                                    <Meme isWin= { true } winner={ this.props.winner } likes={ this.props.leftMemeLikes } 
                                    image={ this.props.memeLeftImage }/> : 
                                        <Meme winner={ this.props.winner } likes={ this.props.leftMemeLikes } 
                                        image={ this.props.memeLeftImage }/>)) }
                </div>
                <div className="row justify-content-center meme-block">
                { this.state.liked.likedRight ? 
                        <img src={ likeImg } className="like-image image-spin img-fluid" alt="Meme" id="meme"/> : '' }
                    { this.props.winner === -2 ? 
                        <Meme image={ this.props.memeRightImage }/> : 
                            (this.props.winner === -1 ? 
                            <a className={ this.state.liked.liked ? '' : "chooseMeme" } onClick={ this.state.liked.liked ? (() => {}) : this.chooseRightMeme}>
                                <Meme winner={ this.props.winner } likes={ this.props.rightMemeLikes } 
                                image={ this.props.memeRightImage }/>
                            </a> : 
                                (this.props.winner === 1 ? 
                                    <Meme isWin= { true } winner={ this.props.winner } likes={ this.props.rightMemeLikes } 
                                    image={ this.props.memeRightImage }/> : 
                                        <Meme winner={ this.props.winner } likes={ this.props.rightMemeLikes } 
                                        image={ this.props.memeRightImage }/>)) }
                </div>
            </div>
        );
    }
}


export default MemePair;