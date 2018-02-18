import React, {Component} from 'react';
import PropTypes from 'prop-types';

class RadioComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            value: props.value
        };
    }

    /**
     * Sets the value of the switch to the state on click
     *
     * @param {string} value
     */
    _changeValue(value) {
        this.setState({value});
        this.setState({value}, () => this.props.onChange(value));
    }

    render() {
        return (
            this.props.items.map(item => {
                return (
                    <span key={item.value}>
                        <input
                            type='radio'
                            className='radio'
                            name={this.props.name}
                            value={item.value}
                            id={item.value}
                            onChange={this._changeValue.bind(this, item.value)}
                            checked={this.state.value === item.value}
                        />
                        <label htmlFor={item.value}>{item.label}</label>
                    </span>
                );
            })
        );
    }
}

RadioComponent.propTypes = {
    onChange: PropTypes.func.isRequired,
    name: PropTypes.string.isRequired,
    items: PropTypes.arrayOf(PropTypes.object).isRequired,
    value: PropTypes.string
};

export default RadioComponent;
