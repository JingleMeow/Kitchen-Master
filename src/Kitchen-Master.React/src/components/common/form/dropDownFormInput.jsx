import React from 'react';
import { Form } from 'semantic-ui-react';
import PropTypes from 'prop-types';

const DropDownFormInput = ({ name, data, onChange, errors, ...rest }) => {
    return (
        <Form.Dropdown fluid
            name={name}
            value={data[name]}
            onChange={(event, data) => onChange(data.name, data.value)}
            error={errors[name]}
            {...rest} />
    );
}

DropDownFormInput.propTypes = {
    name: PropTypes.string.isRequired,
    data: PropTypes.object.isRequired,
    onChange: PropTypes.func,
    errors: PropTypes.object,
}

export default DropDownFormInput;