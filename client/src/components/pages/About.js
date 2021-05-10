import React, {Fragment, useEffect, useContext} from 'react';
import navbarContext from '../../context/navbar/navbarContext'

const About = () => {
    const {gotoPage} = useContext(navbarContext);
    useEffect(() => {
        gotoPage('about')
        //eslint-disable-next-line
    }, []);
    return (
        <Fragment>
            <h2 className="about">About the Contact Management App</h2>
            <p className="about">
                This <span>Contact Manager App</span> is a <b>Full stack MERN App</b>
                <br />
                Developed by <span><a href="https://github.com/aahmedfaraz" target="_blank" title="Ahmed Faraz | Full Stack Cloud Developer">Ahmed Faraz</a></span>
                <br />
                for keeping track of all your contacts
            </p>
            <p className="about version">
                <strong>Version: </strong> 1.0
            </p>
        </Fragment>
    )
}

export default About;