import React, {Fragment} from 'react'

const About = () => {
    return (
        <Fragment>
            <h2 className="about">About the Contact Management App</h2>
            <p className="about">
                This <span>Contact Manager App</span> is a <b>Full stack MERN App</b>
                <br />
                Developed by <span>Ahmed Faraz</span>
                <br />
                for keeping track of all your contacts
            </p>
            <p className="about">
                <strong>Version: </strong> 1.0
            </p>
        </Fragment>
    )
}

export default About;