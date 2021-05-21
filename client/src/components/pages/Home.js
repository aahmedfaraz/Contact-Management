import React, {Fragment, useContext, useEffect} from 'react';
import Welcome from '../layout/Welcome';
import ContactForm from '../contacts/ContactForm';
import Contacts from '../contacts/Contacts';
import navbarContext from '../../context/navbar/navbarContext';
import authContext from '../../context/auth/authContext';

const Home = () => {
    const {gotoPage} = useContext(navbarContext);
    const {loadUser, isAuthenticated} = useContext(authContext);
    useEffect(() => {
        gotoPage('home');
        if(localStorage.token) {
            loadUser();
        }
        //eslint-disable-next-line
    }, []);
    return (
        <Fragment>
            {
                !isAuthenticated ? <Welcome /> :
                <div className="home">
                    <ContactForm />
                    <Contacts />
                </div>
            }
        </Fragment>
    )
}

export default Home;