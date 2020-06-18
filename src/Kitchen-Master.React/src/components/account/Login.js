import React, { Component } from 'react';
import { Grid, Header, Image, Form, Segment, Button, Message } from 'semantic-ui-react';
import styles from './login.module.css';
import UserContext from '../../contexts/userContext';
import { login } from '../../services/webapi/account';
import { setAccessToken } from '../../utils/auth';
import { Redirect } from 'react-router-dom';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };
  }

  handleEmailChange = (event, data) => {
    this.setState({
      email: data.value,
    });
  }

  handlePasswordChange = (event, data) => {
    this.setState({
      password: data.value,
    });
  }

  handleSubmit = () => {
    const { email, password } = this.state;
    login(email, password)
      .then(response => {
        setAccessToken(response.data);
        window.location.href = '/';
      });
  }

  render() {
    if (this.context)
      return <Redirect to='/'></Redirect>

    return (
      <Grid textAlign='center' verticalAlign='middle' className={styles.loginForm}>
        <Grid.Column className={styles.gridColumn}>
          <Header as='h2' color='teal' textAlign='center'>
            <Image src='/logo.png' className={styles.logo} />
            <span className={styles.headerText}>Kitchen Master</span>
          </Header>
          <Form size='large' onSubmit={this.handleSubmit}>
            <Segment stacked>
              <Form.Input fluid icon='user' iconPosition='left' placeholder='E-mail address'
                value={this.state.email} onChange={this.handleEmailChange} />
              <Form.Input fluid icon='lock' iconPosition='left' placeholder='Password' type='password'
                value={this.state.password} onChange={this.handlePasswordChange} />

              <Button color='teal' fluid size='large'>
                Login
              </Button>
            </Segment>
          </Form>
          <Message>
            New to us? <a href='#'>Sign Up</a>
          </Message>
        </Grid.Column>
      </Grid>
    );
  }
}

Login.contextType = UserContext;

export default Login;
