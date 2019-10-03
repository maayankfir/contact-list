import React, { useContext, useEffect } from 'react';
import { Grid, Header, Icon } from 'semantic-ui-react';
import Contacts from '../contacts/Contacts';
import ContactForm from '../contacts/ContactForm';
import ContactFilter from '../contacts/ContactFilter';
import AuthContext from '../../context/auth/authContext';

const Home = () => {
  const authContext = useContext(authContext);

  useEffect(() => {
    authContext.loadUser();
    //eslint/disable-next-line
  }, []);

  return (
    <Grid celled>
      <Grid.Row>
        <Grid.Column width={10}>
          <Header as='h2'>
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
