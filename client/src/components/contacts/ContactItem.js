import React from 'react';
import PropTypes from 'prop-types';

const ContactItem = ({contact}) => {
    const {name, email, phone, type} = contact;
    const icon = type === 'personal' ? 'user' : 'user-tie';
    return (
        <div className="contact">
            <small className={type}>
                <i className={`fas fa-${icon}`}></i> {type.charAt(0).toUpperCase() + type.slice(1)}
            </small>
            <p className="name">{name}</p>
            <p><i className="fas fa-envelope-square"></i> {email}</p>
            <p><i className="fas fa-phone-square"></i> {phone}</p>
            <div className="controls">
                <button className="edit">Edit</button>
                <button className="delete">Delete</button>
            </div>
        </div>
    )
}

ContactItem.prototype = {
    contact: PropTypes.object.isRequired,
}

export default ContactItem;