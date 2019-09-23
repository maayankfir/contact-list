import React, { useState, useContext, useEffect } from 'react';
import ContactContext from '../../context/contact/contactContext';
import { Button, Form, Header, Icon } from 'semantic-ui-react';
// import Contacts from './Contacts';

const ContactForm = () => {
  const contactContext = useContext(ContactContext);

  const { addContact, updateContact, clearCurrent, current } = contactContext;

  useEffect(() => {
    if (current !== null) {
      setContact(current);
    } else {
      setContact({
        name: '',
        email: '',
        phone: '',
        type: 'personal'
      });
    }
  }, [contactContext, current]);

  const [contact, setContact] = useState({
    name: '',
    email: '',
    phone: '',
    type: 'personal'
  });

  const { name, email, phone, type } = contact;

  const onChange = e =>
    setContact({ ...contact, [e.target.name]: e.target.value });

  const onSubmit = e => {
    e.preventDefault();
    if (current === null) {
      addContact(contact);
    } else {
      updateContact(contact);
    }
    clearAll();
  };

  const clearAll = () => {
    clearCurrent();
  };

  return (
    <Form onSubmit={onSubmit}>
      <Header as='h2'>{current ? 'Edit Contact' : 'Add Contact'}</Header>
      <Form.Input
        label='Name'
        type='name'
        name='name'
        value={name}
        onChange={onChange}
      />
      <Form.Input
        label='Email'
        type='email'
        name='email'
        value={email}
        onChange={onChange}
      />
      <Form.Input
        label='Phone'
        type='phone'
        name='phone'
        value={phone}
        onChange={onChange}
      />
      <Form.Group grouped>
        <label>Contant Type</label>
        <Form.Field
          label='Personal'
          control='input'
          type='radio'
          name='type'
          value='personal'
          onChange={onChange}
          checked={type}
        />
        <Form.Field
          label='Professional'
          control='input'
          type='radio'
          name='type'
          value='professional'
          onChange={onChange}
        />
      </Form.Group>

      <Button animated type='submit' color='green'>
        <Button.Content visible>
          {current ? 'Update Contact' : 'Add Contact'}
        </Button.Content>
        <Button.Content hidden>
          <Icon name='hand victory' />
        </Button.Content>
      </Button>
      {current && (
        <Button animated basic color='red' onClick={clearAll}>
          <Button.Content visible>Clear</Button.Content>
          <Button.Content hidden>
            <Icon name='arrow right' />
          </Button.Content>
        </Button>
      )}
    </Form>
  );
};

export default ContactForm;
