import React from 'react';
import PropTypes from 'prop-types';
import {HOC} from 'formsy-react';
import SelectComponent from './SelectComponent';

function FormsySelectComponent (props){
    /**
     * Handle select change
     *
     * @param {string} value
     * @private
     */
    const _onChange = (value) => {
        if (props.onChange) {
            props.onChange(value);
        }
        return props.setValue(value);
    };

    return (
        <SelectComponent
            name={props.name}
            value={props.getValue()}
            label={props.label}
            options={props.options}
            required={props.isRequired()}
            onChange={_onChange}
        />
    );
}

FormsySelectComponent.propTypes = {
    name: PropTypes.string.isRequired,
    options: PropTypes.array.isRequired,
    getValue: PropTypes.func.isRequired,
    setValue: PropTypes.func.isRequired,
    isRequired: PropTypes.func.isRequired,
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    label: PropTypes.string,
    onChange: PropTypes.func
};

export default HOC(FormsySelectComponent);
