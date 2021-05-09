import React from 'react';
import image from '../../assets/vectors/illustration.svg';
import {Link} from 'react-router-dom';

const Welcome = () => {
    return (
        <div className="before-login">
            < img src={image} alt="Illustration" />
            <p>
                Keep track of all your contacts
                <br />
                <small>
                    <Link to="/login" className="welcome-link"><span>Log In</span></Link> or <Link to="/signup" className="welcome-link"><span>Sign Up</span></Link> to continue
                </small>
            </p>
        </div>
    )
}

export default Welcome;