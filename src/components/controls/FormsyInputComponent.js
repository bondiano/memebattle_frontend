import React from 'react';
import PropTypes from 'prop-types';
import {withFormsy} from 'formsy-react';
import InputComponent from './InputComponent';

class FormsyInputComponent extends React.Component {
    /**
     * Handle input change
     *
     * @param {Event} e
     * @private
     */
    _onChange = (e) => {
        if (this.props.onChange) {
            this.props.onChange(e);
        }
        this.props.setValue(e.target.value);
    };

    render() {
        return (
            <InputComponent
                name={this.props.name}
                value={this.props.getValue()}
                onChange={this._onChange}
                componentRef={this.props.componentRef}
                showError={!this.props.isValid() && this.props.isFormSubmitted()}
                hasError={this.props.hasError}
                label={this.props.label}
                placeholder={this.props.placeholder}
                min={this.props.min}
                max={this.props.max}
                size={this.props.size}
                type={this.props.type}
                readOnly={this.props.readOnly}
                labelClasses={this.props.labelClasses}
                inputClasses={this.props.inputClasses}
            />
        );
    }
}

FormsyInputComponent.propTypes = {
    name: PropTypes.string.isRequired,
    getValue: PropTypes.func.isRequired,
    setValue: PropTypes.func.isRequired,
    componentRef: PropTypes.func,
    value: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
    ]),
    isValid: PropTypes.func.isRequired,
    isFormSubmitted: PropTypes.func.isRequired,
    isRequired: PropTypes.func.isRequired,
    hasError: PropTypes.bool.isRequired,
    labelClasses: PropTypes.string.isRequired,
    inputClasses: PropTypes.string.isRequired,
    onChange: PropTypes.func,
    readOnly: PropTypes.bool,
    type: PropTypes.string,
    label: PropTypes.string,
    size: PropTypes.number,
    min: PropTypes.number,
    max: PropTypes.number,
    placeholder: PropTypes.string
};

export default withFormsy(FormsyInputComponent);
