import React, { useState, useContext, useEffect } from 'react';
import AuthContext from '../../context/auth/authContext';
import AlertContext from '../../context/alert/alertContext';

import {
  Button,
  Form,
  Grid,
  Header,
  Message,
  Segment
} from 'semantic-ui-react';

const Login = props => {
  const alertContext = useContext(AlertContext);
  const authContext = useContext(AuthContext);
  const { login, error, clearErrors, isAuthenticaed } = authContext;
  const { setAlert } = alertContext;

  useEffect(() => {
    if (isAuthenticaed) {
      props.history.push('/home');
    }
    if (error === 'Invalid Credentials') {
      setAlert(error);
      clearErrors();
    }
    //eslint-disable-next-line
  }, [error, isAuthenticaed, props.history]);

  const [user, setUser] = useState({
    email: '',
    password: ''
  });

  const { email, password } = user;

  const onChange = e => setUser({ ...user, [e.target.name]: e.target.value });
  const onSubmit = e => {
    e.preventDefault();
    if (email === '' || password === '') {
      setAlert('Please fill all fileds');
    } else {
      login({
        email,
        password
      });
    }
  };
  return (
    <Grid textAlign='center' style={{ height: '80vh' }} verticalAlign='middle'>
      <Grid.Column style={{ maxWidth: 450 }}>
        <Header as='h2' color='olive' textAlign='center'>
          Log-in to your account
        </Header>
        <Form size='large' onSubmit={onSubmit} verticalAlign='middle'>
          <Segment stacked>
            <Form.Input
              fluid
              icon='mail'
              iconPosition='left'
              placeholder='E-mail address'
              name='email'
              value={email}
              onChange={onChange}
              required
            />
            <Form.Input
              fluid
              icon='lock'
              iconPosition='left'
              placeholder='Please enter your password'
              type='password'
              name='password'
              value={password}
              onChange={onChange}
              required
            />
            <Button color='olive' fluid size='large'>
              Log In
            </Button>
          </Segment>
        </Form>
        <Message>
          New to us? <a href='/'>Sign Up</a>
        </Message>
      </Grid.Column>
    </Grid>
  );
};

export default Login;
