import React from 'react';
import Meme from './Meme';
import Hourglass from '../../assets/images/hourglass.svg';

class Menu extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            time: this.props.end,
        };
        this.mounted = false;
    };

    componentWillMount() {
		this.mounted = true;
    };
    
    componentDidMount(){
        if (this.state.time > 0) {
            this.intervalID = setInterval(this.tick.bind(this), 1000);
        }
    };
    
    componentWillUnmount() {
        this.mounted = false;
	}
    
    tick(){
        if(!this.mounted) return;
        
        this.setState((prevState) => ({
            ...prevState,
            time: --this.state.time,
        }));
        if(this.state.time <= 0){
            clearInterval(this.intervalID);
        }
    };

    render() {
        return (
            <div className="row justify-content-center">
                <div className="col text-center">
                    <img src={ Hourglass } className="Timer"/><p className="Timer-text">{ this.state.time }</p>
                </div>
            </div>
        );
    };
}


export default Menu;