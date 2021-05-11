import React, {useEffect, useContext, useRef} from 'react';
import contactContext from '../../context/contact/contactContext';

const Filter = () => {
    const {filterContacts, clearFilter, filtered} = useContext(contactContext);
    const text = useRef('');

    useEffect(() => {
        if(filtered === null) {
            text.current.value = '';
        }
    });

    const onChange = e => {
        e.preventDefault();
        if(text.current.value !== '') {
            filterContacts(e.target.value);
        } else {
            clearFilter();
        }
    };
    return (
        <form className="filter">
            <input type="text" ref={text} placeholder="Search contact" onChange={onChange} />
            {
                text.current.value && <button><i className="fas fa-times-circle"></i></button>
            }
        </form>
    )
}

export default Filter;
