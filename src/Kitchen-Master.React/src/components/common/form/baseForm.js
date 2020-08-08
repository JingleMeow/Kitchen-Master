import { Component } from 'react';
import Joi from '@hapi/joi';

class BaseForm extends Component {
    getNewState = (name, value) => {
        const data = { ...this.state.data };
        data[name] = value;
        const errors = this.validateProperty(name, data);
        const backendError = '';
        return { data, errors, backendError };
    }

    handleFieldChange = (name, value) => {
        const { data, errors, backendError } = this.getNewState(name, value);
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

    getFormInputProps = (useCustomChangeHandler = false) => {
        const props = {
            data: this.state.data,
            errors: this.state.errors,
        };
        if (!useCustomChangeHandler)
            props.onChange = (event, data) => this.handleFieldChange(data.name, data.value);
        return props;
    }
}

export default BaseForm;