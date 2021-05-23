import React, {useContext, useEffect} from 'react';
import ContactItem from './ContactItem';
import ContactFilter from './ContactFilter';
import contactContext from '../../context/contact/contactContext';

const Contacts = () => {
    const {contacts, filtered, getContacts} = useContext(contactContext);
    useEffect(() => {
        getContacts();
        //eslint-disable-next-line
    }, []);
    
    return (
        <div className="contacts">
            <ContactFilter />
            {filtered ? 
                (
                    filtered.length > 0 ? filtered.map(contact => <ContactItem key={contact._id} contact={contact} />) : <p>No match found.</p>
                )   
                :
                (
                    contacts.length > 0 ? contacts.map(contact => <ContactItem key={contact._id} contact={contact} />) : <p>Please use the form to add a contact.</p>
                )
                
            }
        </div>
    )
}

export default Contacts;