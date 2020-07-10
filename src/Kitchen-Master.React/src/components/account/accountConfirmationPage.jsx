import React from 'react';
import { connect } from 'react-redux';
import { Form, Segment, Button, Message } from 'semantic-ui-react';
import BaseForm from '../common/baseForm';
import CenterFormGrid from '../common/centerFormGrid';
import TextFormInput from '../common/textFormInput';
import InputValidator from '../../utils/inputValidator';
import { setLoader } from '../../redux/actions/setLoaderAction';
import { confirmAccount } from '../../services/webapi/account'
import styles from './accountConfirmationPage.module.css';

class AccountConfirmationPage extends BaseForm {
    state = {
        data: {
            email: '',
            password: '',
            firstName: '',
            lastName: ''
        },
        errors: {},
        backendError: ''
    }
    schema = {
        email: InputValidator.string().required().email().label('Email').done(),
        password: InputValidator.string().required().label('Password').done(),
        firstName: InputValidator.string().required().label('First Name').done(),
        lastName: InputValidator.string().required().label('Last Name').done()
    }

    render() {
        const { backendError } = this.state;
        return (
            <CenterFormGrid>
                <Form size='large' className={styles.loginForm} onSubmit={this.handleSubmit}>
                    <Segment stacked>
                        <TextFormInput fluid icon='mail' iconPosition='left' placeholder='Your E-mail'
                            autoComplete='email'
                            name='email'
                            {...this.getFormInputProps()} />
                        <TextFormInput fluid icon='lock' iconPosition='left' placeholder='Password' type='password'
                            autoComplete='current-password'
                            name='password'
                            {...this.getFormInputProps()} />
                        <TextFormInput fluid icon='user' iconPosition='left' placeholder='First Name'
                            name='firstName'
                            {...this.getFormInputProps()} />
                        <TextFormInput fluid icon='user' iconPosition='left' placeholder='Last Name'
                            name='lastName'
                            {...this.getFormInputProps()} />
                        {backendError && <Message negative>{backendError}</Message>}
                        <Button color='teal' fluid size='large' disabled={!this.validate()}>Confirm</Button>
                    </Segment>
                </Form>
            </CenterFormGrid>);
    }

    handleSubmit = () => {
        const { match, setLoader } = this.props;
        const token = decodeURIComponent(match.params.token);
        console.log(token);
        const model = Object.assign({}, this.state.data, { token });
        confirmAccount(model, setLoader)
            .then(response => {
                this.props.history.push('/accountConfirmed');
            })
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
};

export default connect(mapStateToProps, mapDispatchToProps)(AccountConfirmationPage);