import React from 'react';

class Meme extends React.PureComponent {
    render() {
        return (
            <div>
                { this.props.winner >= 0 ? 
                (<div>
                    <img src={ this.props.image } className="meme-image img-fluid" alt="Meme" id="meme"/> 
                    { this.props.isWin ? <p>Победитель!</p> : '' }
                    <p>Проголосовало: { this.props.likes }</p>
                </div>) :
                (<div>
                        <img src={ this.props.image } className="meme-image img-fluid" alt="Meme" id="meme"/>
                </div>) }
            </div>
        );
    }
}


export default Meme;