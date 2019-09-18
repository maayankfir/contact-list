import React, { Fragment, useContext } from 'react';
import ContactContext from '../../context/contact/contactContext';
import ContactItem from './ContactItem';
import { Grid, Header, Icon } from 'semantic-ui-react';
const Contacts = () => {
  const contactContext = useContext(ContactContext);

  const { contacts } = contactContext;

  return (
    <Grid columns={2} divided>
      <Grid.Row>
        <Grid.Column>
          <Header as='h2' icon textAlign='center'>
            <Icon name='users' circular />
            <Header.Content>Contacts</Header.Content>
          </Header>
          <Fragment>
            {contacts.map(contact => (
              <ContactItem
                key={contact.id}
                contact={contact}
                textAlign='center'
              />
            ))}
          </Fragment>
        </Grid.Column>
        <Grid.Column>Form</Grid.Column>
      </Grid.Row>
    </Grid>
  );
};

export default Contacts;
