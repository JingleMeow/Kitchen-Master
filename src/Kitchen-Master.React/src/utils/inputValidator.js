import Joi from '@hapi/joi';

class InputValidator {
    constructor(anySchema) {
        this.schema = anySchema;
        this.messages = {};
    }

    static string() {
        return new InputValidator(Joi.string());
    }

    static number() {
        return new InputValidator(Joi.number());
    }
}

InputValidator.prototype.label = function (label) {
    this.schema = this.schema.label(label);
    return this;
}

InputValidator.prototype.done = function () {
    return this.schema.messages(this.messages);
}

InputValidator.prototype.required = function (message) {
    const validation = {
        rule: x => x.empty('').required(),
        key: 'any.required',
        defaultMessage: `{#label} is required.`,
        message
    }
    return this.addValidation(validation);
}

InputValidator.prototype.email = function (message) {
    const validation = {
        rule: x => x.email({ tlds: { allow: false } }),
        key: 'string.email',
        defaultMessage: `Please enter a valid email address.`,
        message
    }
    return this.addValidation(validation);
}

InputValidator.prototype.pattern = function (pattern, message) {
    const validation = {
        rule: x => x.pattern(pattern),
        key: 'string.pattern.base',
        defaultMessage: `{#label} fails to match the pattern.`,
        message
    }
    return this.addValidation(validation);
}

InputValidator.prototype.minLength = function (value, message) {
    const validation = {
        rule: x => x.min(value),
        key: 'string.min',
        defaultMessage: `{#label} should have a minimum length of {#limit}.`,
        message
    }
    return this.addValidation(validation);
}

InputValidator.prototype.match = function (key, message) {
    const validation = {
        rule: x => x.valid(Joi.ref(key)),
        key: 'any.only',
        defaultMessage: `{#label} doesn't match.`,
        message
    }
    return this.addValidation(validation);
}

InputValidator.prototype.min = function (value, message) {
    const validation = {
        rule: x => x.min(value),
        key: 'number.min',
        defaultMessage: `{#label} should have a minimum value of {#limit}.`,
        message
    }
    return this.addValidation(validation);
}

InputValidator.prototype.addValidation = function ({ rule, key, defaultMessage, message }) {
    this.schema = rule(this.schema);
    this.messages[key] = message ? message : defaultMessage;
    return this;
}

export default InputValidator;