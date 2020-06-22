import React, { Component } from 'react';
import Joi from '@hapi/joi';

class BaseForm extends Component {

    handleFieldChange = (name, value) => {
        const data = { ...this.state.data };
        data[name] = value;
        const errors = this.validateProperty(name, data);
        const backendError = '';
        this.setState({ data, errors, backendError });
    }

    validateProperty = (name, data) => {
        const schema = this.schema[name];
        const errors = { ...this.state.errors };
        if (schema) {
            const { error } = Joi.object({ [name]: schema }).unknown().validate(data);
            errors[name] = error ? error.message : null;
        }
        return errors;
    }

    validate = () => {
        const result = Joi.object(this.schema).unknown().validate(this.state.data);
        return !result.error;
    }

    getFormInputProps = () => {
        return {
            data: this.state.data,
            errors: this.state.errors,
            onChange: this.handleFieldChange
        };
    }
}

export default BaseForm;