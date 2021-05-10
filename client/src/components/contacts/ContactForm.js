import React, {useState,useContext} from 'react';
import contactContext from '../../context/contact/contactContext';

const ContactForm = () => {
    const [contact, setContact] = useState({
        name: '',
        email: '',
        phone: '',
        type: 'personal',
    });
    const {name, email, phone, type} = contact;
    const onChange = e => setContact({...contact, [e.target.name]: e.target.value});

    const {addContact} = useContext(contactContext);

    const onSubmit = e => {
        e.preventDefault();
        addContact(contact);
        setContact({
            name: '',
            email: '',
            phone: '',
            type: 'personal',
        })
    }

    return (
        <form onSubmit={onSubmit} className="contact-form">            
            <h2>Add Contact</h2>
            <div className="form-control">
                <label htmlFor="contact-name">Name</label>
                <input type="text" id="contact-name" name="name" value={name} onChange={onChange} />
            </div>
            <div className="form-control">
                <label htmlFor="contact-email">Email</label>
                <input type="email" id="contact-email" name="email" value={email} onChange={onChange} />
            </div>
            <div className="form-control">
                <label htmlFor="phone">Phone</label>
                <input type="text" id="phone" name="phone" value={phone} onChange={onChange} />
            </div>
            <div className="form-control">
                <label htmlFor="contact-type">Contact type</label>
                <div className="radio-container">
                    <input type="radio" name="type" value="personal" checked={type==='personal'} onChange={onChange} /> Personal
                    <input type="radio" name="type" value="professional" checked={type==='professional'} onChange={onChange} /> Professional
                </div>
            </div>
            <input type="submit" value="Add Contact" />
        </form>
    )
}

export default ContactForm;