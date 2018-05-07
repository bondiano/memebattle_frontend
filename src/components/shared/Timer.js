import React from 'react';
import PropTypes from 'prop-types';

import Hourglass from '@/assets/images/hourglass.svg';

class Menu extends React.Component {
    propTypes = {
        end: PropTypes.number.isRequired
    };

    constructor(props) {
        super(props);
        this.state = {
            time: this.props.end
        };
        this.mounted = false;
        this.startTimer = this.startTimer.bind(this);
    }

    componentWillMount() {
        this.mounted = true;
    }

    componentDidMount(){
        this.startTimer();
    }

    componentWillUnmount() {
        this.mounted = false;
    }

    componentWillUpdate(nextProps) {
        if (this.props.end !== nextProps.end) {
            this.setState({...this.state, time: nextProps.end});
            this.startTimer();
        }
    }

    startTimer() {
        clearInterval(this.intervalID);
        if (this.state.time > 0) {
            this.intervalID = setInterval(this.tick.bind(this), 1000);
        }
    }

    tick() {
        if(!this.mounted) {return;}

        this.setState((prevState) => ({
            ...prevState,
            time: this.state.time - 1
        }));

        if(this.state.time <= 0){
            clearInterval(this.intervalID);
        }
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
