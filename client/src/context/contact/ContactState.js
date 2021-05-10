import React, {useReducer} from 'react';
import {v4 as uuid} from 'uuid';
import contactContext from './contactContext';
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
                id: 0,
                name: 'Ahmed',
                email: 'ahmed@gmail.com',
                phone: '111-111-1111',
                type: 'professional'
            },
            {
                id: 1,
                name: 'Faraz',
                email: 'faraz@gmail.com',
                phone: '222-222-2222',
                type: 'personal'
            },
            {
                id: 2,
                name: 'Max',
                email: 'max@gmail.com',
                phone: '333-333-3333',
                type: 'professional'
            },
            {
                id: 3,
                name: 'Sam',
                email: 'sam@gmail.com',
                phone: '444-444-4444',
                type: 'personal'
            },
        ]
    }
    const [state, dispatch] = useReducer(contactReducer, initialState);

    // Add Contact
    const addContact = contact => {
        contact.id = uuid();
        dispatch({type: ADD_CONTACT, payload: contact});
    }
    // Delete Contact

    // Set Current Contact

    // Clear Current Contact

    // Update Contact

    // Filter Contacts

    // Clear Filter

    return <contactContext.Provider value={{
        contacts: state.contacts,
        addContact,
    }}>
        {props.children}
    </contactContext.Provider>
}

export default ContactState;  