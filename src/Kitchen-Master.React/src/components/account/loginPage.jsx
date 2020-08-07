import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect, Link } from 'react-router-dom';
import { Form, Segment, Button, Message } from 'semantic-ui-react';
import { CenterFormGrid } from '../common';
import { BaseForm, TextFormInput } from '../common/form'
import InputValidator from '_/utils/inputValidator';
import { currentUserSelector } from '_/redux/selectors/shared';
import { loginAction } from '_/redux/actions/account';
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
    if (this.props.currentUser)
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
    this.props.login(this.state.data)
      .then(() => window.location.href = '/')
      .catch(error => {
        this.setState({
          backendError: error.data ? error.data : error.message
        });
      });
  }
}

const mapStateToProps = state => {
  return {
    currentUser: currentUserSelector(state)
  };
};
const mapDispatchToProps = {
  login: loginAction
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);
