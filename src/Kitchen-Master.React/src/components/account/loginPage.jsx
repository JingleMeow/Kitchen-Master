import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect, Link } from 'react-router-dom';
import { Form, Segment, Button, Message } from 'semantic-ui-react';
import UserContext from '../../contexts/userContext';
import { CenterFormGrid, BaseForm, TextFormInput } from '../common';
import InputValidator from '../../utils/inputValidator';
import { login } from '../../services/webapi/account';
import { setAccessToken } from '../../utils/auth';
import { setLoader } from '../../redux/actions/setLoaderAction';
import styles from './loginPage.module.scss';

class LoginPage extends BaseForm {
  state = {
    data: {
      email: '',
      password: '',
    },
    errors: {},
    backendError: ''
  }

  schema = {
    email: InputValidator.string().required().email().label('Email').done(),
    password: InputValidator.string().required().label('Password').done(),
  }

  render() {
    if (this.context)
      return <Redirect to='/'></Redirect>

    const { backendError } = this.state;
    return (
      <CenterFormGrid>
        <Form size='large' className={styles.loginForm} onSubmit={this.handleSubmit}>
          <Segment stacked>
            <TextFormInput fluid icon='user' iconPosition='left' placeholder='E-mail address'
              autoComplete='email'
              name='email'
              {...this.getFormInputProps()} />
            <TextFormInput fluid icon='lock' iconPosition='left' placeholder='Password' type='password'
              autoComplete='current-password'
              name='password'
              {...this.getFormInputProps()} />
            {backendError && <Message negative>{backendError}</Message>}
            <Button color='teal' fluid size='large' disabled={!this.validate()}>
              Login
            </Button>
          </Segment>
        </Form>
        <Message>
          New to us? <Link to='/register'>Sign Up</Link>
        </Message>
      </CenterFormGrid>
    );
  }

  handleSubmit = () => {
    const { email, password } = this.state.data;
    login(email, password, this.props.setLoader)
      .then(response => {
        setAccessToken(response.data);
        window.location.href = '/';
      })
      .catch(error => {
        this.setState({
          backendError: error.data ? error.data : error.message
        });
      });
  }
}

LoginPage.contextType = UserContext;

const mapStateToProps = null;
const mapDispatchToProps = {
  setLoader
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);
