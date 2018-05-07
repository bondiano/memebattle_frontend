import React, {Component} from 'react';
import PropTypes from 'prop-types';

export default class SelectComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            value: props.value
        };
    }

    static propTypes = {
        value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
        options: PropTypes.arrayOf(PropTypes.shape({
            value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
            name: PropTypes.string.isRequired
        })).isRequired,
        name: PropTypes.string.isRequired,
        onChange: PropTypes.func.isRequired,
        label: PropTypes.string
    };

    /**
     * Sets the value to state and invokes formsy data form manager
     * @param {Object} e - event
     */
    _changeValue = (e) => {
        const {value} = e.currentTarget;

        this.setState({value}, () => this.props.onChange(value));
    };

    render() {
        const
            {name, options, label} = this.props,
            {value} = this.state;

        return (
            <>
                {label && <label htmlFor={name} key='label' dangerouslySetInnerHTML={{__html: label}}/>}
                <select
                    name={name}
                    id={name}
                    value={value}
                    onChange={this._changeValue}
                    key='select'
                >
                    {
                        options.map((option, i) => (
                            <option key={`${option.get('name')}_${i}`} value={option.get('value')}>
                                {option.get('name')}
                            </option>
                        ))
                    }
                </select>
            </>
        );
    }
}
