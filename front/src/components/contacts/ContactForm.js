import React, { useState, useContext } from 'react';
import ContactContext from '../../context/contact/contactContext';
import { Button, Form } from 'semantic-ui-react';
import Contacts from './Contacts';

const ContactForm = () => {
  const contanctContext = useContext(ContactContext);

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
    contanctContext.addContact(contact);
    setContact({
      name: '',
      email: '',
      phone: '',
      type: 'personal'
    });
  };
  return (
    <Form onSubmit={onSubmit}>
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
      <Button type='submit'>Add Contact</Button>
    </Form>
  );
};

export default ContactForm;
