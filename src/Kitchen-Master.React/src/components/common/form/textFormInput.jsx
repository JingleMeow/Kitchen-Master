import React, { Component } from 'react';
import { Form } from 'semantic-ui-react';
import PropTypes from 'prop-types';

const TextFormInput = ({ name, data, onChange, errors, ...rest }) => {
    return (
        <Form.Input fluid
            name={name}
            value={data[name]}
            onChange={onChange}
            error={errors[name]}
            {...rest} />
    );
}

TextFormInput.propTypes = {
    name: PropTypes.string.isRequired,
    data: PropTypes.object.isRequired,
    onChange: PropTypes.func,
    errors: PropTypes.object,
}

export default TextFormInput;