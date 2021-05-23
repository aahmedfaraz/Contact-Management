import React, {useReducer} from 'react';
import axios from 'axios';
import contactContext from './contactContext';
import contactReducer from './contactReducer';
import {
    GET_CONTACTS,
    ADD_CONTACT,
    DELETE_CONTACT,
    SET_CURRENT,
    CLEAR_CURRENT,
    UPDATE_CONTACT,
    FILTER_CONTACTS,
    CLEAR_FILTER,
    SET_ERROR,
    CLEAR_ERROR,
    CLEAR_CONTACTS
} from '../types';

const ContactState = props => {
    const initialState = {
        contacts: null,
        current: null,
        filtered: null,
        error: null,
        loading: true
    }
    const [state, dispatch] = useReducer(contactReducer, initialState);

    // Get Contacts
    const getContacts = async () => {
        try {
            const res = await axios.get('/api/contacts');
            dispatch({type: GET_CONTACTS, payload: res.data});
        } catch (err) {
            setError(err);
        }
    }

    // Add Contact
    const addContact = async contact => {
        const config = {
            headers: {
                'Content-Type': 'application/json',
            }
        }
        try {
            const res = await axios.post('/api/contacts', contact, config);
            dispatch({type: ADD_CONTACT, payload: res.data});
        } catch (err) {
            setError(err);
        }
    };

    // Delete Contact
    const deleteContact = async id => {
        try {
            await axios.delete(`/api/contacts/${id}`);
            dispatch({type: DELETE_CONTACT, payload: id});
        } catch (err) {
            setError(err);
        }
    };

    // Set Current Contact
    const setCurrent = contact => {
        dispatch({type: SET_CURRENT, payload: contact});
    }

    // Clear Current Contact
    const clearCurrent = () => {
        dispatch({type: CLEAR_CURRENT});
    }

    // Update Contact
    const updateContact = async contact => {
        const config = {
            headers: {
                'Content-Type': 'application/json',
            }
        }
        try {
            const res = await axios.put(`/api/contacts/${contact._id}`, contact, config);
            dispatch({type: UPDATE_CONTACT, payload: res.data});
        } catch (err) {
            setError(err);
        }
        clearCurrent();
    }

    // Filter Contacts
    const filterContacts = text => {
        dispatch({type: FILTER_CONTACTS, payload: text});
    }

    // Clear Filter
    const clearFilter = () => {
        dispatch({type: CLEAR_FILTER});
    }

    // Set Error
    const setError = (msg) => dispatch({type: SET_ERROR, payload: msg});

    // Clear Error
    const clearError = () => dispatch({type: CLEAR_ERROR});

    // Clear Contacts
    const clearContacts = () => dispatch({type: CLEAR_CONTACTS})

    return <contactContext.Provider value={{
        contacts: state.contacts,
        current: state.current,
        filtered: state.filtered,
        error: state.error,
        loading: state.loading,
        getContacts,
        addContact,
        deleteContact,
        setCurrent,
        clearCurrent,
        updateContact,
        filterContacts,
        clearFilter,
        clearError,
        clearContacts
    }}>
        {props.children}
    </contactContext.Provider>
}

export default ContactState;  