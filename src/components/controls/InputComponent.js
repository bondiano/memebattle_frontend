import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

function InputComponent(props) {
    const {label, componentRef, showError, hasError, ...restProps} = props;

    return ([
        label && <label key='label' htmlFor={restProps.name} dangerouslySetInnerHTML={{__html: label}}/>,
        <input
            ref={componentRef}
            id={restProps.name}
            key='input'
            {...restProps}
            className={classNames({invalid: showError || hasError})}
        />
    ]);
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
    readOnly: PropTypes.bool,
    label: PropTypes.string,
    size: PropTypes.number,
    max: PropTypes.number,
    min: PropTypes.number
};

export default InputComponent;
