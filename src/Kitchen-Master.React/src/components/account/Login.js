import React, {Component} from 'react';
import {Grid, Header, Image, Form, Segment, Button, Message} from 'semantic-ui-react';
import styles from './login.module.css';

class Login extends Component {
  render() {
    return (
      <Grid textAlign='center' verticalAlign='middle' className={styles.loginForm}>
        <Grid.Column className={styles.gridColumn}>
          <Header as='h2' color='teal' textAlign='center'>
            <Image src='/logo.png' className={styles.logo} />
            <span className={styles.headerText}>Kitchen Master</span>
          </Header>
          <Form size='large'>
            <Segment stacked>
              <Form.Input fluid icon='user' iconPosition='left' placeholder='E-mail address' />
              <Form.Input fluid icon='lock' iconPosition='left' placeholder='Password' type='password' />

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

export default Login;
