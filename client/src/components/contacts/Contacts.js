import React, {useContext} from 'react';
import ContactItem from './ContactItem';
import Filter from '../layout/Filter';
import contactContext from '../../context/contact/contactContext';

const Contacts = () => {
    const {contacts} = useContext(contactContext);
    return (
        <div className="contacts">
            <Filter />
            {
                contacts.length > 0 ?
                contacts.map(contact => <ContactItem key={contact.id} contact={contact} />)
                : <p>No Contacts has been added yet</p>
            }
        </div>
    )
}

export default Contacts;