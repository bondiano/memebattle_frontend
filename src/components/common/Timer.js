import React from 'react';
import Meme from './Meme'
import Hourglass from '../../assets/images/hourglass.svg'   

class Menu extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            time: this.props.end,
        };
    }

    componentDidMount(){
        if (this.state.time > 0) {
            const intervalID = setInterval(this.tick.bind(this), 1000);
        }
    }

    tick(){
        if(this.state.time <= 0){
            clearInterval(intervalID);
        }
        this.setState((prevState) => ({
            ...prevState,
            time: this.state.time-1,
        }));
    }

    render() {
        return (
            <div className="row justify-content-center">
                <div className="col text-center">
                    <img src={ Hourglass } className="Timer"/><p className="Timer-text">{ this.state.time }</p>
                </div>
            </div>
        );
    }
}


export default Menu;