import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import contactContext from '../../context/contact/contactContext';
import { CSSTransition } from 'react-transition-group';

const ContactItem = ({contact}) => {
    const {name, email, phone, type} = contact;
    const icon = type === 'personal' ? 'user' : 'user-tie';

    const {deleteContact ,setCurrent, clearCurrent} = useContext(contactContext);
    
    const onSetCurrent = e => {
        e.preventDefault();
        setCurrent(contact);
    }

    const onDelete = e => {
        e.preventDefault();
        deleteContact(contact._id);
        clearCurrent();
    }

    return (
        <CSSTransition in={true} timeout={1000} className="contact" unmountOnExit>
            <div className="contact">
                <small className={type}>
                    <i className={`fas fa-${icon}`}></i> {type.charAt(0).toUpperCase() + type.slice(1)}
                </small>
                <p className="name">{name}</p>
                <p><i className="fas fa-envelope-square"></i> {email}</p>
                <p><i className="fas fa-phone-square"></i> {phone}</p>
                <div className="controls">
                    <button className="edit" onClick={onSetCurrent}>Edit</button>
                    <button className="delete" onClick={onDelete}>Delete</button>
                </div>
            </div>
        </CSSTransition>
    )
}

ContactItem.prototype = {
    contact: PropTypes.object.isRequired,
}

export default ContactItem;