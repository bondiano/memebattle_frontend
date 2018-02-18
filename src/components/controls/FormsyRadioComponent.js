import React from 'react';
import PropTypes from 'prop-types';
import {HOC} from 'formsy-react';
import RadioComponent from './RadioComponent';

class FormsyRadioComponent extends React.Component {
    constructor(props) {
        super(props);
        this._changeValue = this._changeValue.bind(this);
    }

    componentDidMount() {
        const value = this.props.value || '';

        this.props.setValue(value);
    }

    /**
     * Set a new value for RadioComponent
     *
     * @param {string} value
     */
    _changeValue(value) {
        this.props.setValue(value);
    }

    render() {
        return (
            <RadioComponent
                value={this.props.getValue()}
                onChange={this._changeValue}
                required={this.props.isRequired()}
                {...this.props}
            />
        );
    }
}

FormsyRadioComponent.propTypes = {
    name: PropTypes.string.isRequired,
    items: PropTypes.array.isRequired,
    getValue: PropTypes.func.isRequired,
    setValue: PropTypes.func.isRequired,
    isRequired: PropTypes.func.isRequired,
    value: PropTypes.string.isRequired
};

export default HOC(FormsyRadioComponent);
