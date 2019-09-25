import React, { useState, useContext } from 'react';
import AlertContext from '../../context/alert/alertContext';

import {
  Button,
  Form,
  Grid,
  Header,
  Image,
  Message,
  Segment
} from 'semantic-ui-react';

const Register = () => {
  const alertContext = useContext(AlertContext);

  const { setAlert } = alertContext;

  const [user, setUser] = useState({
    name: '',
    email: '',
    password: '',
    password2: ''
  });

  const { name, email, password, password2 } = user;

  const onChange = e => setUser({ ...user, [e.target.name]: e.target.value });
  const onSubmit = e => {
    e.preventDefault();
    if (name === '' || email === '' || password === '') {
      setAlert('Please enter all fields!', 'danger');
    } else if (password !== password2) {
      setAlert('Passwords do not match! Please try again.');
    } else {
      console.log('register');
    }
  };
  return (
    <Grid textAlign='center' style={{ height: '80vh' }} verticalAlign='middle'>
      <Grid.Column style={{ maxWidth: 450 }}>
        <Header as='h2' color='olive' textAlign='center'>
          Register
        </Header>
        <Form size='large' onSubmit={onSubmit} verticalAlign='middle'>
          <Segment stacked>
            <Form.Input
              fluid
              icon='user'
              iconPosition='left'
              placeholder='Please enter your full name'
              type='text'
              name='name'
              value={name}
              onChange={onChange}
              required
            />
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
              minLength='6'
              required
            />
            <Form.Input
              fluid
              icon='lock'
              iconPosition='left'
              placeholder='Please confirm your password'
              type='password'
              name='password2'
              value={password2}
              onChange={onChange}
              required
              minLength='6'
            />
            <Button color='olive' fluid size='large'>
              Register
            </Button>
          </Segment>
        </Form>
        <Message>
          Already Have An Account? <a href='/login'>Sign In</a>
        </Message>
      </Grid.Column>
    </Grid>
  );
};

export default Register;
