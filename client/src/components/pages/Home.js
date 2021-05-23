import React, {Fragment, useContext, useEffect} from 'react';
import ContactForm from '../contacts/ContactForm';
import Contacts from '../contacts/Contacts';
import navbarContext from '../../context/navbar/navbarContext';
import authContext from '../../context/auth/authContext';
import contactContext from '../../context/contact/contactContext';
import Spinner from '../layout/Spinner';

const Home = props => {
    const {gotoPage} = useContext(navbarContext);
    const {loadUser} = useContext(authContext);
    const {contacts, loading, getContacts} = useContext(contactContext);
    useEffect(() => {
        gotoPage('home');
        if(localStorage.token) {
            loadUser();
        }
        getContacts();
        //eslint-disable-next-line
    }, []);
    // If logout goto welcome page
    if(!localStorage.token) {
        props.history.push('/welcome');
        gotoPage('welcome');
    };
    return (
        <div className="home">
            {
                contacts !== null && !loading ?
                <Fragment>
                    <ContactForm />
                    <Contacts />
                </Fragment>:
                <Spinner />
            }
        </div>
    )
}

export default Home;