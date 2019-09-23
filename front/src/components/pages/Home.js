import React from 'react';
import { Grid, Header, Icon } from 'semantic-ui-react';
import Contacts from '../contacts/Contacts';
import ContactForm from '../contacts/ContactForm';
import ContactFilter from '../contacts/ContactFilter';

const Home = () => {
  return (
    <Grid celled>
      <Grid.Row>
        <Grid.Column width={10}>
          <Header as='h2' centered>
            Contacts <Icon name='users' circular />
          </Header>
          <ContactFilter />
          <br></br>
          <Contacts />
        </Grid.Column>
        <Grid.Column width={6}>
          <ContactForm />
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
};

export default Home;
