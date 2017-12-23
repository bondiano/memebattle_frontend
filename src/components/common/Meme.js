import React from 'react';

class Meme extends React.PureComponent {
    render() {
        return (
            <div className="Meme">
                { this.props.winner >= 0 ? 
                (<div>
                    <img src={ this.props.image } className="meme-image img-fluid" alt="Meme" id="meme"/> 
                    <span className="meme-likes">
                        <p> { this.props.isWin ? 'Победитель!' : '' } <br/> Проголосовало: { this.props.likes }</p>
                    </span>
                </div>) :
                (<div>
                        <img src={ this.props.image } className="meme-image img-fluid" alt="Meme" id="meme"/>
                </div>) }
            </div>
        );
    }
}


export default Meme;