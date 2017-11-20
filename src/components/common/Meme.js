import React from 'react';

class Meme extends React.Component {
    render() {
        return (
            <div>
                <img src={ this.props.image } className="meme-image img-fluid" alt="Meme" id="meme"/>
            </div>
        );
    }
}


export default Meme;