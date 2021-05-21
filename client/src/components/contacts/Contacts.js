import React, {useContext} from 'react';
import ContactItem from './ContactItem';
import ContactFilter from './ContactFilter';
import contactContext from '../../context/contact/contactContext';

const Contacts = () => {
    const {contacts, filtered} = useContext(contactContext);
    
    return (
        <div className="contacts">
            <ContactFilter />
            {filtered ? 
                (
                    filtered.length > 0 ? filtered.map(contact => <ContactItem key={contact.id} contact={contact} />) : <p>No match found.</p>
                )   
                :
                (
                    contacts.length > 0 ? contacts.map(contact => <ContactItem key={contact.id} contact={contact} />) : <p>Please use the form to add a contact.</p>
                )
                
            }
        </div>
    )
}

export default Contacts;