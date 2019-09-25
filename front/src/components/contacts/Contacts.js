import React, { useContext } from 'react';
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
              <ContactItem key={contact.id} contact={contact} />
            ))
          : contacts.map(contact => (
              <ContactItem key={contact.id} contact={contact} />
            ))}
      </Card.Group>
    </div>
  );
};

export default Contacts;
