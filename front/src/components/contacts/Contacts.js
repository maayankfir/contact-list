import React, { Fragment, useContext } from 'react';
import ContactContext from '../../context/contact/contactContext';
import ContactItem from './ContactItem';
import { Grid, Header, Icon, Card } from 'semantic-ui-react';
import ContactForm from './ContactForm';

const Contacts = () => {
  const contactContext = useContext(ContactContext);

  const { contacts } = contactContext;

  return (
    <Grid celled>
      <Grid.Row>
        <Grid.Column width={6}>
          <Header as='h2' icon>
            <Icon name='users' circular />
            <Header.Content>Contacts</Header.Content>
          </Header>
          <Fragment>
            {contacts.map(contact => (
              <ContactItem
                textAlign='center'
                key={contact.id}
                contact={contact}
                textAlign='center'
              />
            ))}
          </Fragment>
        </Grid.Column>

        <Grid.Column width={10}>
          <ContactForm />
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
};

export default Contacts;
