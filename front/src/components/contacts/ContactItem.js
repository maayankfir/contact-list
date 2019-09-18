import React from 'react';
import { Card, Icon, Button } from 'semantic-ui-react';

const ContactItem = ({ contact }) => {
  const { id, name, email, phone, type } = contact;
  return (
    <Card textAlign='center'>
      <Card.Content>
        <Card.Header>
          {' '}
          <Icon name='address card outline' />
          {name}
        </Card.Header>
        <Card.Meta>
          <Icon name='eye' />
          <span className='type' color='red'>
            {type.charAt(0).toUpperCase() + type.slice(1)}
          </span>
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
          <Button secondary>Delete</Button>
        </div>
      </Card.Content>
    </Card>
  );
};

export default ContactItem;
