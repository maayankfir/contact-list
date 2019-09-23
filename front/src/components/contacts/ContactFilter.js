import React, { useContext, useRef, useEffect } from 'react';
import ContactContext from '../../context/contact/contactContext';
import { Form, Header } from 'semantic-ui-react';

const ContactFilter = () => {
  const contactContext = useContext(ContactContext);
  const text = useRef('');

  const { filterContacts, clearFilter, filtered } = contactContext;

  useEffect(() => {
    if (filtered === null) {
      text.current.value = '';
    }
  });

  const onChange = e => {
    if (text.current.value !== '') {
      filterContacts(e.target.value);
    } else {
      clearFilter();
    }
  };

  return (
    <Form>
      <Header as='h3'>Search Contact</Header>
      <input
        ref={text}
        type='text'
        placeholder='Type a name or Email address '
        onChange={onChange}
      />
    </Form>
  );
};

export default ContactFilter;
