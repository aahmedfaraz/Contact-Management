import React, {Fragment, useContext, useEffect} from 'react';
import Welcome from '../layout/Welcome';
import ContactForm from '../contacts/ContactForm';
import Contacts from '../contacts/Contacts';
import navbarContext from '../../context/navbar/navbarContext'

const Home = () => {
    const {gotoPage} = useContext(navbarContext);
    useEffect(() => {
        gotoPage('home')
        //eslint-disable-next-line
    }, []);
    const login = true;
    return (
        <Fragment>
            {
                !login ? <Welcome /> :
                <div className="home">
                    <ContactForm />
                    <Contacts />
                </div>
            }
        </Fragment>
    )
}

export default Home;