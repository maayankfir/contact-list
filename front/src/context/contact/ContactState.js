import React, { useReducer } from 'react';
import uuid from 'uuid';
import ContactContext from './contactContext';
import contactReducer from './contactReducer';

import {
  ADD_CONTACT,
  DELETE_CONTACT,
  SET_CURRENT,
  CLEAR_CURRENT,
  UPDATE_CONTACT,
  FILTER_CONTACTS,
  CLEAR_FILTER
} from '../types';

const ContactState = props => {
  const initialState = {
    contacts: [
      {
        id: 1,
        name: 'Abc',
        email: 'abc@gmail.com',
        phone: '123',
        type: 'personal'
      },
      {
        id: 2,
        name: 'Def',
        email: 'def@gmail.com',
        phone: '456',
        type: 'personal'
      },
      {
        id: 3,
        name: 'Ghi',
        email: 'ghi@gmail.com',
        phone: '789',
        type: 'personal'
      }
    ]
  };
  const [state, dispatch] = useReducer(contactReducer, initialState);

  //add contact
  //delete contact
  //set current contact
  //clear contact
  //update contact

  return (
    <ContactContext.Provider
      value={{
        contacts: state.contacts
      }}
    >
      {props.children}
    </ContactContext.Provider>
  );
};

export default ContactState;