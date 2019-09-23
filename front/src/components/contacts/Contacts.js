import React, { Fragment, useContext } from 'react';
import ContactContext from '../../context/contact/contactContext';
import ContactItem from './ContactItem';
import { Card, Label } from 'semantic-ui-react';

const Contacts = () => {
  const contactContext = useContext(ContactContext);

  const { contacts, filtered } = contactContext;

  if (contacts.length === 0) {
    return (
      <Label basic color='red' pointing size='huge'>
        You Dont Have Contacts
      </Label>
    );
  }

  return (
    <div>
      <Card.Group doubling itemsPerRow={2} stackable>
        {filtered !== null
          ? filtered.map(contact => (
              <ContactItem
                textAlign='center'
                key={contact.id}
                contact={contact}
                textAlign='center'
              />
            ))
          : contacts.map(contact => (
              <ContactItem
                textAlign='center'
                key={contact.id}
                contact={contact}
                textAlign='center'
              />
            ))}
      </Card.Group>
    </div>
  );
};

export default Contacts;
