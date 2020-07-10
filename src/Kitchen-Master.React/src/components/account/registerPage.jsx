import React from 'react';
import { connect } from 'react-redux';
import { Form, Segment, Button, Message } from 'semantic-ui-react';
import styles from './registerPage.module.css';
import { CenterFormGrid, BaseForm, TextFormInput } from '../common';
import InputValidator from '../../utils/inputValidator';
import { passwordRegex, passwordError } from '../../utils/auth';
import { register } from '../../services/webapi/account';
import { setLoader } from '../../redux/actions/setLoaderAction'

class RegisterPage extends BaseForm {
    state = {
        data: {
            email: '',
            password: '',
            passwordConfirm: '',
        },
        errors: {},
        backendError: ''
    }

    schema = {
        email: InputValidator.string().required().email().label('Email').done(),
        password: InputValidator.string().required().pattern(passwordRegex, passwordError).label('Password').done(),
        passwordConfirm: InputValidator.string().required().match('password').label('Password').done()
    }

    render() {
        const { backendError } = this.state;
        return (
            <CenterFormGrid>
                <Form size='large' className={styles.registerForm} onSubmit={this.handleSubmit}>
                    <Segment stacked>
                        <TextFormInput fluid icon='user' iconPosition='left' placeholder='E-mail address'
                            autoComplete='email'
                            name='email'
                            {...this.getFormInputProps()} />
                        <TextFormInput fluid icon='lock' iconPosition='left' placeholder='Password' type='password'
                            autoComplete='current-password'
                            name='password'
                            {...this.getFormInputProps()} />
                        <TextFormInput fluid icon='lock' iconPosition='left' placeholder='Repeat Password' type='password'
                            autoComplete='off'
                            name='passwordConfirm'
                            {...this.getFormInputProps()} />
                        {backendError && <Message negative>{backendError}</Message>}
                        <Button color='teal' fluid size='large' disabled={!this.validate()}>
                            Register
                        </Button>
                    </Segment>
                </Form>
            </CenterFormGrid>
        );
    }

    handleSubmit = () => {
        const { email, password } = this.state.data;
        register(email, password, this.props.setLoader)
            .then(response =>
                this.props.history.push('/registerSucceeded', { email })
            )
            .catch(error => {
                this.setState({
                    backendError: error.data ? error.data : error.message
                });
            });
    }
}

const mapStateToProps = null;
const mapDispatchToProps = {
    setLoader
}

export default connect(mapStateToProps, mapDispatchToProps)(RegisterPage);