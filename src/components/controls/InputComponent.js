import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

function InputComponent(props) {
    const {label, componentRef, showError, hasError, labelClasses, inputClasses, ...restProps} = props;

    return (
        <>
            {label && <label key="label" className={labelClasses} htmlFor={restProps.name} dangerouslySetInnerHTML={{__html: label}}/>}
            <input
                key="input"
                ref={componentRef}
                id={restProps.name}
                {...restProps}
                className={classNames(inputClasses, {invalid: showError || hasError})}
            />
        </>
    );
}

InputComponent.defaultProps = {
    placeholder: '',
    required: false,
    type: 'text',
    readOnly: false
};

InputComponent.propTypes = {
    onChange: PropTypes.func.isRequired,
    componentRef: PropTypes.func,
    type: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    placeholder: PropTypes.string.isRequired,
    showError: PropTypes.bool.isRequired,
    hasError: PropTypes.bool.isRequired,
    labelClasses: PropTypes.string.isRequired,
    inputClasses: PropTypes.string.isRequired,
    readOnly: PropTypes.bool,
    label: PropTypes.string,
    size: PropTypes.number,
    max: PropTypes.number,
    min: PropTypes.number
};

export default InputComponent;
