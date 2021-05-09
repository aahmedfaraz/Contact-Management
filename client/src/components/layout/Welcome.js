import React from 'react';
import image from '../../assets/vectors/illustration.svg';

const Welcome = () => {
    return (
        <div className="before-login">
            < img src={image} alt="Illustration" />
            <p>
                Keep track of all your contacts
                <br />
                <small><span>Log In</span> or <span>Sign Up</span> to continue</small>
            </p>
        </div>
    )
}

export default Welcome;