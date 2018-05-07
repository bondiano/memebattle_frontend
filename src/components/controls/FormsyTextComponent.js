import React from 'react';
import PropTypes from 'prop-types';
import {withFormsy} from 'formsy-react';
import TextComponent from './TextComponent';

class FormsyTextComponent extends React.Component {
    /**
     * Handle input change
     *
     * @param {Event} e
     * @private
     */
    _onChange = (e) => {
        this.props.setValue(e.target.value);
    };

    render() {
        return (
            <TextComponent
                rows={this.props.rows}
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
            />
        );
    }
}

FormsyTextComponent.propTypes = {
    rows: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    getValue: PropTypes.func.isRequired,
    setValue: PropTypes.func.isRequired,
    componentRef: PropTypes.func,
    value: PropTypes.string.isRequired,
    isValid: PropTypes.func.isRequired,
    isFormSubmitted: PropTypes.func.isRequired,
    isRequired: PropTypes.func.isRequired,
    hasError: PropTypes.bool.isRequired,
    readOnly: PropTypes.bool,
    type: PropTypes.string,
    label: PropTypes.string,
    size: PropTypes.number,
    min: PropTypes.number,
    max: PropTypes.number,
    placeholder: PropTypes.string
};

export default withFormsy(FormsyTextComponent);
