import React, { useContext } from 'react';
import { Card, Icon, Button, Grid } from 'semantic-ui-react';
import ContactContext from '../../context/contact/contactContext';

const ContactItem = ({ contact }) => {
  const contactContext = useContext(ContactContext);
  const { deleteContact } = contactContext;
  const { id, name, email, phone, type } = contact;

  const onDelete = () => {
    deleteContact(id);
  };

  return (
    <Card>
      <Card.Content>
        <Card.Header>
          <Icon name='address card outline' />
          {name}
        </Card.Header>
        <Card.Meta>
          <Icon name='eye' />
          {type.charAt(0).toUpperCase() + type.slice(1)}
        </Card.Meta>
        <Card.Description>
          <a>
            <Icon name='mail' />
            {email}
          </a>
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <Icon name='phone' />
        {phone}
      </Card.Content>
      <Card.Content extra>
        <div className='ui two buttons'>
          <Button primary>Edit</Button>
          <Button secondary onClick={onDelete}>
            Delete
          </Button>
        </div>
      </Card.Content>
    </Card>
  );
};

export default ContactItem;
